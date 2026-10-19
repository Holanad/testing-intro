function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 
/*
  if(quantity > product.stock) {
    return;
  }*/

  const inCart = cart.filter(prod => prod.id == product.id)
  
  if(inCart.length) {
    product['quantity'] += quantity;
  } else {
    product['quantity'] = quantity;
    cart.push(product);
  }


  return cart; 
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
