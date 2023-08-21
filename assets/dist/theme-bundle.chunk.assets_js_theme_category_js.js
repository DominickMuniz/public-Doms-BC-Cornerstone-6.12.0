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
        return console.log(result);
      })["catch"](function (error) {
        return console.error(error);
      });
    }
    ;

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
    var handleAddAllToCart = function handleAddAllToCart(cartId) {
      var productCards = document.querySelectorAll('.card');
      var cartItems = {
        lineItems: Array.from(productCards).map(function (card) {
          return {
            quantity: 1,
            productId: parseInt(card.getAttribute('data-entity-id'), 10)
          };
        })
      };
      addCartItem('/api/storefront/carts/', cartId, cartItems).then(function () {
        return alert('All products have been added to your cart!');
      });
    };
    if (addAllToCartButton) {
      addAllToCartButton.addEventListener('click', function () {
        getCart('/api/storefront/carts').then(function (carts) {
          if (carts.length > 0) {
            handleAddAllToCart(carts[0].id);
          } else {
            createCart('/api/storefront/carts', {
              lineItems: []
            }).then(function (newCart) {
              return handleAddAllToCart(newCart.id);
            });
          }
        });
      });
    }
    var deleteAllFromCartButton = document.getElementById('deleteAllFromCart');
    if (deleteAllFromCartButton) {
      deleteAllFromCartButton.addEventListener('click', function () {
        getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options').then(function (cartData) {
          if (cartData && typeof cartData === 'object' && cartData.id && cartData.lineItems && cartData.lineItems.physicalItems) {
            var cartId = cartData.id;
            var physicalItems = cartData.lineItems.physicalItems;
            var itemIds = physicalItems.map(function (item) {
              return item.id;
            });
            itemIds.forEach(function (itemId) {
              deleteCartItem('/api/storefront/carts/', cartId, itemId);
            });
            alert('All items have been removed from your cart!');
          } else {
            throw new Error('Invalid cart data format.');
          }
        })["catch"](function (error) {
          console.error("Error removing items from cart: " + error);
        });
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdQLG1HQUEyQixDQUFDSSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENBQUNQLHVCQUF1QixDQUFDUSxD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L2pzL3RoZW1lL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuICAgIFxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuICAgIFxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICBcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuXG5cblxuXG5cbiAgICAgICAgLy8gQ1JFQVRFIGEgY2FydCAtIGhlbHBlciBmdW5jdGlvblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVDYXJ0KHJvdXRlLCBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgfTtcblxuXG5cblxuXG5cbiAgICAgICAgICAvLyBHRVQgYSBjYXJ0IC0gaGVscGVyIGZ1bmN0aW9uXG5cbiAgICAgICAgICBmdW5jdGlvbiBnZXRDYXJ0KHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICAgIH07XG5cblxuXG5cbi8vIEFERCBBIENBUlQgSVRFTSAtIGhlbHBlciBmdW5jdGlvblxuICAgICAgICAgIGZ1bmN0aW9uIGFkZENhcnRJdGVtKHJvdXRlU3RhcnQsIGNhcnRJZCwgY2FydEl0ZW1zKSB7XG4gICAgICAgICAgICB2YXIgcm91dGUgPSByb3V0ZVN0YXJ0ICsgY2FydElkICsgJy9pdGVtcyc7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcyksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICAgIH07XG5cblxuXG5cbi8vIERFTEVURSBBIENBUlQgSVRFTSAtIGhlbHBlciBmdW5jdGlvblxuICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZUNhcnRJdGVtKHJvdXRlU3RhcnQsIGNhcnRJZCwgaXRlbUlkKSB7XG4gICAgICAgICAgICB2YXIgcm91dGUgPSByb3V0ZVN0YXJ0ICsgY2FydElkICsgJy9pdGVtcy8nICsgaXRlbUlkO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICAgIH07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgYWRkQWxsVG9DYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEFsbFRvQ2FydCcpO1xuXG4gICAgICAgICAgY29uc3QgaGFuZGxlQWRkQWxsVG9DYXJ0ID0gKGNhcnRJZCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSB7XG4gICAgICAgICAgICAgICAgICBsaW5lSXRlbXM6IEFycmF5LmZyb20ocHJvZHVjdENhcmRzKS5tYXAoY2FyZCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcGFyc2VJbnQoY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW50aXR5LWlkJyksIDEwKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGFkZENhcnRJdGVtKCcvYXBpL3N0b3JlZnJvbnQvY2FydHMvJywgY2FydElkLCBjYXJ0SXRlbXMpXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBhbGVydCgnQWxsIHByb2R1Y3RzIGhhdmUgYmVlbiBhZGRlZCB0byB5b3VyIGNhcnQhJykpO1xuICAgICAgICAgIH07XG4gICAgICBcbiAgICAgICAgICBpZiAoYWRkQWxsVG9DYXJ0QnV0dG9uKSB7XG4gICAgICAgICAgICAgIGFkZEFsbFRvQ2FydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGdldENhcnQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0cycpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oY2FydHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KGNhcnRzWzBdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNhcnQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0cycsIHsgbGluZUl0ZW1zOiBbXSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKG5ld0NhcnQgPT4gaGFuZGxlQWRkQWxsVG9DYXJ0KG5ld0NhcnQuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICBjb25zdCBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVBbGxGcm9tQ2FydCcpO1xuICAgICAgXG4gICAgICAgICAgaWYgKGRlbGV0ZUFsbEZyb21DYXJ0QnV0dG9uKSB7XG4gICAgICAgICAgICBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdldENhcnQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0cz9pbmNsdWRlPWxpbmVJdGVtcy5kaWdpdGFsSXRlbXMub3B0aW9ucyxsaW5lSXRlbXMucGh5c2ljYWxJdGVtcy5vcHRpb25zJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oY2FydERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnREYXRhICYmIHR5cGVvZiBjYXJ0RGF0YSA9PT0gJ29iamVjdCcgJiYgY2FydERhdGEuaWQgJiYgY2FydERhdGEubGluZUl0ZW1zICYmIGNhcnREYXRhLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydElkID0gY2FydERhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGh5c2ljYWxJdGVtcyA9IGNhcnREYXRhLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1JZHMgPSBwaHlzaWNhbEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZHMuZm9yRWFjaChpdGVtSWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYXJ0SXRlbSgnL2FwaS9zdG9yZWZyb250L2NhcnRzLycsIGNhcnRJZCwgaXRlbUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnQWxsIGl0ZW1zIGhhdmUgYmVlbiByZW1vdmVkIGZyb20geW91ciBjYXJ0IScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2FydCBkYXRhIGZvcm1hdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gY2FydDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICB9XG4gICAgXG4gIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBcblxuXG4gICAgXG4gICAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcbiAgICAgICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIl90aGlzMiIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiY3JlYXRlQ2FydCIsInJvdXRlIiwiY2FydEl0ZW1zIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRDYXJ0IiwiYWRkQ2FydEl0ZW0iLCJyb3V0ZVN0YXJ0IiwiY2FydElkIiwiZGVsZXRlQ2FydEl0ZW0iLCJpdGVtSWQiLCJhZGRBbGxUb0NhcnRCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGFuZGxlQWRkQWxsVG9DYXJ0IiwicHJvZHVjdENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmVJdGVtcyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImNhcmQiLCJxdWFudGl0eSIsInByb2R1Y3RJZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiYWxlcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FydHMiLCJpZCIsIm5ld0NhcnQiLCJkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiIsImNhcnREYXRhIiwicGh5c2ljYWxJdGVtcyIsIml0ZW1JZHMiLCJpdGVtIiwiZm9yRWFjaCIsIkVycm9yIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9