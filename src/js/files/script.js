// Підключення функціоналу "Чертоги Фрілансера"
import {
  _slideUp,
  _slideDown,
  _slideToggle,
  isMobile,
  menuClose,
} from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// const catalogItems = document.querySelectorAll(".js-catalog");

// if (catalogItems) {
//   catalogItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       item.classList.toggle("_active");

//       const nextElement = item.nextElementSibling;
//       if (nextElement) {
//         nextElement.classList.toggle("_active");
//       }
//     });
//   });
// }

// const catalogItems = document.querySelectorAll(".js-catalog");

// if (catalogItems) {
//   if (window.innerWidth > 992) {
//     catalogItems.forEach((item) => {
//       item.addEventListener("mouseover", () => {
//         item.classList.toggle("_active");

//         const nextElement = item.nextElementSibling;
//         if (nextElement) {
//           nextElement.style.transition =
//             "height 0.5s ease-in-out, opacity 0.5s ease-in-out";
//           nextElement.classList.toggle("_active");
//           if (nextElement.classList.contains("_active")) {
//             nextElement.style.height = "auto";
//             nextElement.style.opacity = "1";
//             const height = nextElement.clientHeight + "px";
//             nextElement.style.height = height;
//           } else {
//             nextElement.style.height = "0";
//             nextElement.style.opacity = "0";
//           }
//         }
//       });
//       item.addEventListener("click", () => {
//         item.classList.toggle("_active");
//         const nextElement = item.nextElementSibling;
//         if (nextElement) {
//           nextElement.style.transition =
//             "height 0.5s ease-in-out, opacity 0.5s ease-in-out";
//           nextElement.classList.toggle("_active");
//           if (nextElement.classList.contains("_active")) {
//             nextElement.style.height = "auto";
//             nextElement.style.opacity = "1";
//             const height = nextElement.clientHeight + "px";
//             nextElement.style.height = height;
//           } else {
//             nextElement.style.height = "0";
//             nextElement.style.opacity = "0";
//           }
//         }
//       });
//     });
//   }
//   if (window.innerWidth < 992) {
//     catalogItems.forEach((item) => {
//       item.addEventListener("click", () => {
//         item.classList.toggle("_active");
//         const nextElement = item.nextElementSibling;
//         if (nextElement) {
//           nextElement.style.transition =
//             "height 0.5s ease-in-out, opacity 0.5s ease-in-out";
//           nextElement.classList.toggle("_active");
//           if (nextElement.classList.contains("_active")) {
//             nextElement.style.height = "auto";
//             nextElement.style.opacity = "1";
//             const height = nextElement.clientHeight + "px";
//             nextElement.style.height = height;
//           } else {
//             nextElement.style.height = "0";
//             nextElement.style.opacity = "0";
//           }
//         }
//       });
//     });
//   }
// }

const catalogItems = document.querySelectorAll(".js-catalog");
// const catalogItem = document.querySelectorAll(".catalog__item");
const catalogItems01 = document.querySelectorAll(".catalog__item");

if (catalogItems01) {
  if (window.innerWidth > 1420) {
    catalogItems01.forEach((item) => {
      item.addEventListener("mouseleave", () => {
        item.querySelectorAll("._active").forEach((activeItem) => {
          activeItem.classList.remove("_active");
        });

        const nextElement = item.querySelector(".catalog__list");
        if (nextElement) {
          nextElement.style.height = "0";
          nextElement.style.opacity = "0";
        }
      });
    });
  }
}

