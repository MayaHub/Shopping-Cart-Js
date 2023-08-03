/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const cherry = {
  name: "cherries",
  price: 3.99,
  quantity: 1,
  productId: 101,
  image: (url = "images/cherry.jpg"),
};

const orange = {
  name: "orange",
  price: 2.99,
  quantity: 1,
  productId: 102,
  image: (url = "images/orange.jpg"),
};

const strawberry = {
  name: "strawberries",
  price: 4.99,
  quantity: 1,
  productId: 103,
  image: (url = "images/strawberry.jpg"),
};

const products = [cherry, orange, strawberry];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {

  //look in product array to see if product exists
  for (const product of products) {

    //if it is found
    if(product.productId === productId) {

      //new object to represent item
      const presentItem = cart.findIndex((p) => p.productId === productId);

      //if item is present, increase quantity. If not, add to cart.
      presentItem !== -1 ? increaseQuantity(productId) : cart.push(product);
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  const item = cart.find(item => item.productId === productId);
  item.quantity++;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  //Look in the cart to locate the item
  const item = cart.find(item => item.productId === productId);

  //if the item is found
  if (item && item.quantity > 0) {
    item.quantity--;
    if (item.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  //find index of product
  const itemIndex = cart.findIndex(p => p.productId === productId);

  //if the product exists, cut it out
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  //iterate through the cart to get the total of all products
  let total = 0;
  for (const item of cart) {
    const { quantity, price } = item;
    total += quantity * price;
  }
  //return the sum of the products in the cart
  
  //cast to Number to prevent string representation of number
  return Number(total.toFixed(2));
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {

  const bill = amount - cartTotal();
  return Number(bill.toFixed(2));
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
