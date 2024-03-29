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


        // CREATE a cart - helper function
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
          };

          // GET a cart - helper function
          function getCart(route) {
            return fetch(route, {
                method: "GET",
                credentials: "same-origin"
            })
            .then(response => response.json())
            .then(result => {
                console.log('Returned cart data:', result);
                return result;
            })
            .catch(error => console.error(error));
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
              body: JSON.stringify(cartItems),
            })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.error(error));
          };

            // DELETE A CART ITEM - helper function
            function deleteCartItem(routeStart, cartId, itemId) {
                var route = routeStart + cartId + '/items/' + itemId;
                return fetch(route, {
                method: "DELETE",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                }
                })
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.error(error));
            };


            const addAllToCartButton = document.getElementById('addAllToCart');

            const handleAddAllToCart = async (cartId) => {
                const productCards = document.querySelectorAll('.card');
                const cartItems = {
                    lineItems: Array.from(productCards).map(card => ({
                        quantity: 1,
                        productId: parseInt(card.getAttribute('data-entity-id'), 10)
                    }))
                };
                try {
                    await addCartItem('/api/storefront/carts/', cartId, cartItems);
                    alert('All products have been added to your cart!');
                    location.reload(); // Refresh the page
                } catch (error) {
                    console.error('Error adding items to cart:', error);
                }
            };
            
            const createNewCartWithItems = async () => {
                const productCards = document.querySelectorAll('.card');
                const cartItems = {
                    lineItems: Array.from(productCards).map(card => ({
                        quantity: 1,
                        productId: parseInt(card.getAttribute('data-entity-id'), 10)
                    }))
                };
                try {
                    await createCart('/api/storefront/carts', cartItems);
                    alert('All products have been added to your new cart!');
                    location.reload(); // Refresh the page
                } catch (error) {
                    console.error('Error creating cart:', error);
                }
            };
            
            if (addAllToCartButton) {
                addAllToCartButton.addEventListener('click', async () => {
                    try {
                        const carts = await getCart('/api/storefront/carts');
                        if (carts.length > 0) {
                            await handleAddAllToCart(carts[0].id);
                        } else {
                            await createNewCartWithItems();
                        }
                    } catch (error) {
                        console.error('Error fetching cart:', error);
                    }
                });
            }
            
            async function deleteAllItemsFromCart(cartId, itemIds) {
                for (const itemId of itemIds) {
                    await deleteCartItem('/api/storefront/carts/', cartId, itemId);
                }
                location.reload(); // Refresh the page
            }

            async function updateDeleteButtonVisibility() {
                try {
                    const cartData = await getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options');
                    if (cartData.length > 0 && cartData[0].lineItems.physicalItems.length > 0) {
                        deleteAllFromCartButton.style.display = "block"; // Show the button
                    } else {
                        deleteAllFromCartButton.style.display = "none"; // Hide the button
                    }
                } catch (error) {
                    console.error('Error updating delete button visibility:', error);
                }
            }
            
            const deleteAllFromCartButton = document.getElementById('deleteAllFromCart');
            
            if (deleteAllFromCartButton) {
                deleteAllFromCartButton.addEventListener('click', async () => {
                    try {
                        const cartData = await getCart('/api/storefront/carts?include=lineItems.digitalItems.options,lineItems.physicalItems.options');
                        if (cartData.length > 0) {
                            const cartId = cartData[0].id;
                            const physicalItems = cartData[0].lineItems.physicalItems;
                            const itemIds = physicalItems.map(item => item.id);
                            await deleteAllItemsFromCart(cartId, itemIds);
                            alert('All items have been removed from your cart!');
                        }
                    } catch (error) {
                        console.error('Error removing items from cart:', error);
                    }
                });
                updateDeleteButtonVisibility(); // Update the visibility of the delete button on page load


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
