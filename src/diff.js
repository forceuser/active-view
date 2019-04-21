export class KeyGen {
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

export function diffObj (o, n, deep, path = [], result = []) {
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
			diffObj(o ? o[key] : undefined, n[key], deep, [...path, key], result);
			i++;
		}
	}
	if (op) {
		let i = 0;
		const ok = Object.keys(o);
		while (i < ok.length) {
			const key = ok[i];
			if (!upd[key]) {
				diffObj(o[key], undefined, deep, [...path, key], result);
			}
			i++;
		}
	}
	return result;
}

function find (group, i) {
	let s = 0;
	let e = group.length - 1;
	while (e - s > 1) {
		const h = Math.floor(s + ((e - s) / 2));
		if (group[h] > i) {
			e = h;
		}
		else {
			s = h;
		}
	}
	return e;
}

function diffOne (listOld, listNew, settings, globalData) {
	const pairs = {};
	const pairsChilds = {};
	const pairsNew = [];
	const pairsRemove = [];
	let list;
	list = listNew;
	if (list && list.length) {
		let idx;
		const length = list.length;
		const keyGen = settings.initKeygen();
		idx = 0;
		let key;
		let vnodePrev;
		while (idx < length) {
			const vnode = settings.inputAdapter ? settings.inputAdapter(list[idx]) : list[idx];
			key = keyGen(vnode.key, vnode.type);
			const pair = {move: true, key};
			pairs[key] = pair;

			if (Array.isArray(vnode.content)) {
				pairsChilds[key] = vnode.content;
			}

			pair.n = {idx, params: vnode.params, content: getContent(vnode.content), vnode, vnodePrev};
			pairsNew.push(pair);

			vnodePrev = vnode;
			idx++;
		}
	}
	list = listOld;
	if (list && list.length) {
		let idx;
		const length = list.length;
		const keyGen = settings.initKeygen();
		idx = 0;
		const groups = [];
		let maxlength = 0;
		let maxlengthidx;
		let vnodePrev;
		while (idx < length) {
			const vnode = settings.inputAdapter ? settings.inputAdapter(list[idx]) : list[idx];
			const key = keyGen(vnode.key, vnode.type);
			let pair = pairs[key];
			if (!pair) {
				pair = {move: false, key};
				pairs[key] = pair;
				pairsRemove.push(pair);
				pair.o = {idx, vnode, vnodePrev};
			}
			else {
				let added = false;
				const l = groups.length;
				const i = pair.n.idx;
				for (let gi = 0; gi < l; gi++) {
					const group = groups[gi];
					let length = group.length;
					if (group[length - 1] < i) {
						group.push(i);
						added = true;
						length++;
					}
					else if (group[0] < i) {
						const newgroup = group.slice(0, find(group, i));
						newgroup.push(i);
						added = true;
						length = newgroup.length;
						groups.push(newgroup);
					}

					if (length > maxlength) {
						maxlength = length;
						maxlengthidx = gi;
					}
				}
				if (!added) {
					groups.push([i]);
					if (maxlength === 0) {
						maxlength = 1;
						maxlengthidx = 0;
					}
				}

				pair.o = {idx, params: vnode.params, content: getContent(vnode.content), vnode, vnodePrev};
			}

			const childsOld = Array.isArray(vnode.content) ? vnode.content : null;
			const childsNew = pairsChilds[key];
			if (settings.deep && pair.n && (childsNew || childsOld)) {
				pair.childs = diffOne(childsOld, childsNew, settings, globalData);
			}
			vnodePrev = vnode;
			idx++;
		}

		if (maxlengthidx != null) {
			groups[maxlengthidx].forEach(i => {
				pairsNew[i].move = false;
			});
		}
	}

	let result = [
		...pairsRemove,
		...pairsNew,
	];
	if (settings.outputAdapter) {
		result = result.map((i, idx) => settings.outputAdapter(i, idx, globalData)).filter(i => i != null);
	}
	return result;
}


function checkForAbs (branch, item, pair, globalData) {
	if (isAbsKey(item.vnode.key)) {
		let absItem = globalData[item.key];
		if (absItem) {
			absItem[branch] = item;
			item.absItem = absItem;
			const diff = diffObj(absItem.o.vnode.params, absItem.n.vnode.params);
			if (diff.length) {
				absItem.diff = diff;
			}
		}
		else {
			absItem = {};
			absItem[branch] = item;
			item.absItem = absItem;
			globalData[item.key] = absItem;
		}
	}
}

const defaultSettings = {
	deep: true,
	initKeygen: () => new KeyGen(),
	outputAdapter: (pair, idx, globalData) => {
		let item;
		let diff;
		if (pair.o && pair.n) {
			diff = diffObj(pair.o.params, pair.n.params);
			if (!pair.move && !diff.length && (!pair.childs || !pair.childs.length)) {
				return null;
			}
			item = {act: 0, move: pair.move, key: pair.key, vnode: pair.n.vnode};
		}
		else if (pair.n) {
			item = {act: 1, key: pair.key, vnode: pair.n.vnode};
			checkForAbs("n", item, pair, globalData);
		}
		else if (pair.o) {
			item = {act: -1, key: pair.key, vnode: pair.o.vnode};
			checkForAbs("o", item, pair, globalData);
		}

		if (pair.n && pair.childs && pair.childs.length) {
			item.childs = pair.childs;
		}
		if (diff && diff.length) {
			item.diff = diff;
		}
		return item;
	},
	inputAdapter: (vnode) => {
		const type = vnode[0];
		const params = vnode[1] || {};
		const content = vnode[2];
		return {
			type,
			content,
			params,
			key: params.key,
		};
	},
};

/**
 * Производит сравнение виртуальных DOM деревьев
 *
 * @param {VDOMNode} n новое виртуальное DOM дерево
 * @param {VDOMNode} o старое виртуальное DOM дерево (из которого планируется получить новое)
 * @return {DiffResult} результат сравнения, в виде дерева операций которые нужно произвести над старым деревом чтобы получить новое
 */

export default function diff (o, n, settings) {
	settings = Object.assign({}, defaultSettings, settings);
	const globalData = settings.initGlobalData ? settings.initGlobalData() : {};
	return diffOne(o, n, settings, globalData);
}
