import {action, VDOMN, namespaces, nodeType, voidElements} from "./const";

// --- Основа
// идем сверху вниз по дереву diff, находим соответствия в старом VDOM,
// добавляем новые элементы и перемещаем старые, осталяем элементы которые нужно удалить (добавляем их в очередь)
// не выполняем удаление PASSIVE_REMOVE

// --- Thunk
// при создании компонентов либо thunk если новые вх.параметры равны старым (закешированным)
// возвращаем vnode[tag, {key, noChange: true}, null] это будет означать что diff content этой vnode не происходит а возмоно только изменение позиции

// --- Абсолютные ключи @
// проходя по всем уровням сохраняем все вхождения абсолютных ключей
// если операция CREATE и абсолютный ключ то создаем stub element (например комментарий)
// в конце проходим по всем абсолютным ключам и если не нашли CREATE - удаляем ноду (как обычно),
// если не нашли REMOVE то замещаем stub
// если нашли и то и то, делаем detach и замещаем stub, выполняем патч параметров

// --- Возможность смены ns или tag (при установленном ключе)
// если UPDATE но есть tagOld необходимо вместо UPDATE сделать CREATE а потом переместить все дочерние elements из старого el и удалить его (мгновенно)
// (только если это не SVG)

// --- Namespaces
// проверять является ли элемент svg или math и если не задан другой params.ns создавать элемент с указанным ns

const DOMAPI = {
	getVTag (node) {
		if (node.nodeType === nodeType.ELEMENT_NODE) {
			return node.tagName.toLowerCase();
		}
		else if (node.nodeType === nodeType.COMMENT_NODE) {
			return "!";
		}
		return null;
	},
	isNode (node) {
		return "nodeType" in node;
	},
	setContent (node, content) {
		if (!~voidElements.indexOf(node.tagName)) {
			node.textContent = content;
		}
	},
	createNode (tag, content, ns) {
		ns = ns || namespaces[tag];
		if (!tag) {
			if (typeof content === "string") {
				return document.createTextNode(content);
			}
			return document.createDocumentFragment();
		}
		else if (tag === "!") {
			return document.createComment(content || "");
		}
		else if (!ns) {
			return document.createElement(tag);
		}
		else {
			return document.createElementNS(ns, tag);
		}
	},
	setAttribute (node, attr, value) {

	},
	removeAttribute (node, attr) {

	},
	removeNode (node) {

	},
	isFocused (node) {
		return document.activeElement === node || node.contains(document.activeElement);
	},
	insertAfter (node, ref = null, parent = null) {
		if (parent) {
			if (ref && (parent !== node.parentNode || node.previousSibling !== ref)) {
				if (ref.nextSibling) {
					parent.insertBefore(node, ref.nextSibling);
				}
				else {
					parent.appendChild(node);
				}
			}
			else if (parent !== node.parentNode || node.previousSibling !== ref) {
				if (parent.childNodes.length) {
					parent.insertBefore(node, parent.firstChild);
				}
				else {
					parent.appendChild(node);
				}
			}
		}
	}
};
