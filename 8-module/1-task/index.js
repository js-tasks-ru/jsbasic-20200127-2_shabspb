class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.products = [];
    this.el.innerHTML = `<div class="row justify-content-end">
    <div class="col-lg-9">
        <h3 class="section-title">Top Recommendations for You</h3>
        <div class="row homepage-cards">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
    </div>
</div>`;
  }

  show() {
    return fetch(this.productsUrl, { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          let homepageCards = this.el.querySelector('.homepage-cards');
          homepageCards.insertAdjacentHTML('afterBegin', `<div data-product-id="${result[i].id}" class="products-list-product col-md-6 col-lg-4 mb-4">
    <div class="card">
        <div class="card-img-wrap">
            <img class="card-img-top" src="${result[i].imageUrl}" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">${result[i].title}</h5>
            <div class="rate">
            </div>
            <p class="card-text price-text discount"><strong>${result[i].price}</strong></p>
            <button class="product-add-to-cart" data-button-role="add-to-cart">
              Add to cart
            </button>
        </div>
    </div>
</div>`);
          if (result[i].oldPrice) {
            let discount = this.el.querySelector('.discount');
            discount.insertAdjacentHTML('beforeEnd', `<small class="ml-2">${result[i].oldPrice}</small>`);
          }
          if (result[i].rating) {
            let rate = this.el.querySelector('.rate');
            let starElement = `<i class="icon-star active"></i>`;
            let starCheckedElement = `<i class="icon-star checked"></i>`;
            let allStars = '';
            let checkedStars = result[i].rating.stars || 0;
            for (let i = 0; i < 5; i++) {
              if (checkedStars === 0) {
                allStars += starElement;
              } else {
                checkedStars -= 1;
                allStars += starCheckedElement;
              }
            }
            rate.insertAdjacentHTML('afterbegin', `${allStars}
                <span class="rate-amount ml-2">${result[i].rating.reviewsAmount}</span>`);
          }
        }
        this.el.addEventListener('click', (event) => {
          if (event.target.dataset.buttonRole !== 'add-to-cart') {return;}
          let div = event.target.closest('.products-list-product');
          if (localStorage.getItem(this.productsStoreKey)) {
            if (confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {
              if (this.products.includes(result[+div.dataset.productId - 1])) {return;}
              this.products.push(result[+div.dataset.productId - 1]);
            }
          } else {
            if (confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {
              this.products.push(result[+div.dataset.productId - 1]);
            }
          }
          localStorage.setItem(this.productsStoreKey, JSON.stringify(this.products));
        });
      });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
