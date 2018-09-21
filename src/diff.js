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
			return `${type}:idx(${storage[type]})`;
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
			const _fullKeyPath = [...fullKeyPath, key];
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
			pair[branch] = {path: _path, params, fullPath: _fullKeyPath, content: getContent(content)};
			diffOne(branch, vnode, pairs, _path, _keyPath, _fullKeyPath);
			idx++;
		}
	}
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
	const pairs = {};
	diffOne("n", [null, null, n ? [n] : null], pairs);
	diffOne("o", [null, null, o ? [o] : null], pairs);
	const result = Object.keys(pairs).map(key => {
		const pair = pairs[key];
		let nparams;
		let oparams;
		let ncontent;
		let ocontent;
		pair.path = {};
		pair.fullPath = {};
		if (pair.n) {
			nparams = pair.n.params;
			ncontent = pair.n.content;
			pair.path.n = pair.n.path;
			pair.fullPath.n = pair.n.fullPath;
			delete pair.n;
		}
		if (pair.o) {
			oparams = pair.o.params;
			ocontent = pair.o.content;
			pair.path.o = pair.o.path;
			pair.fullPath.o = pair.o.fullPath;
			delete pair.o;
		}
		if (nparams || oparams) {
			pair.params = diffObj(nparams, oparams, 2);
		}
		if (ncontent !== ocontent) {
			pair.content = {
				o: ocontent,
				n: ncontent,
			};
		}

		return pair;
	})
	.sort((a, b) => {
		if (a.path.n && b.path.n) {
			if (a.path.n < b.path.n) {return -1;}
			if (a.path.n > b.path.n) {return 1;}
		}
		else if (b.path.n) {
			if (a.path.o <= b.path.n) {return -1;}
			if (a.path.o > b.path.n) {return 1;}
		}
		else if (a.path.n) {
			if (a.path.n < b.path.o) {return -1;}
			if (a.path.n >= b.path.o) {return 1;}
		}
		else {
			if (a.path.o < b.path.o) {return -1;}
			if (a.path.o > b.path.o) {return 1;}
		}
		return 0;
	});

	return {
		diff: result,
	};
}