if (catalogItems.length > 0) {
  if (window.innerWidth > 1420) {
    catalogItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.classList.add("_active");
        const nextElement = item.nextElementSibling;
        if (nextElement) {
          nextElement.style.transition =
            "height 0.3s ease-in-out, opacity 0.3s ease-in-out";
          nextElement.classList.add("_active");
          if (nextElement.classList.contains("_active")) {
            nextElement.style.height = "auto";
            nextElement.style.opacity = "1";
            const height = nextElement.clientHeight + "px";
            nextElement.style.height = height;
          } else {
            nextElement.style.height = "0";
            nextElement.style.opacity = "0";
          }
        }
      });

      // item.addEventListener("mouseleave", () => {
      //   // item.classList.remove("_active");
      //   const nextElement = item.nextElementSibling;
      //   if (nextElement) {
      //     // nextElement.classList.remove("_active");
      //   }
      // });
      // const catalogContainer = document.querySelector(".catalog__item");
      // catalogContainer.addEventListener("mouseleave", () => {
      //   catalogContainer.querySelectorAll(".catalogItems").forEach((item) => {
      //     item.classList.remove("_active");
      //     const nextElement = item.nextElementSibling;
      //     if (nextElement) {
      //       nextElement.classList.remove("_active");
      //       nextElement.style.height = "0";
      //       nextElement.style.opacity = "0";
      //     }
      //   });
      // });
      // const nextElement = item.nextElementSibling;
      // if (nextElement) {
      //   nextElement.addEventListener("mouseleave", () => {
      //     item.classList.remove("_active");
      //     nextElement.classList.remove("_active");
      //     nextElement.style.height = "0";
      //     nextElement.style.opacity = "0";
      //   });
      // }

      item.addEventListener("click", () => {
        item.classList.toggle("_active");
        const nextElement = item.nextElementSibling;
        if (nextElement) {
          nextElement.style.transition =
            "height 0.3s ease-in-out, opacity 0.3s ease-in-out";
          nextElement.classList.toggle("_active");
          if (nextElement.classList.contains("_active")) {
            nextElement.style.height = "auto";
            nextElement.style.opacity = "1";
            const height = nextElement.clientHeight + "px";
            nextElement.style.height = height;
          } else {
            nextElement.style.height = "0";
            nextElement.style.opacity = "0";
          }
        }
      });
    });
  }
  if (window.innerWidth < 1420) {
    catalogItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Удаляем класс _active у всех элементов, кроме текущего
        catalogItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("_active");
            // Дополнительно скрываем соседний элемент и удаляем у него _active
            const otherNextElement = otherItem.nextElementSibling;
            if (otherNextElement) {
              otherNextElement.style.height = "0";
              otherNextElement.style.opacity = "0";
              otherNextElement.classList.remove("_active");
            }
          }
        });

        item.classList.toggle("_active");
        const nextElement = item.nextElementSibling;
        if (nextElement) {
          nextElement.style.transition =
            "height 0.3s ease-in-out, opacity 0.3s ease-in-out";
          nextElement.classList.toggle("_active");
          if (nextElement.classList.contains("_active")) {
            nextElement.style.height = "auto";
            nextElement.style.opacity = "1";
            const height = nextElement.clientHeight + "px";
            nextElement.style.height = height;
          } else {
            nextElement.style.height = "0";
            nextElement.style.opacity = "0";
          }
        }
      });
    });
  }
  // } else if (window.innerWidth < 992) {
  //   catalogItems.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       item.classList.toggle("_active");
  //       const nextElement = item.nextElementSibling;
  //       if (nextElement) {
  //         nextElement.style.transition =
  //           "height 0.3s ease-in-out, opacity 0.3s ease-in-out";
  //         nextElement.classList.toggle("_active");
  //         if (nextElement.classList.contains("_active")) {
  //           nextElement.style.height = "auto";
  //           nextElement.style.opacity = "1";
  //           const height = nextElement.clientHeight + "px";
  //           nextElement.style.height = height;
  //         } else {
  //           nextElement.style.height = "0";
  //           nextElement.style.opacity = "0";
  //         }
  //       }
  //     });
  //   });
  // }
}

const catalogSearch = document.querySelectorAll(".js-search");

if (catalogSearch) {
  const catalogClose = document.querySelectorAll(".form__close");
  catalogSearch.forEach((item) => {
    item.addEventListener("click", function () {
      document.documentElement.classList.toggle("menu-search");
      menuClose();
    });
  });
  catalogClose.forEach((item) => {
    item.addEventListener("click", function () {
      document.documentElement.classList.toggle("menu-search");
      menuClose();
    });
  });
}

const cookiesLink = document.querySelector(".main__cookies-link");

if (cookiesLink) {
  const cookiesElement = document.querySelector(".main__cookies");
  cookiesLink.addEventListener("click", () => {
    cookiesElement.classList.toggle("_active");
  });
}

