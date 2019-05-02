
function createNode (vnode) {
	if (vnode.type) {
		vnode.orig.node = document.createElement(vnode.type);
		if (vnode.content) {
			vnode.orig.node.textContent = vnode.content;
		}
	}
	else {
		vnode.orig.node = document.createTextNode(vnode.content);
	}
	return vnode.orig.node;
}

const insertAfter = (node, afterNode, parentNode) => {
	const next = afterNode ? afterNode.nextSibling : parentNode.firstChild;

	if (next) {
		if (next !== node) {
			parentNode.insertBefore(node, next);
		}
	}
	else {
		parentNode.appendChild(node);
	}
};


function remove (record, parentNode) {
	const node = record.vnode.orig.node;
	if (node) {
		parentNode.removeChild(node);
	}
}

function move (record, parentNode) {
	if (!record.vnode.orig.node) {
		createNode(record.vnode);
	}
	const node = record.vnode.orig.node;
	let nodePrev;
	if (record.vnodePrev && record.vnodePrev.orig) {
		nodePrev = record.vnodePrev.orig.node;
	}

	insertAfter(node, nodePrev, parentNode);
}

export default function patch (diff = [], parentNode, settings = {}, globalData = {}) {
	if (!parentNode) {// think of single root mode (<html>)
		parentNode = document.documentElement;
	}
	diff.forEach(record => {
		if (record.act === -1 && !(record.absItem && record.absItem.n)) {
			remove(record, parentNode);
		}
		else if (record.act === 1 || record.act === 0) {
			if (record.move) {
				move(record, parentNode);
			}

			if (record.children) {
				patch(record.children, record.vnode.orig.node, settings, globalData);
			}
		}
	});
}
