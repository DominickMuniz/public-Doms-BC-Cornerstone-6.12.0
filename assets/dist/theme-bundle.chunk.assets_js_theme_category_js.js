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

    // Wait for the HTML document to be fully loaded before running the script
    document.addEventListener('DOMContentLoaded', function () {
      // Get the 'Delete All from Cart' button element by its ID
      var deleteAllFromCartButton = document.getElementById('deleteAllFromCart');

      // Check if the button element exists on the page
      if (deleteAllFromCartButton) {
        // Add a click event listener to the button
        deleteAllFromCartButton.addEventListener('click', function () {
          // Call the 'getCart' function to retrieve the cart data
          getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options').then(function (cartData) {
            // Check if there are any carts
            if (cartData.length > 0) {
              // Get the cart ID from the first cart in the list
              var cartId = cartData[0].id;
              // Get the item IDs of all physical items in the cart
              var itemIds = cartData[0].lineItems.physicalItems.map(function (item) {
                return item.id;
              });

              // Loop through all item IDs
              itemIds.forEach(function (itemId) {
                // Call the 'deleteCartItem' function to delete each item from the cart
                deleteCartItem('/api/storefront/carts/', cartId, itemId);
              });

              // Alert the user that all items have been removed from the cart
              alert('All items have been removed from your cart!');
            }
          });
        });
      }
    });

    // Function to get the cart data
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

    // Function to delete an item from the cart
    function deleteCartItem(routeStart, cartId, itemId) {
      // Construct the API route for deleting a cart item
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdQLG1HQUEyQixDQUFDSSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENBQUNQLHVCQUF1QixDQUFDUSxD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QkEsMkJBQTJCQSxDQUFJSSxPQUFPLEVBQUs7RUFDcEQsSUFBUWdJLHdCQUF3QixHQUF3RWhJLE9BQU8sQ0FBdkdnSSx3QkFBd0I7SUFBRUMsZ0NBQWdDLEdBQXNDakksT0FBTyxDQUE3RWlJLGdDQUFnQztJQUFFQywrQkFBK0IsR0FBS2xJLE9BQU8sQ0FBM0NrSSwrQkFBK0I7RUFDbkcsSUFBTUMsZ0JBQWdCLEdBQUdSLHNCQUFzQixDQUFDSyx3QkFBd0IsRUFBRUMsZ0NBQWdDLEVBQUVDLCtCQUErQixDQUFDO0VBQzVJLElBQU1FLGFBQWEsR0FBR1gsTUFBTSxDQUFDWSxNQUFNLENBQUNGLGdCQUFnQixDQUFDYixZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNZ0IsZUFBZSxHQUFHYixNQUFNLENBQUNDLElBQUksQ0FBQ1MsZ0JBQWdCLENBQUNiLFlBQVksQ0FBQyxDQUFDLENBQUN2QyxHQUFHLENBQUMsVUFBQXdELEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9ILGVBQWUsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUosR0FBRyxFQUFFWCxDQUFDLEVBQUs7SUFDM0NlLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLEdBQUdILGFBQWEsQ0FBQ1IsQ0FBQyxDQUFDO0lBQzNCLE9BQU9lLEdBQUc7RUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICgkKCcubmF2TGlzdC1hY3Rpb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuICAgIFxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuICAgIFxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICBcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkQWxsVG9DYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEFsbFRvQ2FydCcpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRDYXJ0SXRlbSA9IChjYXJ0SWQsIHByb2R1Y3RJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FydEl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgbGluZUl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBwYXJzZUludChwcm9kdWN0SWQsIDEwKVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy8ke2NhcnRJZH0vaXRlbXNgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gYWRkIHByb2R1Y3Qgd2l0aCBJRDogJHtwcm9kdWN0SWR9IHRvIGNhcnQuIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlVGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTZXJ2ZXIgcmVzcG9uc2U6ICR7cmVzcG9uc2VUZXh0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGFkZGluZyBwcm9kdWN0IHdpdGggSUQ6ICR7cHJvZHVjdElkfSB0byBjYXJ0OiAke2Vycm9yfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZUFkZEFsbFRvQ2FydCA9IChjYXJ0SWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSB7XG4gICAgICAgICAgICAgICAgbGluZUl0ZW1zOiBbXVxuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHByb2R1Y3RDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWVudGl0eS1pZCcpO1xuICAgICAgICAgICAgICAgIGNhcnRJdGVtcy5saW5lSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHBhcnNlSW50KHByb2R1Y3RJZCwgMTApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGNyZWF0ZUNhcnQoYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy8ke2NhcnRJZH0vaXRlbXNgLCBjYXJ0SXRlbXMpO1xuICAgIFxuICAgICAgICAgICAgYWxlcnQoJ0FsbCBwcm9kdWN0cyBoYXZlIGJlZW4gYWRkZWQgdG8geW91ciBjYXJ0IScpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVDYXJ0KHJvdXRlLCBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAoYWRkQWxsVG9DYXJ0QnV0dG9uKSB7XG4gICAgICAgICAgICBhZGRBbGxUb0NhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmV0Y2goJy9hcGkvc3RvcmVmcm9udC9jYXJ0cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihjYXJ0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgZXhpc3RpbmcgY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KGNhcnRzWzBdLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q2FydEl0ZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW50aXR5LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FydEl0ZW1zLmxpbmVJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcGFyc2VJbnQocHJvZHVjdElkLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzJywgbmV3Q2FydEl0ZW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV3Q2FydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRkQWxsVG9DYXJ0KG5ld0NhcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgb3IgY3JlYXRpbmcgY2FydDogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgSFRNTCBkb2N1bWVudCB0byBiZSBmdWxseSBsb2FkZWQgYmVmb3JlIHJ1bm5pbmcgdGhlIHNjcmlwdFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIC8vIEdldCB0aGUgJ0RlbGV0ZSBBbGwgZnJvbSBDYXJ0JyBidXR0b24gZWxlbWVudCBieSBpdHMgSURcbiAgICBjb25zdCBkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVBbGxGcm9tQ2FydCcpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGJ1dHRvbiBlbGVtZW50IGV4aXN0cyBvbiB0aGUgcGFnZVxuICAgIGlmIChkZWxldGVBbGxGcm9tQ2FydEJ1dHRvbikge1xuICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uXG4gICAgICAgIGRlbGV0ZUFsbEZyb21DYXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSAnZ2V0Q2FydCcgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGNhcnQgZGF0YVxuICAgICAgICAgICAgZ2V0Q2FydCgnL2FwaS9zdG9yZWZyb250L2NhcnRzP2luY2x1ZGU9bGluZUl0ZW1zLmRpZ2l0YWxJdGVtcy5vcHRpb25zLGxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm9wdGlvbnMnKVxuICAgICAgICAgICAgLnRoZW4oY2FydERhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2FydHNcbiAgICAgICAgICAgICAgICBpZiAoY2FydERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNhcnQgSUQgZnJvbSB0aGUgZmlyc3QgY2FydCBpbiB0aGUgbGlzdFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBjYXJ0RGF0YVswXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBpdGVtIElEcyBvZiBhbGwgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbUlkcyA9IGNhcnREYXRhWzBdLmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgaXRlbSBJRHNcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkcy5mb3JFYWNoKGl0ZW1JZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSAnZGVsZXRlQ2FydEl0ZW0nIGZ1bmN0aW9uIHRvIGRlbGV0ZSBlYWNoIGl0ZW0gZnJvbSB0aGUgY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oJy9hcGkvc3RvcmVmcm9udC9jYXJ0cy8nLCBjYXJ0SWQsIGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFsZXJ0IHRoZSB1c2VyIHRoYXQgYWxsIGl0ZW1zIGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0FsbCBpdGVtcyBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHlvdXIgY2FydCEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vIEZ1bmN0aW9uIHRvIGdldCB0aGUgY2FydCBkYXRhXG5mdW5jdGlvbiBnZXRDYXJ0KHJvdXRlKSB7XG4gICAgcmV0dXJuIGZldGNoKHJvdXRlLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHQpIC8vIFJldHVybiB0aGUgY2FydCBkYXRhXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZGVsZXRlIGFuIGl0ZW0gZnJvbSB0aGUgY2FydFxuZnVuY3Rpb24gZGVsZXRlQ2FydEl0ZW0ocm91dGVTdGFydCwgY2FydElkLCBpdGVtSWQpIHtcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIEFQSSByb3V0ZSBmb3IgZGVsZXRpbmcgYSBjYXJ0IGl0ZW1cbiAgICB2YXIgcm91dGUgPSByb3V0ZVN0YXJ0ICsgY2FydElkICsgJy9pdGVtcy8nICsgaXRlbUlkO1xuICAgIHJldHVybiBmZXRjaChyb3V0ZSwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSkgLy8gTG9nIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICB9XG5cblxuICAgIFxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG4gICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuZXh0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsImFkZEFsbFRvQ2FydEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRDYXJ0SXRlbSIsImNhcnRJZCIsInByb2R1Y3RJZCIsImNhcnRJdGVtIiwibGluZUl0ZW1zIiwicXVhbnRpdHkiLCJwYXJzZUludCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiaGFuZGxlQWRkQWxsVG9DYXJ0IiwicHJvZHVjdENhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhcnRJdGVtcyIsImZvckVhY2giLCJjYXJkIiwiZ2V0QXR0cmlidXRlIiwicHVzaCIsImNyZWF0ZUNhcnQiLCJhbGVydCIsInJvdXRlIiwiY3JlZGVudGlhbHMiLCJqc29uIiwicmVzdWx0IiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcnRzIiwiaWQiLCJuZXdDYXJ0SXRlbXMiLCJuZXdDYXJ0IiwiZGVsZXRlQWxsRnJvbUNhcnRCdXR0b24iLCJnZXRDYXJ0IiwiY2FydERhdGEiLCJpdGVtSWRzIiwicGh5c2ljYWxJdGVtcyIsIm1hcCIsIml0ZW0iLCJpdGVtSWQiLCJkZWxldGVDYXJ0SXRlbSIsInJvdXRlU3RhcnQiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=