const animateItems = document.querySelectorAll(".animate-block");
if (animateItems[0]) {
  animateItems.forEach((element) => {
    const items = element.querySelectorAll("[data-watch]");
    if (items[0]) {
      items.forEach((element, index) => {
        if (window.matchMedia("(max-width: 992px)").matches) {
          element.style.animationDelay = "0.1s";
        } else {
          element.style.animationDelay = index * 0.1 + "s";
        }
      });
    }
  });
}

// const allSwiperConstructors = document.querySelectorAll(".swiper__constructor");

// if (allSwiperConstructors) {
//   allSwiperConstructors.forEach((swiperConstructor) => {
//     const nextArrow = swiperConstructor.querySelector(".swiper__arrow--next");
//     const prevArrow = swiperConstructor.querySelector(".swiper__arrow--prev");

//     nextArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.nextElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.nextElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     prevArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.previousElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.previousElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });
//   });
// }

// const allSwiperConstructors = document.querySelectorAll(".swiper__constructor");

// if (allSwiperConstructors) {
//   allSwiperConstructors.forEach((swiperConstructor) => {
//     const nextArrow = swiperConstructor.querySelector(".swiper__arrow--next");
//     const prevArrow = swiperConstructor.querySelector(".swiper__arrow--prev");

//     nextArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.nextElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.nextElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     prevArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.previousElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.previousElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });
//   });
// }

// const allSwiperConstructors = document.querySelectorAll(".swiper__constructor");

// if (allSwiperConstructors) {
//   allSwiperConstructors.forEach((swiperConstructor) => {
//     const nextArrow = swiperConstructor.querySelector(".swiper__arrow--next");
//     const prevArrow = swiperConstructor.querySelector(".swiper__arrow--prev");

//     nextArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.nextElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.nextElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     prevArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.previousElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.previousElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     const pagination = swiperConstructor.querySelector(".swiper-pagination");
//     const slides = swiperConstructor.querySelectorAll(
//       ".swiper-wrapper .swiper-slide"
//     );
//     for (let i = 0; i < slides.length; i++) {
//       const bullet = document.createElement("span");
//       bullet.classList.add("swiper-pagination-bullet");
//       pagination.appendChild(bullet);
//     }
//   });
// }

// const allSwiperConstructors = document.querySelectorAll(
//   ".swiper .swiper__constructor"
// );

// if (allSwiperConstructors) {
//   allSwiperConstructors.forEach((swiperConstructor) => {
//     const nextArrow = swiperConstructor.querySelector(".swiper__arrow--next");
//     const prevArrow = swiperConstructor.querySelector(".swiper__arrow--prev");

//     nextArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.nextElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.nextElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     prevArrow.addEventListener("click", () => {
//       const activeBullet = swiperConstructor.querySelector(
//         ".swiper__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active"
//       );
//       if (activeBullet.previousElementSibling) {
//         activeBullet.classList.remove("swiper-pagination-bullet-active");
//         activeBullet.previousElementSibling.classList.add(
//           "swiper-pagination-bullet-active"
//         );
//       }
//     });

//     const pagination = swiperConstructor.querySelector(".swiper-pagination");
//     const slides = swiperConstructor.querySelectorAll(
//       ".swiper-wrapper .swiper-slide"
//     );
//     for (let i = 0; i < slides.length; i++) {
//       const bullet = document.createElement("span");
//       bullet.classList.add("swiper-pagination-bullet");
//       pagination.appendChild(bullet);
//     }

//     // Добавляем обработчик событий для перемещения по слайдам
//     swiperConstructor.addEventListener("transition", () => {
//       const activeIndex = swiperConstructor.swiper.realIndex;
//       const bullets = swiperConstructor.querySelectorAll(
//         ".swiper-pagination-bullet"
//       );
//       bullets.forEach((bullet, index) => {
//         if (index === activeIndex) {
//           bullet.classList.add("swiper-pagination-bullet-active");
//         } else {
//           bullet.classList.remove("swiper-pagination-bullet-active");
//         }
//       });
//     });
//   });
// }
const actionBottomLink = document.querySelector(".action__bottom-link");

