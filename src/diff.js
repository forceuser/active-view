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
	console.log("pairs", pairs);
	// 2 === shift map
	const pairsKeys = Object.keys(pairs);

	pairsKeys.forEach(key => {
		const pair = pairs[key];
		if (pair.o && !pair.n) {
			addShift(oshifts, pair.o.path, 1);
		}

		if (pair.n && !pair.o) {
			addShift(nshifts, pair.n.path, -1);
		}
		// console.log("shifts", JSON.stringify(shifts));
	});
	const moveOld = [];
	const moveNew = [];
	console.log("nshifts", JSON.stringify(nshifts));
	console.log("oshifts", JSON.stringify(oshifts));
	pairsKeys.forEach(key => {
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
				moveOld.push(item);
				moveNew.push({act: "paste", n: npath, o: opath, pair});
			}
			else { // else nomove
				const item = {n: npath, o: opath, pair};
				if (modify.length) {
					item.modify = modify;
				}
				moveNew.push(item);
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
			moveNew.push(item);
		}
		// check for changes
	});

	// const result = Object.keys(pairs).map(key => {
	// 	const pair = pairs[key];
	// 	let nparams;
	// 	let oparams;
	// 	let ncontent;
	// 	let ocontent;
	// 	pair.path = {};
	// 	pair.fullPath = {};
	// 	if (pair.n) {
	// 		nparams = pair.n.params;
	// 		ncontent = pair.n.content;
	// 		pair.path.n = pair.n.path;
	// 		pair.fullPath.n = pair.n.fullPath;
	// 		delete pair.n;
	// 	}
	// 	if (pair.o) {
	// 		oparams = pair.o.params;
	// 		ocontent = pair.o.content;
	// 		pair.path.o = pair.o.path;
	// 		pair.fullPath.o = pair.o.fullPath;
	// 		delete pair.o;
	// 	}
	// 	if (nparams || oparams) {
	// 		pair.params = diffObj(nparams, oparams, 2);
	// 	}
	// 	if (ncontent !== ocontent) {
	// 		pair.content = {
	// 			o: ocontent,
	// 			n: ncontent,
	// 		};
	// 	}


	// 	return pair;
	// });

	// .sort((a, b) => {
	// 	let ap = 0;
	// 	let bp = 0;
	// 	const ov = -0.5;
	// 	const nv = 0;
	// 	if ((a.path.o && b.path.o) && (!a.path.n || !b.path.n)) {
	// 		return arrayCompare(a.path.o, b.path.o);
	// 	}

	// 	const av = a.path.n && a.path.o
	// 		? (arrayCompare(a.path.n, a.path.o) < 0 ? (ap = nv, a.path.n) : (ap = ov, a.path.o))
	// 		: (a.path.n ? (ap = nv, a.path.n) : (ap = ov, a.path.o));
	// 	const bv = b.path.n && b.path.o
	// 		? (arrayCompare(b.path.n, b.path.o) < 0 ? (bp = nv, b.path.n) : (bp = ov, b.path.o))
	// 		: (b.path.n ? (bp = nv, b.path.n) : (bp = ov, b.path.o));
	// 	// console.log("compare", [...av, ap], [...bv, bp], arrayCompare([...av, ap], [...bv, bp]));
	// 	const result = arrayCompare(av, bv);
	// 	if (result === 0) {
	// 		return ap < bp ? -1 : 1;
	// 	}
	// 	return result;
	// })
	// .reduce((result, pair, idx, array) => {
	// 	console.log("arr", array);
	// 	if (pair.path.n) {
	// 		pair.path.n[pair.path.n.length - 1] += getShift(shifts, pair.path.o || pair.path.n);
	// 	}
	// 	if (pair.path.o) {
	// 		addShift(shifts, pair.path.o, 1);
	// 	}
	// 	if (pair.path.n) {
	// 		addShift(shifts, pair.path.n, -1);
	// 	}

	// 	result.push(pair);
	// 	return result;
	// }, []);

	// .sort((a, b) => {

	// 	// const av = a.path.n && a.path.o ? (arrayCompare(a.path.n, a.path.o) < 0 ? a.path.n : a.path.o) : (a.path.n ? a.path.n : a.path.o);
	// 	// const bv = b.path.n && b.path.o ? (arrayCompare(b.path.n, b.path.o) < 0 ? b.path.n : b.path.o) : (b.path.n ? b.path.n : b.path.o);
	// 	// return arrayCompare(av, bv);
	// 	if (a.path.n && b.path.n) {
	// 		return arrayCompare(a.path.n, b.path.n);
	// 	}
	// 	return -1;
	// });

	return {
		diff: [
			...moveOld,
			...moveNew,
		],
	};
}
