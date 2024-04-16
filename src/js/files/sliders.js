/*
Документация слайдера: https://swiperjs.com/
*/
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectFade,
  Thumbs,
  Autoplay,
} from "swiper/modules";
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import "../../scss/base/swiper.scss";
// import "../../scss/libs/swiper.scss";
// import "swiper/css";

// Инициализация слайдеров
export function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  if (document.querySelector(".swiper")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    const mainSlider = new Swiper(".js-slider-main", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 0,
      // autoHeight: true,
      speed: 500,
      // effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },

      pagination: {
        el: ".main__pagination",
        clickable: true,
        dynamicBullets: 5,
        renderBullet: function (index, className) {
          if (index < 5) {
            return '<span class="' + className + '"></span>';
          } else {
            return ""; // возвращаем пустую строку для индексов больше 4
          }
        },
        // renderBullet: function (index, className) {
        //   if (index < 5) {
        //     return '<span class="' + className + '"></span>';
        //   } else {
        //     return ""; // возвращаем пустую строку для индексов больше 4
        //   }
        // },
      },
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: ".main__arrow--prev",
        nextEl: ".main__arrow--next",
      },
      /*
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/

      on: {
        slideChange: function () {
          const bullets = document.querySelectorAll(
            ".main__pagination .swiper-pagination-bullet"
          );
          bullets.forEach((bullet, index) => {
            if (index === Math.min(this.realIndex, 4)) {
              // ограничиваем индекс до 4
              bullet.classList.add("swiper-pagination-bullet-active-main");
            } else {
              bullet.classList.remove("swiper-pagination-bullet-active-main");
            }
          });
        },
      },
    });

    const newsSlider = new Swiper(".js-slider-news", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 800,
      initialSlide: 1,
      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      pagination: {
        el: ".news__pagination",
        clickable: true,
        dynamicBullets: 5,
        renderBullet: function (index, className) {
          if (index < 5) {
            return '<span class="' + className + '"></span>';
          } else {
            return ""; // возвращаем пустую строку для индексов больше 4
          }
        },
        // renderBullet: function (index, className) {
        //   if (index < 5) {
        //     return '<span class="' + className + '"></span>';
        //   } else {
        //     return ""; // возвращаем пустую строку для индексов больше 4
        //   }
        // },
      },

      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: ".news__arrow--prev",
        nextEl: ".news__arrow--next",
      },
      breakpoints: {
        320: {
          // slidesPerView: 1.06,
          slidesPerView: "auto",
          spaceBetween: 19,
          touchRatio: 1,
          simulateTouch: true,
        },
        640: {
          // slidesPerView: 1.2,
          slidesPerView: "auto",
          spaceBetween: 20,
          touchRatio: 1,
          simulateTouch: true,
        },
        768: {
          // slidesPerView: 1.637,
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1024: {
          // slidesPerView: 1.5,
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1200: {
          // slidesPerView: 2.1,
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1290: {
          // slidesPerView: 2.373,
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1445: {
          // slidesPerView: 3,
          slidesPerView: "auto",
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
      },
      on: {
        slideChange: function () {
          const bullets = document.querySelectorAll(
            ".news__pagination .swiper-pagination-bullet"
          );
          bullets.forEach((bullet, index) => {
            if (index === Math.min(this.realIndex, 4)) {
              // ограничиваем индекс до 4
              bullet.classList.add("swiper-pagination-bullet-active-main");
            } else {
              bullet.classList.remove("swiper-pagination-bullet-active-main");
            }
          });
        },
      },
    });
    const reviewSlider = new Swiper(".js-slider-review", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 800,
      initialSlide: 2,
      // touchRatio: 0,
      // simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      pagination: {
        el: ".review__pagination",
        clickable: true,
        dynamicBullets: 5,
        renderBullet: function (index, className) {
          if (index < 5) {
            return '<span class="' + className + '"></span>';
          } else {
            return ""; // возвращаем пустую строку для индексов больше 4
          }
        },
        // renderBullet: function (index, className) {
        //   if (index < 5) {
        //     return '<span class="' + className + '"></span>';
        //   } else {
        //     return ""; // возвращаем пустую строку для индексов больше 4
        //   }
        // },
      },

      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: ".review__arrow--prev",
        nextEl: ".review__arrow--next",
      },
      breakpoints: {
        320: {
          slidesPerView: "auto",
          // slidesPerView: 1.06,
          spaceBetween: 19,
          touchRatio: 1,
          simulateTouch: true,
        },
        640: {
          slidesPerView: "auto",
          // slidesPerView: 1.2,
          spaceBetween: 20,
          touchRatio: 1,
          simulateTouch: true,
        },
        768: {
          slidesPerView: "auto",
          // slidesPerView: 1.637,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: "auto",
          // slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: "auto",
          // slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1290: {
          slidesPerView: "auto",
          // slidesPerView: 2.374,
          spaceBetween: 20,
        },
        1445: {
          slidesPerView: "auto",
          // slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      on: {
        slideChange: function () {
          const bullets = document.querySelectorAll(
            ".review__pagination .swiper-pagination-bullet"
          );
          bullets.forEach((bullet, index) => {
            if (index === Math.min(this.realIndex, 4)) {
              // ограничиваем индекс до 4
              bullet.classList.add("swiper-pagination-bullet-active-main");
            } else {
              bullet.classList.remove("swiper-pagination-bullet-active-main");
            }
          });
        },
      },
    });
    const actionThumbsSlider = new Swiper(".js-slider-thumbs", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 26,

      // autoHeight: true,
      speed: 500,
      // effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // pagination: {
      //   el: ".main__pagination",
      //   clickable: true,
      //   dynamicBullets: true,
      // },

      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      /*
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      on: {},
    });
    const actionSlider = new Swiper(".js-slider-action", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // autoHeight: true,
      speed: 500,
      // effect: "fade",

      thumbs: {
        swiper: {
          el: ".js-slider-thumbs",
          slidesPerView: 3,
          spaceBetween: 26,
        },
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // pagination: {
      //   el: ".main__pagination",
      //   clickable: true,
      //   dynamicBullets: true,
      // },

      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // navigation: {
      //   prevEl: ".main__arrow--prev",
      //   nextEl: ".main__arrow--next",
      // },
      breakpoints: {
        320: {
          slidesPerView: 1.06,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          // slidesPerView: 1.1,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
      on: {},
    });
    const sliderGallery = new Swiper(".js-slider-gallery", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 1,
      // autoHeight: true,
      speed: 500,
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true,
      // },
      // touchRatio: 0,
      // simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      pagination: {
        el: ".popup__pagging",
        clickable: true,
        type: "fraction",
        // renderBullet: function (index, className) {
        //   if (index < 5) {
        //     return '<span class="' + className + '"></span>';
        //   } else {
        //     return ""; // возвращаем пустую строку для индексов больше 4
        //   }
        // },
      },
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: ".popup__arrow--prev",
        nextEl: ".popup__arrow--next",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1268: {
          slidesPerView: 1,
          spaceBetween: 61,
        },
      },

      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  initSliders();
  //initSlidersScroll();
});

// Бинд слайдеров на window для беков
window.initSliders = initSliders;
