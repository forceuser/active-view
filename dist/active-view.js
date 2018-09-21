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
		return type + ":idx(" + storage[type] + ")";
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
			var _fullKeyPath = [].concat(_toConsumableArray(fullKeyPath), [key]);
			var abs = _keyPath.join("/");
			var pair = void 0;
			if (pairs[abs]) {
				pair = pairs[abs];
			} else {
				pair = {};
				pairs[abs] = pair;
			}

			pair.key = params.key;
			pair[branch] = { path: _path, params: params, fullPath: _fullKeyPath, content: getContent(content) };
			diffOne(branch, vnode, pairs, _path, _keyPath, _fullKeyPath);
			idx++;
		}
	}
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
	var pairs = {};
	diffOne("n", [null, null, n ? [n] : null], pairs);
	diffOne("o", [null, null, o ? [o] : null], pairs);
	var result = Object.keys(pairs).map(function (key) {
		var pair = pairs[key];
		var nparams = void 0;
		var oparams = void 0;
		var ncontent = void 0;
		var ocontent = void 0;
		pair.path = {};
		pair.fullPath = {};
		if (pair.n) {
			nparams = pair.n.params;
			ncontent = pair.n.content;
			pair.path.n = pair.n.path;
			pair.fullPath.n = pair.n.fullPath;
			delete pair.n;
		}
		if (pair.o) {
			oparams = pair.o.params;
			ocontent = pair.o.content;
			pair.path.o = pair.o.path;
			pair.fullPath.o = pair.o.fullPath;
			delete pair.o;
		}
		if (nparams || oparams) {
			pair.params = diffObj(nparams, oparams, 2);
		}
		if (ncontent !== ocontent) {
			pair.content = {
				o: ocontent,
				n: ncontent
			};
		}

		return pair;
	}).sort(function (a, b) {
		if (a.path.n && b.path.n) {
			if (a.path.n < b.path.n) {
				return -1;
			}
			if (a.path.n > b.path.n) {
				return 1;
			}
		} else if (b.path.n) {
			if (a.path.o <= b.path.n) {
				return -1;
			}
			if (a.path.o > b.path.n) {
				return 1;
			}
		} else if (a.path.n) {
			if (a.path.n < b.path.o) {
				return -1;
			}
			if (a.path.n >= b.path.o) {
				return 1;
			}
		} else {
			if (a.path.o < b.path.o) {
				return -1;
			}
			if (a.path.o > b.path.o) {
				return 1;
			}
		}
		return 0;
	});

	return {
		diff: result
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