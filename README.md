## BigCommerce Custom Features
About

### Special Item Product and Category

A product called "Special Item" has been created and assigned to a newly created category called "Special Items".

### Second Image on Hover

On the category page for "Special Items", a secondary product image is displayed when the user hovers over the product image. This is intended to give the user an additional view of the product.

### Add All to Cart Button

A button has been added to the top of the "Special Items" category page, labeled "Add All To Cart". When clicked, it adds one quantity of each product listed on the current category page to the cart. A JavaScript alert is then shown to confirm that the products have been added to the cart.

### Delete All Items from Cart Button

A second button labeled "Delete All Items from Cart" has been added to the top of the "Special Items" category page. This button is only displayed when there are items in the cart. When clicked, it removes all items from the cart.

### Storefront API Usage

The "Add All To Cart" and "Delete All Items from Cart" buttons are implemented using the BigCommerce Storefront API. These functionalities were achieved through asynchronous fetch requests to the appropriate API endpoints for adding items to the cart and removing items from the cart.

### Customer Banner

When a customer is logged in, a banner is displayed at the top of any category page. The banner includes the customer's name, email, and phone number, providing a personalized experience for the logged-in user.

## Getting Started

To view the customizations in action, visit [https://dominick-muniz-f3.mybigcommerce.com/special-items/]. Use this code to enter the website [Preview Code: mfab8jtwqz] You will need to create a customer account to see the customer banner feature.


## Images 

![Screenshot of the features - Showing category page when the cart is empty. ](screenshot1.png)


![Screenshot of the feature - Showing category page when the cart is NOT empty, and that hovering on the product shows a second image. ](screenshot2.png)
