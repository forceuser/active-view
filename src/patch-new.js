import {action, VDOMN, namespaces, nodeType, voidElements} from "./const";
import DOMAPI from "./dom-api";
import diff from "./diff";

function getNode (vnode, path) {
	if (!path) {
		return;
	}
	let i = 1;
	const length = path.length;
	while (i < length) {
		const content = vnode[VDOMN.content];
		vnode = content[path[i]];
		i++;
	}
	return vnode;
}

function deleteNode (vnode, path) {
	function removeFromDom () {

	}

}

function applyDiff (newVNodeRoot, oldVNodeRoot, diff, bindMode, shifts) {
	const newVNode = getNode(newVNodeRoot, diff.path.n);
	const oldVNode = getNode(oldVNodeRoot, diff.path.n);
	if (diff.path.n && diff.path.o) {// update
		if (diff.path.n != diff.path.o) {

		}
		else if (diff.fullPath.n !== diff.fullPath.o) {
			// у абсолютного элемента поменялся родитель
		}
	}
	else if (diff.path.n) {// add
		const skey = diff.path.n.slice(0, -1).join("/");
		shifts[skey] = shifts[skey] || 0;
		shifts[skey]--;
	}
	else {// delete
		const vnode = getNode(oldVNodeRoot, diff.path.o);
		const skey = diff.path.o.slice(0, -1).join("/");
		shifts[skey] = shifts[skey] || 0;
		shifts[skey]++;
		deleteNode(vnode);
	}
}

export function patch (newVNode, oldVNode, diffData, bindMode = false) {
	if (!diffData) {
		diffData = diff(newVNode, oldVNode);
	}
	let i = 0;
	const shift = {};
	const length = diffData.length;
	while (i < length) {
		if ()

		// applyDiff(newVNode, oldVNode, diffData[i], bindMode, shift);
		i++;
	}
}

export function bind (vnode, domNode) {
	vnode.domNode = domNode;
	patch(vnode, null, null, true);
}
