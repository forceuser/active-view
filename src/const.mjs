// import {Enum} from "enumify";


// export class Action extends Enum {}
// Action.initEnum(["PASSIVE_REMOVE", "REMOVE", "CREATE", "UPDATE"]);

export const VDOMN = {
	type: 0,
	params: 1,
	content: 2,
};

export const namespaces = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	math: "http://www.w3.org/1998/Math/MathML",
};

export const nodeType = {
	ELEMENT_NODE: 1,
	TEXT_NODE: 3,
	PROCESSING_INSTRUCTION_NODE: 7,
	COMMENT_NODE: 8,
	DOCUMENT_NODE: 9,
	DOCUMENT_TYPE_NODE: 10,
	DOCUMENT_FRAGMENT_NODE: 11,
};

export const voidElements = [
	"area", "base", "basefont", "bgsound", "br", "col", "command", "embed",
	"frame", "hr", "image", "img", "input", "isindex", "keygen", "link",
	"menuitem", "meta", "nextid", "param", "source", "track", "wbr",
];
