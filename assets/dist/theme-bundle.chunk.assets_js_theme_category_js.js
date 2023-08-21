"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();

    // CREATE a cart - helper function
    function createCart(route, cartItems) {
      return fetch(route, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems)
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return console.log(result);
      })["catch"](function (error) {
        return console.error(error);
      });
    }
    ;

    // GET a cart - helper function
    function getCart(route) {
      return fetch(route, {
        method: "GET",
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log('Returned cart data:', result);
        return result;
      })["catch"](function (error) {
        return console.error(error);
      });
    }

    // ADD A CART ITEM - helper function
    function addCartItem(routeStart, cartId, cartItems) {
      var route = routeStart + cartId + '/items';
      return fetch(route, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems)
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return console.log(result);
      })["catch"](function (error) {
        return console.error(error);
      });
    }
    ;

    // DELETE A CART ITEM - helper function
    function deleteCartItem(routeStart, cartId, itemId) {
      var route = routeStart + cartId + '/items/' + itemId;
      return fetch(route, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return console.log(result);
      })["catch"](function (error) {
        return console.error(error);
      });
    }
    ;
    var addAllToCartButton = document.getElementById('addAllToCart');
    var handleAddAllToCart = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cartId) {
        var productCards, cartItems;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              productCards = document.querySelectorAll('.card');
              cartItems = {
                lineItems: Array.from(productCards).map(function (card) {
                  return {
                    quantity: 1,
                    productId: parseInt(card.getAttribute('data-entity-id'), 10)
                  };
                })
              };
              _context.prev = 2;
              _context.next = 5;
              return addCartItem('/api/storefront/carts/', cartId, cartItems);
            case 5:
              alert('All products have been added to your cart!');
              location.reload(); // Refresh the page
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              console.error('Error adding items to cart:', _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 9]]);
      }));
      return function handleAddAllToCart(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var createNewCartWithItems = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var productCards, cartItems;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              productCards = document.querySelectorAll('.card');
              cartItems = {
                lineItems: Array.from(productCards).map(function (card) {
                  return {
                    quantity: 1,
                    productId: parseInt(card.getAttribute('data-entity-id'), 10)
                  };
                })
              };
              _context2.prev = 2;
              _context2.next = 5;
              return createCart('/api/storefront/carts', cartItems);
            case 5:
              alert('All products have been added to your new cart!');
              location.reload(); // Refresh the page
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.error('Error creating cart:', _context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 9]]);
      }));
      return function createNewCartWithItems() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (addAllToCartButton) {
      addAllToCartButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var carts;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getCart('/api/storefront/carts');
            case 3:
              carts = _context3.sent;
              if (!(carts.length > 0)) {
                _context3.next = 9;
                break;
              }
              _context3.next = 7;
              return handleAddAllToCart(carts[0].id);
            case 7:
              _context3.next = 11;
              break;
            case 9:
              _context3.next = 11;
              return createNewCartWithItems();
            case 11:
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console.error('Error fetching cart:', _context3.t0);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      })));
    }
    function deleteAllItemsFromCart(_x2, _x3) {
      return _deleteAllItemsFromCart.apply(this, arguments);
    }
    function _deleteAllItemsFromCart() {
      _deleteAllItemsFromCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(cartId, itemIds) {
        var _iterator, _step, itemId;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _iterator = _createForOfIteratorHelperLoose(itemIds);
            case 1:
              if ((_step = _iterator()).done) {
                _context5.next = 7;
                break;
              }
              itemId = _step.value;
              _context5.next = 5;
              return deleteCartItem('/api/storefront/carts/', cartId, itemId);
            case 5:
              _context5.next = 1;
              break;
            case 7:
              location.reload(); // Refresh the page
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return _deleteAllItemsFromCart.apply(this, arguments);
    }
    var deleteAllFromCartButton = document.getElementById('deleteAllFromCart');
    if (deleteAllFromCartButton) {
      deleteAllFromCartButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var cartData, cartId, physicalItems, itemIds;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options');
            case 3:
              cartData = _context4.sent;
              if (!(cartData.length > 0)) {
                _context4.next = 11;
                break;
              }
              cartId = cartData[0].id;
              physicalItems = cartData[0].lineItems.physicalItems;
              itemIds = physicalItems.map(function (item) {
                return item.id;
              });
              _context4.next = 10;
              return deleteAllItemsFromCart(cartId, itemIds);
            case 10:
              alert('All items have been removed from your cart!');
            case 11:
              _context4.next = 16;
              break;
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              console.error('Error removing items from cart:', _context4.t0);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 13]]);
      })));
    }
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUksU0FBQSxFQUFBQyxTQUFBLEdBQUE3QixNQUFBLENBQUE4QixN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QUMsR0FBR21TLGFBQWEsQ0FBQ3ZNLENBQUMsQ0FBQztJQUMzQixPQUFPMk0sR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgICAgICBpZiAoISQoJ1tkYXRhLXNob3AtYnktcHJpY2VdJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCQoJy5uYXZMaXN0LWFjdGlvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbi5pcy1hY3RpdmUnKS5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJCgnc3Bhbi5wcmljZS1maWx0ZXItbWVzc2FnZScpLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpKTtcbiAgICB9XG5cblxuXG4gICAgb25SZWFkeSgpIHtcblxuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG4gICAgXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcbiAgICBcbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG4gICAgXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgIFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcbiAgICBcbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuXG5cbiAgICAgICAgLy8gQ1JFQVRFIGEgY2FydCAtIGhlbHBlciBmdW5jdGlvblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVDYXJ0KHJvdXRlLCBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIEdFVCBhIGNhcnQgLSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgICBmdW5jdGlvbiBnZXRDYXJ0KHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHVybmVkIGNhcnQgZGF0YTonLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAvLyBBREQgQSBDQVJUIElURU0gLSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgICBmdW5jdGlvbiBhZGRDYXJ0SXRlbShyb3V0ZVN0YXJ0LCBjYXJ0SWQsIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgdmFyIHJvdXRlID0gcm91dGVTdGFydCArIGNhcnRJZCArICcvaXRlbXMnO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBERUxFVEUgQSBDQVJUIElURU0gLSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUNhcnRJdGVtKHJvdXRlU3RhcnQsIGNhcnRJZCwgaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdXRlID0gcm91dGVTdGFydCArIGNhcnRJZCArICcvaXRlbXMvJyArIGl0ZW1JZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICBjb25zdCBhZGRBbGxUb0NhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQWxsVG9DYXJ0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUFkZEFsbFRvQ2FydCA9IGFzeW5jIChjYXJ0SWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1zOiBBcnJheS5mcm9tKHByb2R1Y3RDYXJkcykubWFwKGNhcmQgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwYXJzZUludChjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1lbnRpdHktaWQnKSwgMTApXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYWRkQ2FydEl0ZW0oJy9hcGkvc3RvcmVmcm9udC9jYXJ0cy8nLCBjYXJ0SWQsIGNhcnRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdBbGwgcHJvZHVjdHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHlvdXIgY2FydCEnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIFJlZnJlc2ggdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgaXRlbXMgdG8gY2FydDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3Q2FydFdpdGhJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1zOiBBcnJheS5mcm9tKHByb2R1Y3RDYXJkcykubWFwKGNhcmQgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwYXJzZUludChjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1lbnRpdHktaWQnKSwgMTApXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlQ2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJywgY2FydEl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0FsbCBwcm9kdWN0cyBoYXZlIGJlZW4gYWRkZWQgdG8geW91ciBuZXcgY2FydCEnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIFJlZnJlc2ggdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXJ0OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYWRkQWxsVG9DYXJ0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgYWRkQWxsVG9DYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydHMgPSBhd2FpdCBnZXRDYXJ0KCcvYXBpL3N0b3JlZnJvbnQvY2FydHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlQWRkQWxsVG9DYXJ0KGNhcnRzWzBdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlTmV3Q2FydFdpdGhJdGVtcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FydDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQWxsSXRlbXNGcm9tQ2FydChjYXJ0SWQsIGl0ZW1JZHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1JZCBvZiBpdGVtSWRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUNhcnRJdGVtKCcvYXBpL3N0b3JlZnJvbnQvY2FydHMvJywgY2FydElkLCBpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy8gUmVmcmVzaCB0aGUgcGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVBbGxGcm9tQ2FydCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnREYXRhID0gYXdhaXQgZ2V0Q2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzP2luY2x1ZGU9bGluZUl0ZW1zLmRpZ2l0YWxJdGVtcy5vcHRpb25zLGxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm9wdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydElkID0gY2FydERhdGFbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGh5c2ljYWxJdGVtcyA9IGNhcnREYXRhWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZHMgPSBwaHlzaWNhbEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUFsbEl0ZW1zRnJvbUNhcnQoY2FydElkLCBpdGVtSWRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnQWxsIGl0ZW1zIGhhdmUgYmVlbiByZW1vdmVkIGZyb20geW91ciBjYXJ0IScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgaXRlbXMgZnJvbSBjYXJ0OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICBcblxuIFxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG5cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZSIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsImJpbmQiLCJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX3RoaXMiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJfdGhpczMiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiY3JlYXRlQ2FydCIsInJvdXRlIiwiY2FydEl0ZW1zIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRDYXJ0IiwiYWRkQ2FydEl0ZW0iLCJyb3V0ZVN0YXJ0IiwiY2FydElkIiwiZGVsZXRlQ2FydEl0ZW0iLCJpdGVtSWQiLCJhZGRBbGxUb0NhcnRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGFuZGxlQWRkQWxsVG9DYXJ0IiwiX3JlZiIsIl9jYWxsZWUiLCJwcm9kdWN0Q2FyZHMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmVJdGVtcyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImNhcmQiLCJxdWFudGl0eSIsInByb2R1Y3RJZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiYWxlcnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInQwIiwiX3giLCJjcmVhdGVOZXdDYXJ0V2l0aEl0ZW1zIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfY2FsbGVlMyIsImNhcnRzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaWQiLCJkZWxldGVBbGxJdGVtc0Zyb21DYXJ0IiwiX3gyIiwiX3gzIiwiX2RlbGV0ZUFsbEl0ZW1zRnJvbUNhcnQiLCJfY2FsbGVlNSIsIml0ZW1JZHMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiIsIl9jYWxsZWU0IiwiY2FydERhdGEiLCJwaHlzaWNhbEl0ZW1zIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiaXRlbSIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJzcGxpdCIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=