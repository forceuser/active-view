import {action, VDOMN, namespaces, nodeType, voidElements} from "./const";
import DOMAPI from "./dom-api";
import diff from "./diff";

function _patch (diff, vnodeListOld, focused, parentNode, absoluteIndex, removeQueue, ns, parentFocused = true, isRoot = true) {
	const vnodeListNew = [];
	vnodeListOld = vnodeListOld || [];

	let idx = 0;
	const l = diff.length;
	let vnodePrevious;

	let focusedVNode;
	while (idx < l) {
		const record = diff[idx];
		const vnode = record.o ? vnodeListOld[record.o.idx] : [record.tag, record.n.params, record.n.content];

		switch (record.action) {
			case action.CREATE: {
				vnode.data = {};
				vnode.previous = vnodePrevious;
				if (vnodePrevious) {
					vnodePrevious.next = vnode;
				}
				if (typeof vnode[VDOMN.type] === "string") {
					vnode.domNode = DOMAPI.createNode(vnode[VDOMN.type], vnode[VDOMN.content], vnode[VDOMN.params].ns);
				}
				break;
			}
			case action.UPDATE: {
				break;
			}
			case action.REMOVE: {
				removeQueue.push(vnode);
				break;
			}
		}

        // POSITION NODES
		if (parentFocused && !focusedVNode && DOMAPI.isFocused(vnode)) {
			focusedVNode = vnode;
		}
		else {
			DOMAPI.insertAfter(vnode, vnodePrevious, parentNode);
		}

        // CONTENT
		let contentOld = null;
		if (record.n) {
			if (record.n.content !== null) {
				DOMAPI.setContent(vnode, record.n.content);
			}
			else if (record.o && record.o.content !== null) {
				DOMAPI.setContent(vnode, "");
			}
		}
		if (record.o && record.o.content === null) {
			contentOld = vnode[VDOMN.content];
		}
		let contentNew = _patch(record.children, contentOld, vnode.domNode, absoluteIndex, removeQueue, ns, focused === vnode, false);
		if (record.n) {
			if (record.n.content !== null) {
				contentNew = record.n.content;
			}
			vnode[VDOMN.content] = contentNew;
			vnodeListNew.push(vnode);
		}

		vnodePrevious = vnode;
		idx++;
	}

	if (isRoot) {
        // REMOVE
		removeQueue.forEach(vnode => {
			vnode.domNode.parentNode.removeChild(vnode.domNode);
		});
	}

	return vnodeListNew;
}

function patch (n, o) {
	if (!n) {
		n = [null, null, null];
	}

	if (n && n.diff) {
		if (!o) {
			throw new Error("Can't apply diff. No target object specified!");
		}
		else if (DOMAPI.isNode(o)) {
			throw new Error("Can't apply diff to DOM node!");
		}
	}

	let parentNode;
	if (DOMAPI.isNode(o)) {
		parentNode = o;
		DOMAPI.setContent(parentNode, "");
	}

	if (!o.domNode) {
		o = null;
	}

	if (!n || !n.diff) {
		n = diff(n, o);
	}

	const removeQueue = [];
	const absoluteIndex = {};

	const result = _patch(n.diff, o ? [o] : [], parentNode, absoluteIndex, removeQueue, o && DOMAPI.isFocused(o.domNode), true)[0];

	return result;
}


// параметры vnode:
// el - DOMNode;
// data - даныне которые можно использовать для хранения некоторого внутреннего состаяния vnode;
