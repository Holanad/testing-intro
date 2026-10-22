function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) { 

  if(quantity == 0) {
    throw new RangeError('Нельзя добавить 0 товаров')
  }
  if(quantity > product.stock) {
    throw new RangeError('Нет такого количества товаров')
  }

  const inCart = cart.filter(prod => prod.id == product.id)

  if(inCart.length) {
    inCart[0]['quantity'] += quantity
  } else {
    product['quantity'] = quantity;
    cart.push(product);
  }

  return cart; 
}
function changeQuantity(cart, ids, quantity) { 

  const productCurrent = cart.filter(prod => prod.id == ids)
  
  if(!productCurrent.length) {
    return cart; 
  } else {
    productCurrent[0]['quantity'] = quantity;
  }

  if(quantity == 0) {
    throw new RangeError('Нельзя изменить на 0')
  }

  if(quantity > productCurrent[0]['stock']) {
    throw new RangeError('Нет такого количества товаров')
  }
  
  
  return cart; 
}
function removeFromCart(cart, idProduct) { 
  const productCurrent = cart.find(prod => prod.id == idProduct)
  cart.splice(productCurrent, 1);

  return cart; 
}
function calculateCartSubtotal(cart) { 
  return cart.reduce((total, p) => total + (p.price * p.quantity), 0);
}
function calculateOrderTotal(cart, promo) { 
  const subtotal = calculateCartSubtotal(cart);

  let delivery = 0;
  let discount = 0;

  if (subtotal > 0) {
    if (subtotal < 50000) {
      delivery = 30000;
    }

    if (promo === 'SAVE10' && subtotal >= 20000) {
      discount = subtotal * 0.1;
    }
  }

  const total = subtotal + delivery - discount;

  return { subtotal, discount, delivery, total, };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
