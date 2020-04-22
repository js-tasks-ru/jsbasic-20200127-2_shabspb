'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.el = parentElement;
    this.products = JSON.parse(localStorage.getItem('cart-products'));
    this.renderOuter();
    this.renderProductCard(this.products);
    this.renderReviews(this.products);
    this.el.addEventListener('click', event => this.deleteFromCart(event, this.products));
  }

  renderOuter() {
    // карточки товаров
    this.el.insertAdjacentHTML('beforeend', `
      <div class="product-list-box">
      </div>`);
  }

  renderProductCard(products) {
    let container = this.el.querySelector(".product-list-box");

    for (let product in products) {
      let productCode = `<div data-product-id="${products[product].id}" class="product-wrapper box-inner-col description-col">
      <div class="product-image-container">
        <img class="product-image" src="${products[product].imageUrl}" alt="img">
      </div>

      <div class="product-description">
        <h4 class="col-title mb-2">${products[product].title}</h4>
        <div class="rate">
        </div>

        <p class="rate-amount d-none d-md-block mt-1">
        ${products[product].rating ? products[product].rating.reviewsAmount : 'no'} reviews</p>
      </div>

      <div class="product-price">
        <p class="mb-0 font-weight-light">Price:</p>
        <h4 class="col-title price-text mb-2">${products[product].price}</h4>
      </div>

      <div class="product-remove-button-wrapper">
        <button type="button" data-button-role="checkout-remove-product" class="product-remove-button" item-id="${products[product].id}">
          X
        </button>
      </div>
      </div>`;

      container.insertAdjacentHTML('beforeend', productCode);
    }
  }

  renderReviews(products){
    let container = this.el.querySelectorAll("div .rate");

    for (let product in products) {
      if (products[product].rating) {
        for (let i=0; i<5; i++) {
          container[product].insertAdjacentHTML('beforeend', `<i class="icon-star
            ${products[product].rating.stars > i ? ' checked' : ' ' }
          ">`);
        }
      }
    }
  }

  deleteFromCart(event, products) {

    if (event.target.tagName == 'BUTTON') {

      if (confirm('Вы уверены, что хотите удалить этот товар из корзины?')) {

        let itemId = +event.target.getAttribute('item-id');
        let cartData = this.getCartData();
        console.log(cartData);

        // удаляем элемент из хранилища
        if(cartData.length == 1) {
          localStorage.clear();
        } else {
          for (let i=0; i<cartData.length; i++) {
            if(cartData[i].id == itemId) {
              cartData.splice(i, 1);
              this.setCartData(cartData);
            }
          }
        }

        // удаляем элемент из верстки
        event.target.closest('div .product-wrapper').remove();
      }
    }
  }

  // Получаем данные из LocalStorage
  getCartData(){
    return JSON.parse(localStorage.getItem(this.productsStoreKey));
  }

  // Записываем данные в LocalStorage
  setCartData(data){
    localStorage.setItem(this.productsStoreKey, JSON.stringify(data));
    return false;
  }
}

window.CheckoutProductList = CheckoutProductList;
