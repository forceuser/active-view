import {Action, VDOMN} from "./const";

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

function getContent (content) {
	return content !== null && !Array.isArray(content) ? content : null;
}

// [null, null, "text node"]

// ["div", {prop: {x: 1, y: 2}}]
// ["div", {prop: {x: 5, z: 3}, attr: {dd: "2323"}}]
// ["div", {prop: {x: 5, z: 3}}]
// [
// 	{path: ["prop", "x"], o: 1, n: 5}, // обновление
// 	{path: ["prop", "x"], o: 2}, // удаление
// 	{path: ["prop", "z"], n: 3}, // добавление
// 	{path: ["attr", "dd"], n: "2323"}, // добавление
// ];

// [
// 	{path: ["attr", "dd"], o: "2323"}, // удаление
// ];

function isPropObj (val) {
	return val === Object(val) && !Array.isArray(val);
}

function serialize (val) {
	return JSON.stringify(val);
}

function diffObj (n, o, deep, path = [], result = []) {
	const np = isPropObj(n);
	const op = isPropObj(o);
	const upd = {};
	if ((!np && !op) || (deep && deep <= path.length)) {
		if (serialize(o) !== serialize(n)) {
			result.push({path, o, n});
		}
		return result;
	}

	if (np) {
		const nk = Object.keys(n);
		let i = 0;
		while (i < nk.length) {
			const key = nk[i];
			upd[key] = true;
			diffObj(n[key], o ? o[key] : undefined, deep, [...path, key], result);
			i++;
		}
	}
	if (op) {
		let i = 0;
		const ok = Object.keys(o);
		while (i < ok.length) {
			const key = ok[i];
			if (!upd[key]) {
				diffObj(undefined, o[key], deep, [...path, key], result);
				// result[[...path, key].join(".")] = {o: o[key]};
			}
			i++;
		}
	}
	return result;
}

function _diff (n, o) {
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
			if (oldContent && oldContent[idx]) {
				const vnode = oldContent[idx];
				const type = vnode[VDOMN.type];
				const content = vnode[VDOMN.content];
				const params = vnode[VDOMN.params] || {};
				const key = keyGenOld(params.key, type);
				const pair = index[key] = index[key] || {type};

				pair.key = params.key;
				pair.o = {params, content: getContent(content), idx};
				pair.oldVNode = vnode;
				pair.action = pair.n ? Action.UPDATE : Action.REMOVE;

				if (pair.idx === undefined) {
					pair.idx = pairs.length;
					pairs.push(pair);
				}
			}
			if (newContent && newContent[idx]) {
				const vnode = newContent[idx];
				const type = vnode[VDOMN.type];
				const content = vnode[VDOMN.content];
				const params = vnode[VDOMN.params] || {};
				const key = keyGenNew(params.key, type);
				const pair = index[key] = index[key] || {type};

				pair.key = params.key;
				pair.n = {params, content: getContent(content), idx};
				pair.newVNode = vnode;
				pair.action = pair.o ? Action.UPDATE : Action.CREATE;

				if (pair.idx === undefined) {
					pair.idx = pairs.length;
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
			const children = _diff(pair.newVNode, pair.oldVNode);
			const diff = {
				type: pair.type,
				key: pair.key,
				n: pair.n,
				o: pair.o,
				action: pair.action,
				children: children && children.length ? children : null,
				params: pair.action !== Action.REMOVE ? diffObj(pair.n.params, pair.action === Action.UPDATE ? pair.o.params : null, 2) : {},
			};
			result.push(diff);
			idx++;
		}
	}
	else if (newContent) { // fast passive create
		idx = 0;
		length = newContent.length;
		while (idx < length) {
			const vnode = newContent[idx];
			const type = vnode[VDOMN.type];
			const content = vnode[VDOMN.content];
			const params = vnode[VDOMN.params] || {};
			const children = _diff(vnode, null);
			const diff = {
				type,
				key: params.key,
				n: {params, content: getContent(content), idx},
				action: Action.CREATE,
				children: children && children.length ? children : null,
				params: diffObj(params, {}, 2),
			};

			result.push(diff);
			idx++;
		}
	}
	else if (oldContent) { // fast passive remove
		idx = 0;
		length = oldContent.length;
		while (idx < length) {
			const vnode = oldContent[idx];
			const type = vnode[VDOMN.type];
			const content = vnode[VDOMN.content];
			const params = vnode[VDOMN.params] || {};
			const diff = {
				type,
				key: params.key,
				o: {params, content: getContent(content), idx},
				action: Action.PASSIVE_REMOVE,
				children: _diff(null, vnode),
				params: {},
			};

			result.push(diff);
			idx++;
		}
	}

	return result;
}

/**
 * Производит сравнение виртуальных DOM деревьев
 *
 * @param {VDOMNode} n новое виртуальное DOM дерево
 * @param {VDOMNode} o старое виртуальное DOM дерево (из которого планируется получить новое)
 * @return {DiffResult} результат сравнения, в виде дерева операций которые нужно произвести над старым деревом чтобы получить новое
 */

export default function diff (n, o) {
	// Wrap vnodes to consume
	return {
		diff: _diff(
            [null, null, n ? [n] : null],
            [null, null, o ? [o] : null]
        )
	};
}
