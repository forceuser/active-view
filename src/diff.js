import {VDOMN} from "./const";
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
			return `${type}:idx(${storage[type]++})`;
		};
	}
}

function isAbsKey (val) {
	return (val || "").toString().startsWith("#");
}

function getContent (content) {
	return content !== null && !Array.isArray(content) ? content : null;
}

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
			}
			i++;
		}
	}
	return result;
}

function diffOne (branch = "d", parentVNode, pairs = {}, path = [], keyPath = [], fullKeyPath = []) {
	const parentContent = !parentVNode || !Array.isArray(parentVNode[VDOMN.content]) ? null : parentVNode[VDOMN.content];
	let idx;
	let length;
	if (parentContent) {
		const keyGen = new KeyGen();
		idx = 0;
		length = parentContent.length;
		while (idx < length) {
			const vnode = parentContent[idx];
			const type = vnode[VDOMN.type];
			const content = vnode[VDOMN.content];
			const params = vnode[VDOMN.params] || {};
			const key = keyGen(params.key, type);
			const isAbs = isAbsKey(params.key);
			const _path = [...path, idx];
			const _keyPath = isAbs ? [key] : [...keyPath, key];
			const abs = _keyPath.join("/");
			let pair;
			if (pairs[abs]) {
				pair = pairs[abs];
			}
			else {
				pair = {};
				pairs[abs] = pair;
			}

			pair.key = params.key;
			pair[branch] = {path: _path, parentPath: keyPath.join("/"), params, content: getContent(content)};
			diffOne(branch, vnode, pairs, _path, _keyPath);
			idx++;
		}
	}
}

function arrayCompare (a, b) {
	const length = Math.max(a.length, b.length);
	let i = 0;
	while (i < length) {
		const av = a[i] != null ? a[i] : -1;
		const bv = b[i] != null ? b[i] : -1;
		if (av > bv) {
			return 1;
		}
		else if (av < bv) {
			return -1;
		}
		i++;
	}
	return 0;
}

const calcShift = (lvl, idx) => {
	let sum = 0;
	for (let i = 0; i < idx; i++) {
		sum += lvl[i] ? lvl[i].val : 0;
	}
	return sum;
};

const getShift = (shifts, path) => {
	let lvl = shifts;
	const l = path.length;
	for (let i = 0; i < l; i++) {
		const idx = path[i];
		if (i < l - 1) {
			lvl = lvl[idx].ch;
		}
		else {
			return calcShift(lvl, idx);
		}
	}
};

const addShift = (shifts, path, val) => {
	let lvl = shifts;
	const l = path.length;
	for (let i = 0; i < l; i++) {
		const idx = path[i];
		if (!lvl[idx]) {
			lvl[idx] = {ch: {}, val: 0};
		}
		if (i < l - 1) {
			lvl = lvl[idx].ch;
		}
		else {
			lvl[idx].val += val;
		}
	}
};


/**
 * Производит сравнение виртуальных DOM деревьев
 *
 * @param {VDOMNode} n новое виртуальное DOM дерево
 * @param {VDOMNode} o старое виртуальное DOM дерево (из которого планируется получить новое)
 * @return {DiffResult} результат сравнения, в виде дерева операций которые нужно произвести над старым деревом чтобы получить новое
 */

export default function diff (n, o) {
	// Wrap vnodes to consume
	const pairs = {};
	const nshifts = {};
	const oshifts = {};

	// 1 === accordance map
	diffOne("n", [null, null, n], pairs);
	diffOne("o", [null, null, o], pairs);
	// console.log("pairs", pairs);
	// 2 === shift map
	const pairsKeys = Object.keys(pairs);
	let i;
	const pairKeysLength = pairsKeys.length;

	i = 0;
	while (i < pairKeysLength) {
		const key = pairsKeys[i];
		const pair = pairs[key];
		let newParent = false;
		if (pair.o && pair.n) {
			newParent = pair.n.parentPath !== pair.o.parentPath;
		}

		if ((pair.o && !pair.n) || newParent) {
			addShift(oshifts, pair.o.path, 1);
		}

		if ((pair.n && !pair.o) || newParent) {
			addShift(nshifts, pair.n.path, -1);
		}
		i++;
	}
	// 3 === diff

	const moveOld = [];
	const moveNew = [];

	i = 0;
	while (i < pairKeysLength) {
		const key = pairsKeys[i];
		const pair = pairs[key];
		let npath;
		let opath;
		let nparams;
		let oparams;
		if (pair.n) {
			npath = pair.n.path;
			nparams = pair.n.params;
		}
		if (pair.o) {
			opath = pair.o.path;
			oparams = pair.o.params;
		}
		const modify = diffObj(nparams, oparams, 2);
		if (npath && opath) {
			let ni = 0;
			let oi = 0;
			const newParent = pair.n.parentPath !== pair.o.parentPath;
			if (!newParent) {
				addShift(oshifts, opath, 1);
				addShift(nshifts, npath, -1);
				ni = npath[npath.length - 1] + getShift(oshifts, opath) + getShift(nshifts, npath);
				oi = opath[opath.length - 1] ;
			}

			if (newParent || ni !== oi) { // move (cut, paste)
				const item = {act: "cut", o: opath, pair};
				if (modify.length) {
					item.modify = modify;
				}
				if (pair.o.content !== pair.n.content) {
					item.content = {o: pair.o.content, n: pair.n.content};
				}
				moveOld.push(item);
				moveNew.push({act: "paste", n: npath, o: opath, pair});
			}
			else { // else nomove
				const item = {n: npath, o: opath, pair};
				if (modify.length) {
					item.modify = modify;
				}
				if (pair.o.content !== pair.n.content) {
					item.content = {o: pair.o.content, n: pair.n.content};
				}
				moveOld.push(item);
			}

		}
		else if (opath) { // delete
			moveOld.push({act: "del", o: opath, pair});
		}
		else { // if (npath) // add
			const item = {act: "add", n: npath, pair};
			if (modify.length) {
				item.modify = modify;
			}
			if (pair.n.content) {
				item.content = {n: pair.n.content};
			}
			moveNew.push(item);
		}
		i++;
	}

	return {
		diff: [
			...moveOld.sort((a, b) => arrayCompare(a.o, b.o)),
			...moveNew.sort((a, b) => arrayCompare(a.n, b.n)),
		],
	};
}
