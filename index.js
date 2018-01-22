var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100)
 var object = {[item]: itemPrice}
 cart.push(object)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at \$${Object.values(cart[0])}.`)
  } else if (cart.length === 2) {
    var newArray = []
    for (var i = 0; i < cart.length; i++) {
      newArray.push(`${Object.keys(cart[i])} at \$${Object.values(cart[i])}`)
      } console.log(`In your cart, you have ${newArray.join(", and ")}.`)
  
  } else if (cart.length >= 3) {
    
  } else {
    console.log('Your shopping cart is empty.')
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
