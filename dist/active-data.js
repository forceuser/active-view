(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["activeData"] = factory();
	else
		root["activeData"] = factory();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Реактивный менеджер данных, следящий за изменениями данных и выполняющий действия в ответ на эти изменения
* Отслеживание происходит лениво, данные обновляются только когда они требуются
*
* @param {ManagerOptions} [options] Настройки менеджера
*/
var Manager = function () {
	function Manager(options) {
		_classCallCheck(this, Manager);

		this.isObservableSymbol = Symbol("isObservable");
		this.observables = new WeakMap();
		this.cache = new WeakMap();
		this.options = {
			enabled: true,
			immediateReaction: false
		};
		this.callStack = [];
		this.reactions = [];
		this.setOptions(options);
	}
	/**
 * Динамически устанавливает настройки работы менеджера данных
 *
 * @param {ManagerOptions} [options] Настройки менеджера
 */


	_createClass(Manager, [{
		key: "setOptions",
		value: function setOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			this.options = Object.assign(this.options, options);
		}
		/**
  * Оборачивет источник данных и возвращает объект доступ к свойствам которого будет остлеживатся
  * Все дочерние объекты и массивы также будут оборачиватся при доступе к ним
  *
  * @param {(Object|Array)} dataSource источник данных
  * @return {Observale} отслеживаемый объект
  */

	}, {
		key: "makeObservable",
		value: function makeObservable(dataSource) {
			var _this = this;

			if (!dataSource) {
				return dataSource;
			}
			if (this.isObservable(dataSource)) {
				return dataSource;
			}
			var observable = this.observables.get(dataSource);
			if (!observable) {
				var toUpdate = new Map();
				observable = new Proxy(dataSource, {
					get: function get(obj, key) {
						if (key === _this.isObservableSymbol) {
							return true;
						}
						if (_this.callStack.length) {
							var callStack = [].concat(_toConsumableArray(_this.callStack));
							var context = callStack[callStack.length - 1];

							var callStacks = toUpdate.get(key);
							if (!callStacks) {
								callStacks = new Map();
								toUpdate.set(key, callStacks);
								callStacks.set(context.call, callStack);
							}
							if (!callStacks.has(context.call)) {
								callStacks.set(context.call, callStack);
							}
						}

						var val = obj[key];
						if (val === Object(val) && typeof val !== "function") {
							return _this.makeObservable(val);
						}
						return val;
					},
					set: function set(obj, key, val, receiver) {
						if (_this.callStack && _this.callStack.length) {
							throw new Error("Changing observable objects is restricted inside computed properties and reaction functions!");
						}

						if (val !== obj[key] || Array.isArray(obj) && key === "length") {
							obj[key] = val;
							var callStacks = toUpdate.get(key);

							if (callStacks) {
								callStacks.forEach(function (callStack) {
									callStack.reverse().some(function (_ref) {
										var obj = _ref.obj,
										    call = _ref.call;

										var record = _this.cache.get(obj).get(call);
										if (!record || !record.valid) {
											return true;
										} else {
											record.valid = false;
										}
									});
								});
							}

							toUpdate.delete(key);
							if (!_this.inRunSection) {
								if (_this.options.immediateReaction) {
									_this.run();
								} else {
									_this.runDeferred();
								}
							}
						}
						return true;
					}
				});
				this.observables.set(dataSource, observable);
			}
			return observable;
		}
		/**
  * Создает функцию {@link UpdatableFunction}
  *
  * @param {Object} obj целефой объект
  * @param {Function} call
  * @return {UpdatableFunction}
  */

	}, {
		key: "makeUpdatable",
		value: function makeUpdatable(obj, call) {
			var manager = this;
			return function () {
				var cacheByObject = manager.cache.get(obj);
				var record = void 0;
				if (cacheByObject) {
					record = cacheByObject.get(call);
				} else {
					cacheByObject = new Map();
					manager.cache.set(obj, cacheByObject);
				}

				if (!record) {
					record = { valid: false, value: undefined };
					cacheByObject.set(call, record);
				}
				if (record.computing) {
					console.warn("Detected cross reference inside computed properties! undefined will be returned to prevent infinite loop");
					return undefined;
				}

				if (record.valid) {
					return record.value;
				}
				record.computing = true;
				manager.callStack.push({ obj: obj, call: call });
				try {
					var context = void 0;
					if (this) {
						context = manager.observables.get(this);
					} else {
						context = manager;
					}

					var value = call.call(context, context);
					record.valid = true;
					record.value = value;
					return value;
				} finally {
					record.computing = false;
					manager.callStack.pop();
				}
			};
		}
		/**
  * Создает функцию
  *
  * @param {Observable} obj
  * @param {String} key
  * @param {Function} call
  */

	}, {
		key: "makeComputed",
		value: function makeComputed(obj, key, call) {
			Object.defineProperty(obj, key, {
				enumerable: true,
				get: this.makeUpdatable(obj, call)
			});
			return obj;
		}
		/**
  * Создает {@link UpdatableFunction} и помещает ее в список для проверки на валидность при изменении данных. Менеджер автозапускает эту функцию если ее результат стал невалидным
  *
  * @param {Function} call
  * @param {Boolean} run
  */

	}, {
		key: "makeReaction",
		value: function makeReaction(call) {
			var run = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var manager = this;
			var updatable = this.makeUpdatable(this, call);
			manager.reactions.push(updatable);
			if (run) {
				if (this.options.immediateReaction) {
					manager.run();
				} else {
					manager.runDeferred();
				}
			}
			return {
				unregister: function unregister() {
					var idx = manager.reactions.indexOf(updatable);
					if (idx >= 0) {
						manager.reactions.splice(idx, 1);
					}
				},

				reaction: updatable
			};
		}

		/**
  * Проверяет является ли объект наблюдаемым
  *
  * @param {(Observable|Object|Array)} obj
  */

	}, {
		key: "isObservable",
		value: function isObservable(obj) {
			return obj[this.isObservableSymbol] === true;
		}
		/**
  * Запускает все автозапускаемые функции которые помечены как невалидные
  *
  * @param {Function} [action] Действия выполняемые внутри вызова этой функции не будут вызывать неотложный запуск автозапускаемых функций
  */

	}, {
		key: "run",
		value: function run(action) {
			if (!this.options.enabled) {
				return;
			}
			this.inRunSection = true;
			try {
				if (typeof action === "function") {
					action();
				}
				this.runScheduled = false;
				this.reactions.forEach(function (updatable) {
					return updatable();
				});
				typeof this.onAfterRun === "function" && this.onAfterRun();
			} finally {
				this.inRunSection = false;
			}
		}
		/**
  * Запускает все {@link UpdatableFunction} которые помечены как невалидные
  * В отличии от run запускает их не сразу а по указанному таймауту
  *
  * @param {Function} [action] Изменения {@link Observable} выполняемые внутри вызова этой функции не будут вызывать неотложный запуск реакций. Реакции будут запускатся после заданного таймаута
  * @param {number} [timeout=0] Таймаут запуска реакции
  */

	}, {
		key: "runDeferred",
		value: function runDeferred(action) {
			var _this2 = this;

			if (!this.options.enabled) {
				return;
			}
			this.inRunSection = true;
			try {
				if (!this.runScheduled) {
					this.runScheduled = setTimeout(function () {
						return _this2.run();
					});
				}
				if (typeof action === "function") {
					action();
				}
			} finally {
				this.inRunSection = false;
			}
		}
	}]);

	return Manager;
}();

Manager.default = new Manager();
Manager.default.Manager = Manager;

/* harmony default export */ __webpack_exports__["default"] = (Manager.default);

/**
 * @typedef ManagerOptions
 * @name ManagerOptions
 * @type {object}
 * @param {boolean} [immediateReaction=false] - Запускать реакции сразу после изменения данных (по умолчанию реакции выполняются по нулевому таймауту)
 * @param {boolean} [enabled=true] - Активен ли менеджер данных
 */

/**
 * @typedef Observable
 * @name Observable
 * @description Обьект или массив доступ к свойствам которого отслеживается
 */

/**
 * @typedef UpdatableFunction
 * @name UpdatableFunction
 * @description Функция которая кеширует свое значение и хранит состояние валидности
 *
 * При изменении {@link Observable} данных которые были использованы при вычилении этой функции ее кеш инвалидируется
 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=active-data.js.map