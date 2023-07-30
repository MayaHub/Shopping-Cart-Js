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
  quantity: 0,
  productId: 101,
  image: (url = "images/cherry.jpg"),
};

const orange = {
  name: "orange",
  price: 2.99,
  quantity: 0,
  productId: 102,
  image: (url = "images/orange.jpg"),
};

const strawberry = {
  name: "strawberries",
  price: 4.99,
  quantity: 0,
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

  for (const product of products) {

    if(product.productId === productId) {

       const item = {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        productId: product.productId,
        image: product.image,
      };

      const presentItem = cart.findIndex((p) => p.productId === productId);

      if (presentItem !== -1) {
        increaseQuantity(productId)
      } else {
        cart.push(item);
        increaseQuantity(productId);
      }
    }

  }
  // product = cart.find(product => product.productId === productId);
  // product ? increaseQuantity(productId) : cart.push(product);


  /*Second try */
  // let product = products.find(product => product.productId === productId);
  // product = cart.find(product => product.productId === productId);
  // product ? increaseQuantity(productId) : cart.push({ product, productId, quantity: 1 });

  /*First try */
  // const item = cart.find(item => item.productId === productId);
  // item ? increaseQuantity(productId) : cart.push({ quantity: 1, productId });
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

  const item = cart.find((item) => item.productId === productId);

  item.quantity <= 1 ? removeProductFromCart(productId) : item.quantity--;
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {

  cart = cart.filter((item) => item.productId !== productId);
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
  return total.toFixed(2);
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  //dump products from cart
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {

  /*Me - third time */

  const bill = amount - cartTotal();
  return bill.toFixed(2);

  // if (change <0) {
  //   return -(change);
  // }

  /* chat gpt 
  const cartTotal = cartTotal();
  change = amount - cartTotal;
  */

  //this is part of the chatgpt also
// if (change >= 0) {
//   return "Your change is:", change;
// } else {
//   return "Remaining balance to be paid:", Math.abs(change);
// }

  /* second try */
  // const total = cart.forEach(item => item.price += total);
  // amount >= total ? amount - total : total - amount;

  /* first try
  if (amount > balance) {
    return amount - balance;
  } else {
    return balance - amount;
  }
  */
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
