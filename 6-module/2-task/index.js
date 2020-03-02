'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.slideNumber = 0; // начальный слайд равен первому слайду
    this.createMainCarousel(); // рисуем основную вёрстку
    this.showActiveSlide(this.slideNumber); // рисуем первый слайд
    this.slideNext(); // переключение слайда на следующий
    this.slidePrev(); // переключение слайда на предыдущий
    this.changeActiveIndicator(); // меняем активный индикатор
  }

  createMainCarousel() {
    this.el.insertAdjacentHTML('afterbegin', `
       <div id="mainCarousel" class="main-carousel carousel slide">
            <ol class="carousel-indicators">
                <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
                <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
                <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
            </ol>
            <div class="carousel-inner">
                <!--Вот здесь будет активный слайд-->
            </div>

            <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
       </div>`);
  }

  showActiveSlide(slide) {
    let carouselInner = this.el.querySelector('.carousel-inner');
    carouselInner.innerHTML = `
        <div class="carousel-item active">
            <img src=${this.slides[slide].img} alt="Activelide">
                <div class="container">
                    <div class="carousel-caption">
                    <h3 class="h1">${this.slides[slide].title}</h3>
                       <div>
                            <a class="btn" href="#" role="button">
                               View all DEALS
                               <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                            </a>
                       </div>
                    </div>
                </div>
        </div>`;
  }

  slideNext() {
    let btnNext = this.el.querySelector('.carousel-control-next');
    btnNext.addEventListener('click', () => {
      if (this.slideNumber >= this.slides.length - 1) {
        this.slideNumber = 0;
      } else {
        this.slideNumber++;
      }
    });
    this.el.addEventListener('click', () => {
      this.showActiveSlide(this.slideNumber);
      this.changeActiveIndicator();
    });
  }

  slidePrev() {
    let btnPrev = this.el.querySelector('.carousel-control-prev');
    btnPrev.addEventListener('click', () => {
      if (this.slideNumber <= 0) {
        this.slideNumber = this.slides.length - 1;
      } else {
        this.slideNumber--;
      }
    });
    this.el.addEventListener('click', () => {
      this.showActiveSlide(this.slideNumber);
      this.changeActiveIndicator();
    });
  }

  changeActiveIndicator() {
    let carouselIndicators = this.el.querySelector('.carousel-indicators');
    carouselIndicators.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        this.slideNumber = event.target.dataset.slideTo;
      }
    });
    let carouselIndicator = this.el.querySelectorAll('.carousel-indicator');
    let nextActiveIndicator = this.el.querySelector(`*[data-slide-to="${this.slideNumber}"]`);
    for (let indicator of carouselIndicator) {
      indicator.classList.remove('active');
    }
    nextActiveIndicator.classList.add('active');
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
