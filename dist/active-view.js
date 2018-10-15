(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["activeView"] = factory();
	else
		root["activeView"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__diff__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return __WEBPACK_IMPORTED_MODULE_0__diff__["a"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
	diff: __WEBPACK_IMPORTED_MODULE_0__diff__["a" /* default */]
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Action */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VDOMN; });
/* unused harmony export namespaces */
/* unused harmony export nodeType */
/* unused harmony export voidElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_enumify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_enumify__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Action = function (_Enum) {
	_inherits(Action, _Enum);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	return Action;
}(__WEBPACK_IMPORTED_MODULE_0_enumify__["Enum"]);
Action.initEnum(["PASSIVE_REMOVE", "REMOVE", "CREATE", "UPDATE"]);

var VDOMN = {
	type: 0,
	params: 1,
	content: 2
};

var namespaces = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	math: "http://www.w3.org/1998/Math/MathML"
};

var nodeType = {
	ELEMENT_NODE: 1,
	TEXT_NODE: 3,
	PROCESSING_INSTRUCTION_NODE: 7,
	COMMENT_NODE: 8,
	DOCUMENT_NODE: 9,
	DOCUMENT_TYPE_NODE: 10,
	DOCUMENT_FRAGMENT_NODE: 11
};

var voidElements = ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"];

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = diff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(2);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var KeyGen = function KeyGen() {
	_classCallCheck(this, KeyGen);

	var storage = {};
	return function (key, type) {
		type = type || "-notype";
		if (key) {
			return type + "#" + key;
		}
		storage[type] = storage[type] || 0;
		storage[type]++;
		return type + ":idx(" + storage[type]++ + ")";
	};
};

function isAbsKey(val) {
	return (val || "").toString().startsWith("#");
}

function getContent(content) {
	return content !== null && !Array.isArray(content) ? content : null;
}

function isPropObj(val) {
	return val === Object(val) && !Array.isArray(val);
}

function serialize(val) {
	return JSON.stringify(val);
}

function diffObj(n, o, deep) {
	var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	var result = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	var np = isPropObj(n);
	var op = isPropObj(o);
	var upd = {};
	if (!np && !op || deep && deep <= path.length) {
		if (serialize(o) !== serialize(n)) {
			result.push({ path: path, o: o, n: n });
		}
		return result;
	}

	if (np) {
		var nk = Object.keys(n);
		var i = 0;
		while (i < nk.length) {
			var key = nk[i];
			upd[key] = true;
			diffObj(n[key], o ? o[key] : undefined, deep, [].concat(_toConsumableArray(path), [key]), result);
			i++;
		}
	}
	if (op) {
		var _i = 0;
		var ok = Object.keys(o);
		while (_i < ok.length) {
			var _key = ok[_i];
			if (!upd[_key]) {
				diffObj(undefined, o[_key], deep, [].concat(_toConsumableArray(path), [_key]), result);
			}
			_i++;
		}
	}
	return result;
}

function diffOne() {
	var branch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "d";
	var parentVNode = arguments[1];
	var pairs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	var keyPath = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	var fullKeyPath = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

	var parentContent = !parentVNode || !Array.isArray(parentVNode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content]) ? null : parentVNode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
	var idx = void 0;
	var length = void 0;
	if (parentContent) {
		var keyGen = new KeyGen();
		idx = 0;
		length = parentContent.length;
		while (idx < length) {
			var vnode = parentContent[idx];
			var type = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].type];
			var content = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
			var params = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].params] || {};
			var key = keyGen(params.key, type);
			var isAbs = isAbsKey(params.key);
			var _path = [].concat(_toConsumableArray(path), [idx]);
			var _keyPath = isAbs ? [key] : [].concat(_toConsumableArray(keyPath), [key]);
			var abs = _keyPath.join("/");
			var pair = void 0;
			if (pairs[abs]) {
				pair = pairs[abs];
			} else {
				pair = {};
				pairs[abs] = pair;
			}

			pair.key = params.key;
			pair[branch] = { path: _path, parentPath: keyPath.join("/"), params: params, content: getContent(content) };
			diffOne(branch, vnode, pairs, _path, _keyPath);
			idx++;
		}
	}
}

function arrayCompare(a, b) {
	var length = Math.max(a.length, b.length);
	var i = 0;
	while (i < length) {
		var av = a[i] != null ? a[i] : -1;
		var bv = b[i] != null ? b[i] : -1;
		if (av > bv) {
			return 1;
		} else if (av < bv) {
			return -1;
		}
		i++;
	}
	return 0;
}

var calcShift = function calcShift(lvl, idx) {
	var sum = 0;
	for (var i = 0; i < idx; i++) {
		sum += lvl[i] ? lvl[i].val : 0;
	}
	return sum;
};

var getShift = function getShift(shifts, path) {
	var lvl = shifts;
	var l = path.length;
	for (var i = 0; i < l; i++) {
		var idx = path[i];
		if (i < l - 1) {
			lvl = lvl[idx].ch;
		} else {
			return calcShift(lvl, idx);
		}
	}
};

var addShift = function addShift(shifts, path, val) {
	var lvl = shifts;
	var l = path.length;
	for (var i = 0; i < l; i++) {
		var idx = path[i];
		if (!lvl[idx]) {
			lvl[idx] = { ch: {}, val: 0 };
		}
		if (i < l - 1) {
			lvl = lvl[idx].ch;
		} else {
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

function diff(n, o) {
	// Wrap vnodes to consume
	var pairs = {};
	var nshifts = {};
	var oshifts = {};

	// 1 === accordance map
	diffOne("n", [null, null, n], pairs);
	diffOne("o", [null, null, o], pairs);
	console.log("pairs", pairs);
	// 2 === shift map
	var pairsKeys = Object.keys(pairs);

	pairsKeys.forEach(function (key) {
		var pair = pairs[key];
		if (pair.o && !pair.n) {
			addShift(oshifts, pair.o.path, 1);
		}

		if (pair.n && !pair.o) {
			addShift(nshifts, pair.n.path, -1);
		}
		// console.log("shifts", JSON.stringify(shifts));
	});
	var moveOld = [];
	var moveNew = [];
	console.log("nshifts", JSON.stringify(nshifts));
	console.log("oshifts", JSON.stringify(oshifts));
	pairsKeys.forEach(function (key) {
		var pair = pairs[key];
		var npath = void 0;
		var opath = void 0;
		var nparams = void 0;
		var oparams = void 0;
		if (pair.n) {
			npath = pair.n.path;
			nparams = pair.n.params;
		}
		if (pair.o) {
			opath = pair.o.path;
			oparams = pair.o.params;
		}
		var modify = diffObj(nparams, oparams, 2);
		if (npath && opath) {
			var ni = 0;
			var oi = 0;
			var newParent = pair.n.parentPath !== pair.o.parentPath;
			if (!newParent) {
				addShift(oshifts, opath, 1);
				addShift(nshifts, npath, -1);
				ni = npath[npath.length - 1] + getShift(oshifts, opath) + getShift(nshifts, npath);
				oi = opath[opath.length - 1];
			}

			if (newParent || ni !== oi) {
				// move (cut, paste)
				var item = { act: "cut", o: opath, pair: pair };
				if (modify.length) {
					item.modify = modify;
				}
				moveOld.push(item);
				moveNew.push({ act: "paste", n: npath, o: opath, pair: pair });
			} else {
				// else nomove
				var _item = { n: npath, o: opath, pair: pair };
				if (modify.length) {
					_item.modify = modify;
				}
				moveNew.push(_item);
			}
		} else if (opath) {
			// delete
			moveOld.push({ act: "del", o: opath, pair: pair });
		} else {
			// if (npath) // add
			var _item2 = { act: "add", n: npath, pair: pair };
			if (modify.length) {
				_item2.modify = modify;
			}
			moveNew.push(_item2);
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
		diff: [].concat(moveOld, moveNew)
	};
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyProperties = copyProperties;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIALIZED = Symbol();

/**
 * This is an abstract class that is not intended to be
 * used directly. Extend it to turn your class into an enum
 * (initialization is performed via `MyClass.initEnum()`).
 */

var Enum = exports.Enum = function () {
    /**
     * `initEnum()` closes the class. Then calling this constructor
     * throws an exception.
     * 
     * If your subclass has a constructor then you can control
     * what properties are added to `this` via the argument you
     * pass to `super()`. No arguments are fine, too.
     */

    function Enum() {
        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

        _classCallCheck(this, Enum);

        // new.target would be better than this.constructor,
        // but isn’t supported by Babel
        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
            throw new Error('Enum classes can’t be instantiated');
        }
        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
            copyProperties(this, instanceProperties);
        }
    }
    /**
     * Set up the enum, close the class.
     * 
     * @param arg Either an object whose properties provide the names
     * and values (which must be mutable objects) of the enum constants.
     * Or an Array whose elements are used as the names of the enum constants
     * The values are create by instantiating the current class.
     */

    _createClass(Enum, [{
        key: 'toString',

        /**
         * Default `toString()` method for enum constant.
         */
        value: function toString() {
            return this.constructor.name + '.' + this.name;
        }
    }], [{
        key: 'initEnum',
        value: function initEnum(arg) {
            Object.defineProperty(this, 'enumValues', {
                value: [],
                configurable: false,
                writable: false,
                enumerable: true
            });
            if (Array.isArray(arg)) {
                this._enumValuesFromArray(arg);
            } else {
                this._enumValuesFromObject(arg);
            }
            Object.freeze(this.enumValues);
            this[INITIALIZED] = true;
            return this;
        }
    }, {
        key: '_enumValuesFromArray',
        value: function _enumValuesFromArray(arr) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    this._pushEnumValue(new this(), key);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: '_enumValuesFromObject',
        value: function _enumValuesFromObject(obj) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    var value = new this(obj[key]);
                    this._pushEnumValue(value, key);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_pushEnumValue',
        value: function _pushEnumValue(enumValue, name) {
            enumValue.name = name;
            enumValue.ordinal = this.enumValues.length;
            Object.defineProperty(this, name, {
                value: enumValue,
                configurable: false,
                writable: false,
                enumerable: true
            });
            this.enumValues.push(enumValue);
        }

        /**
         * Given the name of an enum constant, return its value.
         */

    }, {
        key: 'enumValueOf',
        value: function enumValueOf(name) {
            return this.enumValues.find(function (x) {
                return x.name === name;
            });
        }

        /**
         * Make enum classes iterable
         */

    }, {
        key: Symbol.iterator,
        value: function value() {
            return this.enumValues[Symbol.iterator]();
        }
    }]);

    return Enum;
}();

function copyProperties(target, source) {
    // Ideally, we’d use Reflect.ownKeys() here,
    // but I don’t want to depend on a polyfill
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var key = _step3.value;

            var desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return target;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=active-view.js.map