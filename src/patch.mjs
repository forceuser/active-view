
function createNode (vnode) {
	if (vnode.type) {
		vnode.node = document.createElement(vnode.type);
		if (vnode.content) {
			vnode.node.textContent = vnode.content;
		}
	}
	else {
		vnode.node = document.createTextNode(vnode.content);
	}
	return vnode.node;
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
	const node = record.vnode.node;
	if (node) {
		parentNode.removeChild(node);
	}
}

function move (record, parentNode, root, settings) {
	let created = false;
	if (!record.vnode.node) {
		createNode(record.vnode);
		created = true;
	}
	const node = record.vnode.node;
	let nodePrev;
	if (record.vnodePrev) {
		nodePrev = record.vnodePrev.node;
	}

	if (root && settings.replaceRoot) {
		const rootNode = parentNode;
		parentNode = rootNode.parentNode || document;
		parentNode.replaceChild(node, rootNode);
	}
	else {
		insertAfter(node, nodePrev, parentNode);
	}
	return created;
}
const defaultSetting = {
	root: true,
};

export default function patch (diff = [], parentNode, settings, globalData = {}) {
	settings = Object.assign(defaultSetting, settings);
	if (!parentNode) {
		parentNode = document.documentElement;
	}
	const root = settings.root;
	settings.root = false;

	if (root && !settings.replaceRoot && settings.initial) {
		parentNode.innerHTML = "";
	}

	diff.forEach(record => {
		if (record.act === -1 && !(record.absItem && record.absItem.n)) {
			remove(record, parentNode);
		}
		else if (record.act === 1 || record.act === 0) {
			let created;
			if (record.move) {
				created = move(record, parentNode, root, settings);
			}

			if (record.children) {
				patch(record.children, record.vnode.node, settings, globalData);
			}
			else if (!created && "content" in record) {
				record.vnode.node.textContent = record.content;
			}
		}
	});
}
