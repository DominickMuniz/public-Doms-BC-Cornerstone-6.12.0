import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    onReady() {
        this.arrangeFocusOnSortBy();
    
        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));
    
        this.makeShopByPriceFilterAccessible();
    
        compareProducts(this.context);
    
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
    
        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));
    
        this.ariaNotifyNoProducts();
    
        const addAllToCartButton = document.getElementById('addAllToCart');
    
        const addCartItem = (cartId, productId) => {
            const cartItem = {
                lineItems: [{
                    quantity: 1,
                    productId: parseInt(productId, 10)
                }]
            };
    
            fetch(`/api/storefront/carts/${cartId}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(response => {
                if (!response.ok) {
                    console.error(`Failed to add product with ID: ${productId} to cart. Status: ${response.status}`);
                    return response.text();
                }
            })
            .then(responseText => {
                if (responseText) {
                    console.error(`Server response: ${responseText}`);
                }
            })
            .catch(error => {
                console.error(`Error adding product with ID: ${productId} to cart: ${error}`);
            });
        };
    
        const handleAddAllToCart = (cartId) => {
            const productCards = document.querySelectorAll('.card');
            const cartItems = {
                lineItems: []
            };
    
            productCards.forEach(card => {
                const productId = card.getAttribute('data-entity-id');
                cartItems.lineItems.push({
                    quantity: 1,
                    productId: parseInt(productId, 10)
                });
            });
    
            createCart(`/api/storefront/carts/${cartId}/items`, cartItems);
    
            alert('All products have been added to your cart!');
        };
    
        function createCart(route, cartItems) {
            return fetch(route, {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItems),
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.error(error));
        }
    
        if (addAllToCartButton) {
            addAllToCartButton.addEventListener('click', () => {
                fetch('/api/storefront/carts', {
                    method: 'GET',
                    credentials: 'same-origin'
                })
                .then(response => response.json())
                .then(carts => {
                    if (carts.length > 0) {
                        // Use existing cart
                        handleAddAllToCart(carts[0].id);
                    } else {
                        // Create new cart
                        const newCartItems = {
                            lineItems: []
                        };
    
                        const productCards = document.querySelectorAll('.card');
                        productCards.forEach(card => {
                            const productId = card.getAttribute('data-entity-id');
                            newCartItems.lineItems.push({
                                quantity: 1,
                                productId: parseInt(productId, 10)
                            });
                        });
    
                        createCart('/api/storefront/carts', newCartItems)
                        .then(newCart => {
                            handleAddAllToCart(newCart.id);
                        });
                    }
                })
                .catch(error => {
                    console.error(`Error getting or creating cart: ${error}`);
                });
            });
        }








        const deleteAllFromCartButton = document.getElementById('deleteAllFromCart');

        if (deleteAllFromCartButton) {
            deleteAllFromCartButton.addEventListener('click', function() {
                getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options')
                .then(cartData => {
                    if (cartData.length > 0) {
                        const cartId = cartData[0].id;
                        const itemIds = cartData[0].lineItems.physicalItems.map(item => item.id);
    
                        itemIds.forEach(itemId => {
                            deleteCartItem('/api/storefront/carts/', cartId, itemId);
                        });
    
                        alert('All items have been removed from your cart!');
                    }
                });
            });
        }
    }
    
    function getCart(route) {
        return fetch(route, {
            method: "GET",
            credentials: "same-origin"
        })
        .then(response => response.json())
        .then(result => result) // Return the cart data
        .catch(error => console.error(error));
    }
    
    function deleteCartItem(routeStart, cartId, itemId) {
        const route = routeStart + cartId + '/items/' + itemId;
        return fetch(route, {
            method: "DELETE",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(result => console.log(result)) // Log the server response
        .catch(error => console.error(error));
    }












































    }


    
    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }





   




















}
