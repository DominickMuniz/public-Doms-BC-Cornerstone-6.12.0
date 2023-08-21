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

    // CREATE a cart helper function
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

    // GET a cart helper function

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
    var addAllToCartButton = document.getElementById('addAllToCart');
    var addCartItem = function addCartItem(cartId, productId) {
      var cartItem = {
        lineItems: [{
          quantity: 1,
          productId: parseInt(productId, 10)
        }]
      };
      fetch("/api/storefront/carts/" + cartId + "/items", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      }).then(function (response) {
        if (!response.ok) {
          console.error("Failed to add product with ID: " + productId + " to cart. Status: " + response.status);
          return response.text();
        }
      }).then(function (responseText) {
        if (responseText) {
          console.error("Server response: " + responseText);
        }
      })["catch"](function (error) {
        console.error("Error adding product with ID: " + productId + " to cart: " + error);
      });
    };
    var handleAddAllToCart = function handleAddAllToCart(cartId) {
      var productCards = document.querySelectorAll('.card');
      var cartItems = {
        lineItems: []
      };
      productCards.forEach(function (card) {
        var productId = card.getAttribute('data-entity-id');
        cartItems.lineItems.push({
          quantity: 1,
          productId: parseInt(productId, 10)
        });
      });
      createCart("/api/storefront/carts/" + cartId + "/items", cartItems);
      alert('All products have been added to your cart!');
    };
    if (addAllToCartButton) {
      addAllToCartButton.addEventListener('click', function () {
        fetch('/api/storefront/carts', {
          method: 'GET',
          credentials: 'same-origin'
        }).then(function (response) {
          return response.json();
        }).then(function (carts) {
          if (carts.length > 0) {
            // Use existing cart
            handleAddAllToCart(carts[0].id);
          } else {
            // Create new cart
            var newCartItems = {
              lineItems: []
            };
            var productCards = document.querySelectorAll('.card');
            productCards.forEach(function (card) {
              var productId = card.getAttribute('data-entity-id');
              newCartItems.lineItems.push({
                quantity: 1,
                productId: parseInt(productId, 10)
              });
            });
            createCart('/api/storefront/carts', newCartItems).then(function (newCart) {
              handleAddAllToCart(newCart.id);
            });
          }
        })["catch"](function (error) {
          console.error("Error getting or creating cart: " + error);
        });
      });
    }
    var deleteAllFromCartButton = document.getElementById('deleteAllFromCart');
    if (deleteAllFromCartButton) {
      deleteAllFromCartButton.addEventListener('click', function () {
        getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options').then(function (cartData) {
          if (cartData.length > 0) {
            var cartId = cartData[0].id;
            var physicalItems = cartData[0].lineItems.physicalItems;
            var itemIds = physicalItems.map(function (item) {
              return item.id;
            });
            itemIds.forEach(function (itemId) {
              deleteCartItem('/api/storefront/carts/', cartId, itemId);
            });
            alert('All items have been removed from your cart!');
          }
        });
      });
    }
    function getCart(route) {
      return fetch(route, {
        method: "GET",
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        return result;
      }) // Return the cart data
      ["catch"](function (error) {
        return console.error(error);
      });
    }
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
      }) // Log the server response
      ["catch"](function (error) {
        return console.error(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdQLG1HQUEyQixDQUFDSSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENBQUNQLHVCQUF1QixDQUFDUSxD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ZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuICAgIFxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuICAgIFxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICBcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuXG5cblxuXG5cbiAgICAgICAgLy8gQ1JFQVRFIGEgY2FydCBoZWxwZXIgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2FydChyb3V0ZSwgY2FydEl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcyksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICAgIH07XG5cblxuXG5cblxuXG4gICAgICAgICAgLy8gR0VUIGEgY2FydCBoZWxwZXIgZnVuY3Rpb25cblxuICAgICAgICAgIGZ1bmN0aW9uIGdldENhcnQocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgICAgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgXG4gICAgICAgIGNvbnN0IGFkZEFsbFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBbGxUb0NhcnQnKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkQ2FydEl0ZW0gPSAoY2FydElkLCBwcm9kdWN0SWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0ge1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcGFyc2VJbnQocHJvZHVjdElkLCAxMClcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL3N0b3JlZnJvbnQvY2FydHMvJHtjYXJ0SWR9L2l0ZW1zYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGFkZCBwcm9kdWN0IHdpdGggSUQ6ICR7cHJvZHVjdElkfSB0byBjYXJ0LiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU2VydmVyIHJlc3BvbnNlOiAke3Jlc3BvbnNlVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBhZGRpbmcgcHJvZHVjdCB3aXRoIElEOiAke3Byb2R1Y3RJZH0gdG8gY2FydDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVBZGRBbGxUb0NhcnQgPSAoY2FydElkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1zID0ge1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtczogW11cbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBwcm9kdWN0Q2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1lbnRpdHktaWQnKTtcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbXMubGluZUl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwYXJzZUludChwcm9kdWN0SWQsIDEwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjcmVhdGVDYXJ0KGAvYXBpL3N0b3JlZnJvbnQvY2FydHMvJHtjYXJ0SWR9L2l0ZW1zYCwgY2FydEl0ZW1zKTtcbiAgICBcbiAgICAgICAgICAgIGFsZXJ0KCdBbGwgcHJvZHVjdHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHlvdXIgY2FydCEnKTtcbiAgICAgICAgfTtcbiAgICBcbiAgIFxuICAgIFxuICAgICAgICBpZiAoYWRkQWxsVG9DYXJ0QnV0dG9uKSB7XG4gICAgICAgICAgICBhZGRBbGxUb0NhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmV0Y2goJy9hcGkvc3RvcmVmcm9udC9jYXJ0cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihjYXJ0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgZXhpc3RpbmcgY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KGNhcnRzWzBdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q2FydEl0ZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW50aXR5LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FydEl0ZW1zLmxpbmVJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcGFyc2VJbnQocHJvZHVjdElkLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJywgbmV3Q2FydEl0ZW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV3Q2FydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KG5ld0NhcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgb3IgY3JlYXRpbmcgY2FydDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuXG5cblxuXG5cblxuICAgICAgICBjb25zdCBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVBbGxGcm9tQ2FydCcpO1xuXG4gICAgICAgIGlmIChkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbikge1xuICAgICAgICAgICAgZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnZXRDYXJ0KCcvYXBpL3N0b3JlZnJvbnQvY2FydHM/aW5jbHVkZT1saW5lSXRlbXMuZGlnaXRhbEl0ZW1zLm9wdGlvbnMsbGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMub3B0aW9ucycpXG4gICAgICAgICAgICAgICAgLnRoZW4oY2FydERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FydElkID0gY2FydERhdGFbMF0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwaHlzaWNhbEl0ZW1zID0gY2FydERhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWRzID0gcGh5c2ljYWxJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZHMuZm9yRWFjaChpdGVtSWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhcnRJdGVtKCcvYXBpL3N0b3JlZnJvbnQvY2FydHMvJywgY2FydElkLCBpdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnQWxsIGl0ZW1zIGhhdmUgYmVlbiByZW1vdmVkIGZyb20geW91ciBjYXJ0IScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmdW5jdGlvbiBnZXRDYXJ0KHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocm91dGUsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQpIC8vIFJldHVybiB0aGUgY2FydCBkYXRhXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBkZWxldGVDYXJ0SXRlbShyb3V0ZVN0YXJ0LCBjYXJ0SWQsIGl0ZW1JZCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZVN0YXJ0ICsgY2FydElkICsgJy9pdGVtcy8nICsgaXRlbUlkO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSkgLy8gTG9nIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gICAgICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICB9XG4gICAgXG4gIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBcblxuXG4gICAgXG4gICAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcbiAgICAgICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIiRlbGVtZW50Iiwicm9sZVR5cGUiLCJhcmlhTGl2ZVN0YXR1cyIsImF0dHIiLCJyb2xlIiwibWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSIsIl90aGlzMiIsIiQiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiY3JlYXRlQ2FydCIsInJvdXRlIiwiY2FydEl0ZW1zIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRDYXJ0IiwiYWRkQWxsVG9DYXJ0QnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZENhcnRJdGVtIiwiY2FydElkIiwicHJvZHVjdElkIiwiY2FydEl0ZW0iLCJsaW5lSXRlbXMiLCJxdWFudGl0eSIsInBhcnNlSW50Iiwib2siLCJzdGF0dXMiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiaGFuZGxlQWRkQWxsVG9DYXJ0IiwicHJvZHVjdENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjYXJkIiwiZ2V0QXR0cmlidXRlIiwicHVzaCIsImFsZXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcnRzIiwiaWQiLCJuZXdDYXJ0SXRlbXMiLCJuZXdDYXJ0IiwiZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24iLCJjYXJ0RGF0YSIsInBoeXNpY2FsSXRlbXMiLCJpdGVtSWRzIiwibWFwIiwiaXRlbSIsIml0ZW1JZCIsImRlbGV0ZUNhcnRJdGVtIiwicm91dGVTdGFydCIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==