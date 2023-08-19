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
    
            productCards.forEach(card => {
                const productId = card.getAttribute('data-entity-id');
                addCartItem(cartId, productId);
            });
    
            alert('All products have been added to your cart!');
        };
    
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
                        fetch('/api/storefront/carts', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(response => response.json())
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
