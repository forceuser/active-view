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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Action; });
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
		return type + ":idx(" + storage[type] + ")";
	};
};

function getContent(content) {
	return content !== null && !Array.isArray(content) ? content : null;
}

// [null, null, "text node"]

// ["div", {prop: {x: 1, y: 2}}]
// ["div", {prop: {x: 5, z: 3}, attr: {dd: "2323"}}]
// ["div", {prop: {x: 5, z: 3}}]
// [
// 	{path: ["prop", "x"], o: 1, n: 5}, // обновление
// 	{path: ["prop", "x"], o: 2}, // удаление
// 	{path: ["prop", "z"], n: 3}, // добавление
// 	{path: ["attr", "dd"], n: "2323"}, // добавление
// ];

// [
// 	{path: ["attr", "dd"], o: "2323"}, // удаление
// ];

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
				// result[[...path, key].join(".")] = {o: o[key]};
			}
			_i++;
		}
	}
	return result;
}

function _diff(n, o) {
	var newContent = !n || !Array.isArray(n[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content]) ? null : n[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
	var oldContent = !o || !Array.isArray(o[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content]) ? null : o[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
	var result = [];
	var idx = void 0;
	var length = void 0;

	if (newContent && oldContent) {
		// first run: find pairs
		var index = {};
		var keyGenNew = new KeyGen();
		var keyGenOld = new KeyGen();
		var pairs = [];

		idx = 0;
		length = Math.max(newContent.length, oldContent.length);
		while (idx < length) {
			if (oldContent && oldContent[idx]) {
				var vnode = oldContent[idx];
				var type = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].type];
				var content = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
				var params = vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].params] || {};
				var key = keyGenOld(params.key, type);
				var pair = index[key] = index[key] || { type: type };

				pair.key = params.key;
				pair.o = { params: params, content: getContent(content), idx: idx };
				pair.oldVNode = vnode;
				pair.action = pair.n ? __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].UPDATE : __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].REMOVE;

				if (pair.idx === undefined) {
					pair.idx = pairs.length;
					pairs.push(pair);
				}
			}
			if (newContent && newContent[idx]) {
				var _vnode = newContent[idx];
				var _type = _vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].type];
				var _content = _vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
				var _params = _vnode[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].params] || {};
				var _key2 = keyGenNew(_params.key, _type);
				var _pair = index[_key2] = index[_key2] || { type: _type };

				_pair.key = _params.key;
				_pair.n = { params: _params, content: getContent(_content), idx: idx };
				_pair.newVNode = _vnode;
				_pair.action = _pair.o ? __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].UPDATE : __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].CREATE;

				if (_pair.idx === undefined) {
					_pair.idx = pairs.length;
					pairs.push(_pair);
				}
			}
			idx++;
		}

		// second run: generate result
		idx = 0;
		length = pairs.length;
		while (idx < length) {
			var _pair2 = pairs[idx];
			var children = _diff(_pair2.newVNode, _pair2.oldVNode);
			var _diff2 = {
				type: _pair2.type,
				key: _pair2.key,
				n: _pair2.n,
				o: _pair2.o,
				action: _pair2.action,
				children: children && children.length ? children : null,
				params: _pair2.action !== __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].REMOVE ? diffObj(_pair2.n.params, _pair2.action === __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].UPDATE ? _pair2.o.params : null, 2) : {}
			};
			result.push(_diff2);
			idx++;
		}
	} else if (newContent) {
		// fast passive create
		idx = 0;
		length = newContent.length;
		while (idx < length) {
			var _vnode2 = newContent[idx];
			var _type2 = _vnode2[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].type];
			var _content2 = _vnode2[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
			var _params2 = _vnode2[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].params] || {};
			var _children = _diff(_vnode2, null);
			var _diff3 = {
				type: _type2,
				key: _params2.key,
				n: { params: _params2, content: getContent(_content2), idx: idx },
				action: __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].CREATE,
				children: _children && _children.length ? _children : null,
				params: diffObj(_params2, {}, 2)
			};

			result.push(_diff3);
			idx++;
		}
	} else if (oldContent) {
		// fast passive remove
		idx = 0;
		length = oldContent.length;
		while (idx < length) {
			var _vnode3 = oldContent[idx];
			var _type3 = _vnode3[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].type];
			var _content3 = _vnode3[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].content];
			var _params3 = _vnode3[__WEBPACK_IMPORTED_MODULE_0__const__["a" /* VDOMN */].params] || {};
			var _diff4 = {
				type: _type3,
				key: _params3.key,
				o: { params: _params3, content: getContent(_content3), idx: idx },
				action: __WEBPACK_IMPORTED_MODULE_0__const__["b" /* Action */].PASSIVE_REMOVE,
				children: _diff(null, _vnode3),
				params: {}
			};

			result.push(_diff4);
			idx++;
		}
	}

	return result;
}

/**
 * Производит сравнение виртуальных DOM деревьев
 *
 * @param {VDOMNode} n новое виртуальное DOM дерево
 * @param {VDOMNode} o старое виртуальное DOM дерево (из которого планируется получить новое)
 * @return {DiffResult} результат сравнения, в виде дерева операций которые нужно произвести над старым деревом чтобы получить новое
 */

function diff(n, o) {
	// Wrap vnodes to consume
	return {
		diff: _diff([null, null, n ? [n] : null], [null, null, o ? [o] : null])
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