import {action, VDOMN, namespaces, nodeType, voidElements} from "./const";

class KeyGenerator {
	constructor () {
		this.storage = {};
		return this.forTag;
	}
	forTag (tag) {
		if (tag === null) {
			tag = "-null";
		}
		this.storage[tag] = this.storage[tag] || 0;
		this.storage[tag]++;
		return `${tag}#~#${this.storage[tag]}`;
	}
}

class KeyGen {
	constructor () {
		const storage = {};
		return (key, type) => {
			type = type || "-notype";
			if (key) {
				return `${type}#${key}`;
			}
			storage[type] = storage[type] || 0;
			storage[type]++;
			return `${type}:idx(${storage[type]})`;
		};
	}
}

class OrderedDiffList {
	constructor () {
		this.head = null;
		this.tail = null;
	}
	add (record) {
		let p = this.tail;
		let c;
		const remove = record.action === action.REMOVE || record.action === action.PASSIVE_REMOVE;
		const idx = remove ? record.o.idx : record.n.idx;

		while (p) {
			const _remove = p.record.action === action.REMOVE || p.record.action === action.PASSIVE_REMOVE;
			const _idx = _remove ? p.record.o.idx : p.record.n.idx;
			if (_idx < idx) {
				break;
			}
			if (idx < _idx || (remove && idx === _idx)) {
				c = p;
			}
			p = p.prev;
		}

		if (!this.head) { // make new head
			p = {record};
			this.head = p;
			if (!this.tail) {
				this.tail = this.head;
			}
		}
		else if (!c) { // append to tail
			p = {record, prev: this.tail};
			this.tail.next = p;
			this.tail = p;
		}
		else { // append inside
			p = {record, prev: c.prev, next: c};
			c.prev = p;
			if (p.prev) {
				p.prev.next = p;
			}
			else {
				this.head = p;
			}
		}
	}
	getResult () {
		const result = [];
		let p = this.head;
		let idx = 0;
		while (p) {
			if (p.record.n) {
				p.record.idx = idx;
			}
			result.push(p.record);
			idx++;
			p = p.next;
		}
		return result;
	}
}

function getContent (content) {
	return content !== null && !Array.isArray(content) ? content : null;
}

function _diff2 (n, o, onDiff) {
	const newContent = !n || !Array.isArray(n[VDOMN.content]) ? null : n[VDOMN.content];
	const oldContent = !o || !Array.isArray(o[VDOMN.content]) ? null : o[VDOMN.content];
	const result = [];
	let idx;
	let length;

	if (newContent && oldContent) {
        // first run: find pairs
		const index = {};
		const keyGenNew = new KeyGen();
		const keyGenOld = new KeyGen();
		const pairs = [];

		idx = 0;
		length = Math.max(newContent.length, oldContent.length);
		while (idx < length) {
			const pairIdx = pairs.length;
			if (oldContent && oldContent[idx]) {
				const vnode = oldContent[idx];
				let [type, params, content] = vnode;
				params = params || {};
				const key = keyGenOld(params.key, type);
				const pair = index[key] = index[key] || {type};

				pair.o = {params, content: getContent(content), idx};
				pair.oldVNode = vnode;
				pair.action = pair.n ? action.UPDATE : action.REMOVE;

				pair.oldIdx = pairIdx;
				pairs.push(pair);
			}
			if (newContent && newContent[idx]) {
				const vnode = newContent[idx];
				let [type, params, content] = vnode;
				params = params || {};
				const key = keyGenNew(params.key, type);
				const pair = index[key] = index[key] || {type};

				pair.n = {params, content: getContent(content), idx};
				pair.newVNode = vnode;
				pair.action = pair.o ? action.UPDATE : action.CREATE;

				if (pair.oldIdx === pairIdx) { // do not duplicate
					pair.newIdx = pairIdx;
				}
				else {
					pair.newIdx = pairs.length;
					pairs.push(pair);
				}
			}
			idx++;
		}

        // second run: generate result
		idx = 0;
		length = pairs.length;
		while (idx < length) {
			const pair = pairs[idx];
			if (pair.action !== action.UPDATE || pair.newIdx === idx) {
				const children = _diff2(pair.newVNode, pair.oldVNode, onDiff);
				const diff = {
					type: pair.type,
					n: pair.n,
					o: pair.o,
					action: pair.action,
					children: children && children.length ? children : null
				};
				if (onDiff) {
					onDiff(diff, pair.newVNode, pair.oldVNode);
				}
				else {
					result.push(diff);
				}
			}
			idx++;
		}
	}
	else if (newContent) { // fast passive create
		idx = 0;
		length = newContent.length;
		while (idx < length) {
			const vnode = newContent[idx];
			let [type, params, content] = vnode;
			params = params || {};
			const children = _diff2(vnode, null);
			const diff = {
				type,
				n: {params, content: getContent(content), idx},
				action: action.CREATE,
				children: children && children.length ? children : null
			};

			if (onDiff) {
				onDiff(diff, vnode, null);
			}
			else {
				result.push(diff);
			}
			idx++;
		}
	}
	else if (oldContent) { // fast passive remove
		idx = 0;
		length = oldContent.length;
		while (idx < length) {
			const vnode = oldContent[idx];
			let [type, params, content] = vnode;
			params = params || {};
			const diff = {
				type,
				o: {params, content: getContent(content), idx},
				action: action.PASSIVE_REMOVE,
				children: _diff2(null, vnode),
			};
			if (onDiff) {
				onDiff(diff, null, vnode);
			}
			else {
				result.push(diff);
			}
			idx++;
		}
	}

	return result;
}

