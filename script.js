const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');



  
  function showProduct(brand, name, image, price) {
    
    document.getElementById('cart-product-image').src = image;
    document.getElementById('cart-product-name').textContent = brand + ' ' + name;
    document.getElementById('cart-product-price').textContent = 'Rs.' + price;
  
    window.location.href = 'order.html';
  }
  