export class KeyGen {
	constructor () {
		const storage = {};
		return (key, type) => {
			type = type || "-notype";
			if (key) {
				if (Array.isArray(key)) {
					key = key.join("|~|");
				}
				return `${type}#${key}`;
			}
			storage[type] = storage[type] || 0;
			storage[type]++;
			return `${type}:idx(${storage[type]++})`;
		};
	}
}

function isAbsKey (val) {
	return typeof val === "string" ? (val || "").toString().startsWith("#") : false;
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

function checkForAbs (branch, item, pair, globalData) {
	if (isAbsKey(item.vnode.key)) {
		let absItem = globalData[item.key];
		if (absItem) {
			absItem[branch] = item;
			item.absItem = absItem;
			absItem.n.vnode.node = absItem.o.vnode.node;
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

function outputAdapter (pair, idx, globalData) {
	let item;
	let diff;
	if (pair.o && pair.n) {
		diff = diffObj(pair.o.params, pair.n.params);
		pair.n.vnode.node = pair.o.vnode.node;
		const contentChanged = pair.n.content != pair.o.content;
		if (!pair.move && !diff.length && (!pair.children || !pair.children.length) && !contentChanged) {
			return null;
		}
		item = {act: 0, move: pair.move, key: pair.key, vnode: pair.n.vnode, vnodePrev: pair.n.vnodePrev};
		if (contentChanged) {
			item.content = pair.n.content;
		}
	}
	else if (pair.n) {
		item = {act: 1, move: true, key: pair.key, vnode: pair.n.vnode, vnodePrev: pair.n.vnodePrev};
		if (pair.n.content != null) {
			item.content = pair.n.content;
		}
		checkForAbs("n", item, pair, globalData);
	}
	else if (pair.o) {
		item = {act: -1, key: pair.key, vnode: pair.o.vnode, vnodePrev: pair.o.vnodePrev};
		checkForAbs("o", item, pair, globalData);
	}

	if (pair.n && pair.children && pair.children.length) {
		item.children = pair.children;
	}
	if (diff && diff.length) {
		item.diff = diff;
	}
	return item;
}

function diffOne (listOld, listNew, settings, globalData) {
	const pairs = {};
	const pairsChildren = {};
	const pairsUpdate = [];
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
			const vnode = list[idx];
			key = keyGen(vnode.key, vnode.type);
			const pair = {move: true, key};
			pairs[key] = pair;

			if (vnode.children) {
				pairsChildren[key] = vnode.children;
			}

			pair.n = {idx, params: vnode.params, content: vnode.content, vnode, vnodePrev};
			pairsUpdate.push(pair);

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
			const vnode = list[idx];
			const key = keyGen(vnode.key, vnode.type);
			let pair = pairs[key];
			if (!pair) {
				pair = {move: false, key};
				pairs[key] = pair;
				pairsRemove.push(pair);
				pair.o = {idx, vnode, vnodePrev};
			}
			else {
				// find largest ordered group to minimize movement of dom nodes
				const findGrp = () => {
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
				};
				findGrp();
				pair.o = {idx, params: vnode.params, content: vnode.content, vnode, vnodePrev};
			}

			const childrenOld = vnode.children;
			const childrenNew = pairsChildren[key];
			if (settings.deep && pair.n && (childrenNew || childrenOld)) {
				pair.children = diffOne(childrenOld, childrenNew, settings, globalData);
			}
			vnodePrev = vnode;
			idx++;
		}

		if (maxlengthidx != null) {
			groups[maxlengthidx].forEach(i => {
				pairsUpdate[i].move = false;
			});
		}
	}
	pairsUpdate.forEach(pair => {
		if (!pair.o) {
			pair.children = diffOne(null, pair.n.vnode.children, settings, globalData);
		}
	});

	return [
		...pairsRemove,
		...pairsUpdate,
	]
		.map((pair, idx) => outputAdapter(pair, idx, globalData))
		.filter(pair => pair != null);
}




const defaultSettings = {
	deep: true,
	initKeygen: () => new KeyGen(),
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
	if (o && !Array.isArray(o)) {
		o = [o];
	}
	if (n && !Array.isArray(n)) {
		n = [n];
	}
	return diffOne(o, n, settings, globalData);
}