function diff2 (n, o) {
	return {
		diff: _diff2(
            [null, null, n ? [n] : null],
            [null, null, o ? [o] : null]
        )
	};
}





function _diff (n, o) {
	const index = {};
	const diffList = new OrderedDiffList();
	const newContent = n ? n[VDOMN.content] || [] : null;
	const oldContent = o ? o[VDOMN.content] || [] : null;

	if (newContent && Array.isArray(newContent)) {
		const keyGen = new KeyGenerator();
		const l = newContent.length;
		const idx = 0;
		while (idx < l) {
			const node = newContent[idx];
			let [tag, params, content] = node;
			params = params || {};
			const key = params.key ? params.key : keyGen.forTag(tag);
			const item = {node, params, content: Array.isArray(content) ? null : (content || null), idx};
			index[key] = {tag, n: item};
		}
	}

	if (oldContent && Array.isArray(oldContent)) {
		const keyGen = new KeyGenerator();
		const l = oldContent.length;
		const idx = 0;
		while (idx < l) {
			const node = oldContent[idx];
			let [tag, params, content] = node;
			params = params || {};
			const key = params.key ? params.key : keyGen.forTag(tag);
			const item = {node, params, content: Array.isArray(content) ? null : (content || null), idx};
			let record = index[key];
			if (record) {
				if (tag !== record.tag) {
					record.tagOld = tag;
				}
				record.o = item;
				record.action = action.UPDATE;
				diffList.add(record);
				record.children = _diff(record.n.node, record.o.node);
				delete record.n.node;
				delete record.o.node;
				delete index[key];
			}
			else {
				record = {};
				record.o = item;
				record.action = newContent ? action.REMOVE : action.PASSIVE_REMOVE;
				diffList.add(record);
				record.children = _diff(null, record.o.node);
				delete record.o.node;
			}
		}
	}

	Object.keys(index).forEach(key => {
		const record = index[key];
		record.action = action.CREATE;
		diffList.add(record);
		record.children = _diff(record.n.node, null);
		delete record.n.node;
	});

	return diffList.getResult();
}

function diff (n, o) {
	return {
		diff: _diff(
            [null, null, n ? [n] : null],
            [null, null, o ? [o] : null]
        )
	};
}