if (actionBottomLink) {
  const actionBottomItems = document.querySelector(".action__bottom-items");

  actionBottomLink.addEventListener("click", (event) => {
    event.stopPropagation(); // предотвращаем всплытие события
    actionBottomItems.classList.toggle("_active");
  });

  document.addEventListener("click", (event) => {
    if (!actionBottomItems.contains(event.target)) {
      actionBottomItems.classList.remove("_active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const jsSortTitle = document.querySelector(".js-sort-title");
  const constructorSortItems = document.querySelector(
    ".constructor-sort__items"
  );

  if (jsSortTitle) {
    jsSortTitle.addEventListener("click", function () {
      jsSortTitle.classList.toggle("_active");
      constructorSortItems.classList.toggle("_active");
    });

    constructorSortItems.addEventListener("click", function (event) {
      if (event.target.classList.contains("js-sort-item")) {
        event.target.classList.toggle("_active");

        let nextElement = event.target.nextElementSibling;
        if (nextElement) {
          nextElement.classList.toggle("_active");
          if (nextElement.classList.contains("_active")) {
            // nextElement.style.maxHeight = nextElement.scrollHeight + "px";
            nextElement.style.maxHeight = nextElement.scrollHeight + "px";
          } else {
            nextElement.style.maxHeight = "0";
          }
        }
      }
    });
  }
});

// const telInputs = document.querySelectorAll('input[type="tel"]');

// if (telInputs) {
//   telInputs.forEach((input) => {
//     Inputmask({ mask: "+7 (999) 999-9999", showMaskOnHover: false }).mask(
//       input
//     );
//   });
// }

// const slides = document.querySelectorAll(".card-item");

// if (slides) {
//   slides.forEach((slide) => {
//     const slidesText = slide.querySelector(".card-item__text");
//     const originalHeight = slidesText.clientHeight;

//     slidesText.style.opacity = "0";
//     slidesText.style.height = "0";
//     slidesText.style.transition = "opacity 0.5s, height 0.5s";
//     slidesText.style.overflow = "hidden";
//     slidesText.style.textOverflow = "ellipsis";
//     slidesText.style.webkitLineClamp = "3";
//     slidesText.style.webkitBoxOrient = "vertical";

//     slide.addEventListener("mouseover", () => {
//       slidesText.style.opacity = "1";
//       slidesText.style.height = `${originalHeight + 5}px`;
//       // slidesText.style.height = originalHeight + "px";
//       slide.classList.add("_active");
//     });

//     slide.addEventListener("mouseout", () => {
//       slidesText.style.opacity = "0";
//       slidesText.style.height = "0";
//       slide.classList.remove("_active");
//     });
//   });
// }

const callbackMap = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=f62fedc8-83b7-4f5c-8c7b-a771b0530843&lang=ru_RU";
      script.async = true; // Асинхронная загрузка скрипта
      document.body.append(script);
      script.addEventListener("load", () => {
        ymaps.ready(init);
        function init() {
          ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center:
                  window.innerWidth < 655
                    ? [55.779324, 37.581623]
                    : window.innerWidth < 991
                      ? [55.779324, 37.583623]
                      : window.innerWidth < 1200
                        ? [55.775324, 37.587623]
                        : [55.775324, 37.583623],
                zoom: 15,
              }),
              // Создаем метку с помощью вспомогательного класса.
              myPlacemark1 = new ymaps.Placemark(
                [55.78249, 37.580481],
                {
                  // Свойства.
                  // Содержимое хинта.
                  hintContent:
                    "Надпись, которая всплаывет при наведении на метку",
                },
                {
                  // Опции
                  iconLayout: "default#image",
                  // Своё изображение иконки метки.
                  iconImageHref: "../img/icon-map.svg",
                  // Размеры метки.
                  iconImageSize: [40, 40],
                  // Смещение левого верхнего угла иконки относительно
                  // её "ножки" (точки привязки).
                  iconImageOffset: [-20, -20],
                }
              );

            // Добавляем все метки на карту.
            myMap.geoObjects.add(myPlacemark1);
          });
        }
      });
      observer.unobserve(entry.target);
    }
  });
};
var options = {
  rootMargin: "75px 0px 75px 0px",
  threshold: 0,
};
let targetMap = document.querySelector("#map");
if (targetMap) {
  const observer = new IntersectionObserver(callbackMap, options);

  observer.observe(targetMap);
}

