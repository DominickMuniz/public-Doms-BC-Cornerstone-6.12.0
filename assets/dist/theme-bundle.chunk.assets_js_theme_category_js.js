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
            var cartItems = {
              lineItems: {
                physicalItems: []
              }
            };
            createCart('/api/storefront/carts', cartItems).then(function (newCart) {
              if (newCart && newCart.id) {
                handleAddAllToCart(newCart.id);
              } else {
                console.error('Error creating cart:', newCart);
              }
            })["catch"](function (error) {
              console.error('Error creating cart:', error);
            });
          }
        });
      });
    }
    var deleteAllFromCartButton = document.getElementById('deleteAllFromCart');
    if (deleteAllFromCartButton) {
      deleteAllFromCartButton.addEventListener('click', function () {
        getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options').then(function (cartData) {
          console.log('Cart ID:', cartData[0].id);
          console.log('Physical Items:', cartData[0].lineItems.physicalItems);
          if (cartData.length > 0) {
            var cartId = cartData[0].id;
            var physicalItems = cartData[0].lineItems.physicalItems;
            var itemIds = physicalItems.map(function (item) {
              console.log('Item ID:', item.id);
              return item.id;
            });
            itemIds.forEach(function (itemId) {
              deleteCartItem('/api/storefront/carts/', cartId, itemId);
            });
            alert('All items have been removed from your cart!');
          }
        })["catch"](function (error) {
          console.error('Error removing items from cart:', error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdQLG1HQUEyQixDQUFDSSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENBQUNQLHVCQUF1QixDQUFDUSxD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LGdCQUFnQixDQUFDYixZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNZ0IsZUFBZSxHQUFHYixNQUFNLENBQUNDLElBQUksQ0FBQ1MsZ0JBQWdCLENBQUNiLFlBQVksQ0FBQyxDQUFDLENBQUNuRCxHQUFHLENBQUMsVUFBQW9FLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9ILGVBQWUsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUosR0FBRyxFQUFFWCxDQUFDLEVBQUs7SUFDM0NlLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLEdBQUdILGFBQWEsQ0FBQ1IsQ0FBQyxDQUFDO0lBQzNCLE9BQU9lLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICgkKCcubmF2TGlzdC1hY3Rpb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG4gICAgXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcbiAgICBcbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG4gICAgXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgIFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcbiAgICBcbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuXG5cblxuXG5cblxuICAgICAgICAvLyBDUkVBVEUgYSBjYXJ0IC0gaGVscGVyIGZ1bmN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNhcnQocm91dGUsIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICB9O1xuXG5cblxuXG5cblxuICAgICAgICAgIC8vIEdFVCBhIGNhcnQgLSBoZWxwZXIgZnVuY3Rpb25cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldENhcnQocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmV0dXJuZWQgY2FydCBkYXRhOicsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG5cblxuXG4vLyBBREQgQSBDQVJUIElURU0gLSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgICBmdW5jdGlvbiBhZGRDYXJ0SXRlbShyb3V0ZVN0YXJ0LCBjYXJ0SWQsIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgdmFyIHJvdXRlID0gcm91dGVTdGFydCArIGNhcnRJZCArICcvaXRlbXMnO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICB9O1xuXG5cblxuXG4vLyBERUxFVEUgQSBDQVJUIElURU0gLSBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgICBmdW5jdGlvbiBkZWxldGVDYXJ0SXRlbShyb3V0ZVN0YXJ0LCBjYXJ0SWQsIGl0ZW1JZCkge1xuICAgICAgICAgICAgdmFyIHJvdXRlID0gcm91dGVTdGFydCArIGNhcnRJZCArICcvaXRlbXMvJyArIGl0ZW1JZDtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICB9O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGFkZEFsbFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBbGxUb0NhcnQnKTtcblxuY29uc3QgaGFuZGxlQWRkQWxsVG9DYXJ0ID0gKGNhcnRJZCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgY29uc3QgY2FydEl0ZW1zID0ge1xuICAgICAgICBsaW5lSXRlbXM6IEFycmF5LmZyb20ocHJvZHVjdENhcmRzKS5tYXAoY2FyZCA9PiAoe1xuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHBhcnNlSW50KGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWVudGl0eS1pZCcpLCAxMClcbiAgICAgICAgfSkpXG4gICAgfTtcbiAgICBhZGRDYXJ0SXRlbSgnL2FwaS9zdG9yZWZyb250L2NhcnRzLycsIGNhcnRJZCwgY2FydEl0ZW1zKVxuICAgICAgICAudGhlbigoKSA9PiBhbGVydCgnQWxsIHByb2R1Y3RzIGhhdmUgYmVlbiBhZGRlZCB0byB5b3VyIGNhcnQhJykpO1xufTtcblxuaWYgKGFkZEFsbFRvQ2FydEJ1dHRvbikge1xuICAgIGFkZEFsbFRvQ2FydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ2V0Q2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJylcbiAgICAgICAgICAgIC50aGVuKGNhcnRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZGRBbGxUb0NhcnQoY2FydHNbMF0uaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoeXNpY2FsSXRlbXM6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNhcnQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0cycsIGNhcnRJdGVtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKG5ld0NhcnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdDYXJ0ICYmIG5ld0NhcnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KG5ld0NhcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhcnQ6JywgbmV3Q2FydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY2FydDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cblxuXG4gICAgICAgICAgY29uc3QgZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlQWxsRnJvbUNhcnQnKTtcbiAgICAgIFxuICAgICAgICAgIGlmIChkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbikge1xuICAgICAgICAgICAgZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZXRDYXJ0KCcvYXBpL3N0b3JlZnJvbnQvY2FydHM/aW5jbHVkZT1saW5lSXRlbXMuZGlnaXRhbEl0ZW1zLm9wdGlvbnMsbGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMub3B0aW9ucycpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGNhcnREYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXJ0IElEOicsIGNhcnREYXRhWzBdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQaHlzaWNhbCBJdGVtczonLCBjYXJ0RGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FydERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJZCA9IGNhcnREYXRhWzBdLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBoeXNpY2FsSXRlbXMgPSBjYXJ0RGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWRzID0gcGh5c2ljYWxJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIElEOicsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWRzLmZvckVhY2goaXRlbUlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oJy9hcGkvc3RvcmVmcm9udC9jYXJ0cy8nLCBjYXJ0SWQsIGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0FsbCBpdGVtcyBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHlvdXIgY2FydCEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGl0ZW1zIGZyb20gY2FydDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIH1cbiAgICBcbiAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIFxuXG5cbiAgICBcbiAgICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJCgnW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXScpO1xuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cblxuICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJfdGhpczMiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJjcmVhdGVDYXJ0Iiwicm91dGUiLCJjYXJ0SXRlbXMiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldENhcnQiLCJhZGRDYXJ0SXRlbSIsInJvdXRlU3RhcnQiLCJjYXJ0SWQiLCJkZWxldGVDYXJ0SXRlbSIsIml0ZW1JZCIsImFkZEFsbFRvQ2FydEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVBZGRBbGxUb0NhcnQiLCJwcm9kdWN0Q2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluZUl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiY2FyZCIsInF1YW50aXR5IiwicHJvZHVjdElkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJ0cyIsImlkIiwicGh5c2ljYWxJdGVtcyIsIm5ld0NhcnQiLCJkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiIsImNhcnREYXRhIiwiaXRlbUlkcyIsIml0ZW0iLCJmb3JFYWNoIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9