const slides = document.querySelectorAll(".card-item");

if (slides) {
  slides.forEach((slide) => {
    const slidesText = slide.querySelector(".card-item__text");

    if (window.innerWidth > 1280) {
      const originalHeight = slidesText.clientHeight;

      slidesText.style.opacity = "0";
      slidesText.style.height = "0";
      slidesText.style.transition = "opacity 0.5s, height 0.5s";
      slidesText.style.overflow = "hidden";
      slidesText.style.textOverflow = "ellipsis";
      slidesText.style.webkitLineClamp = "3";
      slidesText.style.webkitBoxOrient = "vertical";

      slide.addEventListener("mouseover", () => {
        slidesText.style.opacity = "1";
        slidesText.style.height = `${originalHeight + 5}px`;
        // slidesText.style.height = originalHeight + "px";
        slide.classList.add("_active");
      });

      slide.addEventListener("mouseout", () => {
        slidesText.style.opacity = "0";
        slidesText.style.height = "0";
        slide.classList.remove("_active");
      });
    }
    // if (window.innerWidth > 820) {
    //   const originalHeight = slidesText.clientHeight;

    //   slidesText.style.opacity = "0";
    //   slidesText.style.height = "0";
    //   slidesText.style.transition = "opacity 0.5s, height 0.5s";
    //   slidesText.style.overflow = "hidden";
    //   slidesText.style.textOverflow = "ellipsis";
    //   slidesText.style.webkitLineClamp = "3";
    //   slidesText.style.webkitBoxOrient = "vertical";

    //   slide.addEventListener("mouseover", () => {
    //     slidesText.style.opacity = "1";
    //     slidesText.style.height = `${originalHeight + 5}px`;
    //     // slidesText.style.height = originalHeight + "px";
    //     slide.classList.add("_active");
    //   });

    //   slide.addEventListener("mouseout", () => {
    //     slidesText.style.opacity = "0";
    //     slidesText.style.height = "0";
    //     slide.classList.remove("_active");
    //   });
    // }
  });
}

// export const initMask = () => {
//   const telInputs = document.querySelectorAll('input[type="tel"]');

//   if (telInputs) {
//     telInputs.forEach((input) => {
//       Inputmask({ mask: "+7 (999) 999-9999", showMaskOnHover: false }).mask(
//         input
//       );
//     });
//   }
// };

const formItemFile = document.querySelector(".form__item-file");

if (formItemFile) {
  const formItemText = document.querySelector(".form__item-text");
  formItemFile.addEventListener("mouseover", () => {
    formItemText.classList.add("_active");
  });
  formItemFile.addEventListener("mouseout", () => {
    formItemText.classList.remove("_active");
  });
}

const directionColumnImgs = document.querySelectorAll(".direction__column-img");

if (directionColumnImgs) {
  function updateFlex() {
    directionColumnImgs.forEach((img) => {
      const width = img.offsetWidth;
      img.style.flex = `0 0 ${width}px`;
    });
  }

  window.addEventListener("resize", updateFlex);
  updateFlex();
}

window.addEventListener("scroll", () => {
  if (window.innerWidth > 992) {
    const menu = document.querySelector(".menu-open");
    const search = document.querySelector(".menu-search");
    if (menu && window.scrollY > 0) {
      menu.classList.remove("menu-open");
    }

    if (search && window.scrollY > 0) {
      search.classList.remove("menu-search");
    }
  }
});

const actionInfoImg = document.querySelectorAll(".js-photo");

if (actionInfoImg) {
  if (window.innerWidth > 992) {
    function updateFlex() {
      actionInfoImg.forEach((img) => {
        const width = img.offsetWidth;
        img.style.height = `${width}px`;
      });
    }

    window.addEventListener("resize", updateFlex);
    updateFlex();
  }
}
