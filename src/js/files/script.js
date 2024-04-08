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

// const animateItems = document.querySelectorAll(".animate-block");
// if (animateItems[0]) {
//   animateItems.forEach((element) => {
//     const items = element.querySelectorAll("[data-watch]");
//     if (items[0]) {
//       items.forEach((element, index) => {
//         if (window.matchMedia("(max-width: 992px)").matches) {
//           element.style.animationDelay = "0.1s";
//         } else {
//           element.style.animationDelay = index * 0.1 + "s";
//         }
//       });
//     }
//   });
// }

const animateItems = document.querySelectorAll(".animate-block");
if (animateItems[0]) {
  animateItems.forEach((element) => {
    const items = element.querySelectorAll("[data-watch]");
    if (items[0]) {
      items.forEach((element, index) => {
        if (window.matchMedia("(max-width: 1800px)").matches) {
          element.style.animationDelay = "0.1s";
        } else {
          const delayInSeconds = (index % 6) * 0.1 + 0.1; // Reset to 0.1 after reaching 0.5
          element.style.animationDelay = delayInSeconds + "s";
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

// const formItemFile = document.querySelector(".form__item-file");

// if (formItemFile) {
//   const formItemText = document.querySelector(".form__item-text");
//   formItemFile.addEventListener("mouseover", () => {
//     formItemText.classList.add("_active");
//   });
//   formItemFile.addEventListener("mouseout", () => {
//     formItemText.classList.remove("_active");
//   });
// }

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

//========================================================================================================================================================

// const initInputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     const dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;
//     const fileType = /application.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();

//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.setAttribute("class", "file-loader__result");
//           const close = document.createElement("button");
//           const name = document.createElement("p");
//           close.classList.add("close");
//           name.textContent = file.name;
//           wrap.appendChild(name);
//           wrap.appendChild(close);
//           files.appendChild(wrap);
//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               // deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Make all files

//       Array.from(input.files).forEach((file) => {
//         if (dt.files.length > maxFiles - 1) {
//           errorsArr.push(` ${maxFilesLenghtError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }

//         if (file.type.match(imageType)) {
//           dt.items.add(file);
//           return;
//         }
//         if (file.type.match(fileType)) {
//           dt.items.add(file);
//           return;
//         }
//         if (file.type.match(videoType)) {
//           dt.items.add(file);
//           return;
//         }
//         errorsArr.push(`${file.name} ${fileTypeError}`);
//       });
//       input.files = dt.files;

//       previewFile(dt.files);

//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element, elIndex) => {
//       const newDt = new DataTransfer();

//       const index = elIndex || getChildElementIndex(element);
//       // Copy all besides deleted
//       // eslint-disable-next-line no-plusplus
//       for (let i = 0; i <= input.files.length - 1; i++) {
//         if (i !== index) newDt.items.add(input.files[i]);
//       }

//       // Replace
//       dt.clearData();

//       input.files = newDt.files;

//       refreshFiles();
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     input.addEventListener("change", (e) => {
//       if (input.files.length === 0) {
//         input.files = dt.files;
//         return;
//       }
//       refreshFiles();
//       e.preventDefault();
//     });
//   });
// };
// initInputFiles();
// window.initInputFiles = initInputFiles;

//========================================================================================================================================================

//========================================================================================================================================================
// export const inputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     let dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();
//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.classList.add("file-loader__result");
//           const close = document.createElement("button");
//           const inp = document.createElement("input");
//           close.classList.add("close");
//           close.setAttribute("type", "button");
//           inp.setAttribute("type", "file");
//           const name = document.createElement("span");
//           name.textContent = file.name;

//           wrap.appendChild(name);

//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }

//           const image = new Image();
//           image.src = fReader.result;
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Clear the DataTransfer object to avoid duplicates
//       dt = new DataTransfer();

//       // Make all files
//       Array.from(input.files).forEach((file) => {
//         if (dt.items.length > maxFiles - 1) {
//           errorsArr.push(`${maxFilesLengthError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }
//         if (file.type.match(imageType) || file.type.match(videoType)) {
//           dt.items.add(file);
//         } else {
//           errorsArr.push(`${file.name} ${fileTypeError}`);
//         }
//       });

//       // Now update input.files just once
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element) => {
//       const index = getChildElementIndex(element);
//       if (index > -1) {
//         const newDt = new DataTransfer();
//         // Копируем все файлы, кроме удаляемого, в новый DataTransfer
//         Array.from(input.files).forEach((file, i) => {
//           if (i !== index) {
//             newDt.items.add(file);
//           }
//         });
//         dt.clearData();
//         input.files = newDt.files; // Обновляем input.files с новым набором файлов
//         element.parentNode.removeChild(element); // Удаляем элемент из DOM
//         refreshFiles(); // Обновляем UI
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     input.addEventListener("change", (e) => {
//       if (input.files.length === 0) {
//         input.files = dt.files;
//         return;
//       }
//       refreshFiles();
//       e.preventDefault();
//     });
//   });
// };
// inputFiles();

//========================================================================================================================================================
// export const inputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     let dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();
//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.classList.add("file-loader__result");
//           const close = document.createElement("button");
//           const inp = document.createElement("input");
//           close.classList.add("close");
//           close.setAttribute("type", "button");
//           inp.setAttribute("type", "file");
//           const name = document.createElement("span");
//           name.textContent = file.name;

//           wrap.appendChild(name);

//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }

//           const image = new Image();
//           image.src = fReader.result;
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Clear the DataTransfer object to avoid duplicates
//       dt = new DataTransfer();

//       // Make all files
//       Array.from(input.files).forEach((file) => {
//         if (dt.items.length > maxFiles - 1) {
//           errorsArr.push(`${maxFilesLengthError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }
//         if (file.type.match(imageType) || file.type.match(videoType)) {
//           dt.items.add(file);
//         } else {
//           errorsArr.push(`${file.name} ${fileTypeError}`);
//         }
//       });

//       // Now update input.files just once
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element) => {
//       const index = getChildElementIndex(element);
//       if (index > -1) {
//         const newDt = new DataTransfer();
//         // Копируем все файлы, кроме удаляемого, в новый DataTransfer
//         Array.from(input.files).forEach((file, i) => {
//           if (i !== index) {
//             newDt.items.add(file);
//           }
//         });
//         dt.clearData();
//         input.files = newDt.files; // Обновляем input.files с новым набором файлов
//         element.parentNode.removeChild(element); // Удаляем элемент из DOM
//         refreshFiles(); // Обновляем UI
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     input.addEventListener("change", (e) => {
//       dt.items.clear(); // Clear the current DataTransfer object

//       const newFiles = Array.from(input.files);
//       const currentFiles = Array.from(dt.files);
//       const allFiles = currentFiles.concat(newFiles);

//       if (allFiles.length > maxFiles) {
//         errorsArr.push(
//           `Количество загружаемых файлов не должно превышать ${maxFiles}`
//         );
//         checkErrors();
//         return;
//       }

//       allFiles.forEach((file) => {
//         dt.items.add(file);
//       });

//       // Update input.files with the combined files
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//       e.preventDefault();
//     });
//   });
// };
// inputFiles();

//========================================================================================================================================================
// export const inputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     let dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();
//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.classList.add("file-loader__result");
//           const close = document.createElement("button");
//           const inp = document.createElement("input");
//           close.classList.add("close");
//           close.setAttribute("type", "button");
//           inp.setAttribute("type", "file");
//           const name = document.createElement("span");
//           name.textContent = file.name;

//           wrap.appendChild(name);

//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }

//           const image = new Image();
//           image.src = fReader.result;
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Clear the DataTransfer object to avoid duplicates
//       dt = new DataTransfer();

//       // Make all files
//       Array.from(input.files).forEach((file) => {
//         if (dt.items.length > maxFiles - 1) {
//           errorsArr.push(`${maxFilesLengthError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }
//         if (file.type.match(imageType) || file.type.match(videoType)) {
//           dt.items.add(file);
//         } else {
//           errorsArr.push(`${file.name} ${fileTypeError}`);
//         }
//       });

//       // Now update input.files just once
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element) => {
//       const index = getChildElementIndex(element);
//       if (index > -1) {
//         const newDt = new DataTransfer();
//         // Копируем все файлы, кроме удаляемого, в новый DataTransfer
//         Array.from(input.files).forEach((file, i) => {
//           if (i !== index) {
//             newDt.items.add(file);
//           }
//         });
//         dt.clearData();
//         input.files = newDt.files; // Обновляем input.files с новым набором файлов
//         element.parentNode.removeChild(element); // Удаляем элемент из DOM
//         refreshFiles(); // Обновляем UI
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     input.addEventListener("change", (e) => {
//       dt.items.clear(); // Clear the current DataTransfer object

//       const newFiles = Array.from(input.files);
//       const currentFiles = Array.from(dt.files);
//       const allFiles = currentFiles.concat(newFiles);

//       if (allFiles.length > maxFiles) {
//         errorsArr.push(
//           `Количество загружаемых файлов не должно превышать ${maxFiles}`
//         );
//         checkErrors();
//         return;
//       }

//       allFiles.forEach((file) => {
//         dt.items.add(file);
//       });

//       // Update input.files with the combined files
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//       e.preventDefault();
//     });
//   });
// };
// inputFiles();
//========================================================================================================================================================

// export const inputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     let dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();
//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.classList.add("file-loader__result");
//           const close = document.createElement("button");
//           const inp = document.createElement("input");
//           close.classList.add("close");
//           close.setAttribute("type", "button");
//           inp.setAttribute("type", "file");
//           const name = document.createElement("span");
//           name.textContent = file.name;

//           wrap.appendChild(name);

//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }

//           const image = new Image();
//           image.src = fReader.result;
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Clear the DataTransfer object to avoid duplicates
//       dt = new DataTransfer();

//       // Make all files
//       Array.from(input.files).forEach((file) => {
//         if (dt.items.length > maxFiles - 1) {
//           errorsArr.push(`${maxFilesLengthError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }
//         if (file.type.match(imageType) || file.type.match(videoType)) {
//           dt.items.add(file);
//         } else {
//           errorsArr.push(`${file.name} ${fileTypeError}`);
//         }
//       });

//       // Now update input.files just once
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element) => {
//       const index = getChildElementIndex(element);
//       if (index > -1) {
//         const newDt = new DataTransfer();
//         // Копируем все файлы, кроме удаляемого, в новый DataTransfer
//         Array.from(input.files).forEach((file, i) => {
//           if (i !== index) {
//             newDt.items.add(file);
//           }
//         });
//         dt.clearData();
//         input.files = newDt.files; // Обновляем input.files с новым набором файлов
//         element.parentNode.removeChild(element); // Удаляем элемент из DOM
//         refreshFiles(); // Обновляем UI
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     let totalFilesUploaded = 0; // Variable to track total files uploaded

//     input.addEventListener("change", (e) => {
//       const currentFileCount = input.files.length;

//       dt.items.clear();

//       const newFiles = Array.from(input.files);
//       const currentFiles = Array.from(dt.files);
//       const allFiles = currentFiles.concat(newFiles);

//       if (allFiles.length + totalFilesUploaded > maxFiles) {
//         errorsArr.push(
//           `Количество загружаемых файлов не должно превышать ${maxFiles}`
//         );
//         checkErrors();
//         return;
//       }

//       allFiles.forEach((file) => {
//         dt.items.add(file);
//       });

//       // Update input.files with the combined files
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Update totalFilesUploaded
//       totalFilesUploaded = input.files.length;

//       // Check and display any errors
//       checkErrors();
//       e.preventDefault();
//     });

//     // input.addEventListener("change", (e) => {
//     //   dt.items.clear(); // Clear the current DataTransfer object

//     //   const newFiles = Array.from(input.files);
//     //   const currentFiles = Array.from(dt.files);
//     //   const allFiles = currentFiles.concat(newFiles);

//     //   if (allFiles.length > maxFiles) {
//     //     errorsArr.push(
//     //       `Количество загружаемых файлов не должно превышать ${maxFiles}`
//     //     );
//     //     checkErrors();
//     //     return;
//     //   }

//     //   allFiles.forEach((file) => {
//     //     dt.items.add(file);
//     //   });

//     //   // Update input.files with the combined files
//     //   input.files = dt.files;

//     //   // Create file previews or list
//     //   previewFile(input.files);

//     //   // Update loader visibility
//     //   if (input.files.length > 0) {
//     //     loader.classList.add("field");
//     //   } else {
//     //     loader.classList.remove("field");
//     //   }

//     //   // Check and display any errors
//     //   checkErrors();
//     //   e.preventDefault();
//     // });
//   });
// };
// inputFiles();
//========================================================================================================================================================
// export const inputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     let dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();
//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.classList.add("file-loader__result");
//           const close = document.createElement("button");
//           const inp = document.createElement("input");
//           close.classList.add("close");
//           close.setAttribute("type", "button");
//           inp.setAttribute("type", "file");
//           const name = document.createElement("span");
//           name.textContent = file.name;

//           wrap.appendChild(name);

//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               deleteFile(e.target.parentNode);
//               e.preventDefault();
//               e.stopPropagation();
//             });
//           }

//           const image = new Image();
//           image.src = fReader.result;
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Clear the DataTransfer object to avoid duplicates
//       dt = new DataTransfer();

//       // Make all files
//       Array.from(input.files).forEach((file) => {
//         if (dt.items.length > maxFiles - 1) {
//           errorsArr.push(`${maxFilesLengthError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }
//         if (file.type.match(imageType) || file.type.match(videoType)) {
//           dt.items.add(file);
//         } else {
//           errorsArr.push(`${file.name} ${fileTypeError}`);
//         }
//       });

//       // Now update input.files just once
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Check and display any errors
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }

//     const deleteFile = (element) => {
//       const index = getChildElementIndex(element);
//       if (index > -1) {
//         const newDt = new DataTransfer();
//         // Копируем все файлы, кроме удаляемого, в новый DataTransfer
//         Array.from(input.files).forEach((file, i) => {
//           if (i !== index) {
//             newDt.items.add(file);
//           }
//         });
//         dt.clearData();
//         input.files = newDt.files; // Обновляем input.files с новым набором файлов
//         element.parentNode.removeChild(element); // Удаляем элемент из DOM
//         refreshFiles(); // Обновляем UI
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     let totalFilesUploaded = 0; // Variable to track total files uploaded

//     input.addEventListener("change", (e) => {
//       const currentFileCount = input.files.length;

//       dt.items.clear();

//       const newFiles = Array.from(input.files);
//       const currentFiles = Array.from(dt.files);
//       const allFiles = currentFiles.concat(newFiles);

//       if (allFiles.length + totalFilesUploaded > maxFiles) {
//         errorsArr.push(
//           `Количество загружаемых файлов не должно превышать ${maxFiles}`
//         );
//         checkErrors();
//         return;
//       }

//       allFiles.forEach((file) => {
//         dt.items.add(file);
//       });

//       // Update input.files with the combined files
//       input.files = dt.files;

//       // Create file previews or list
//       previewFile(input.files);

//       // Update loader visibility
//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }

//       // Update totalFilesUploaded
//       totalFilesUploaded = input.files.length;

//       // Check and display any errors
//       checkErrors();
//       e.preventDefault();
//     });

//     // input.addEventListener("change", (e) => {
//     //   dt.items.clear(); // Clear the current DataTransfer object

//     //   const newFiles = Array.from(input.files);
//     //   const currentFiles = Array.from(dt.files);
//     //   const allFiles = currentFiles.concat(newFiles);

//     //   if (allFiles.length > maxFiles) {
//     //     errorsArr.push(
//     //       `Количество загружаемых файлов не должно превышать ${maxFiles}`
//     //     );
//     //     checkErrors();
//     //     return;
//     //   }

//     //   allFiles.forEach((file) => {
//     //     dt.items.add(file);
//     //   });

//     //   // Update input.files with the combined files
//     //   input.files = dt.files;

//     //   // Create file previews or list
//     //   previewFile(input.files);

//     //   // Update loader visibility
//     //   if (input.files.length > 0) {
//     //     loader.classList.add("field");
//     //   } else {
//     //     loader.classList.remove("field");
//     //   }

//     //   // Check and display any errors
//     //   checkErrors();
//     //   e.preventDefault();
//     // });
//   });
// };
// inputFiles();
//========================================================================================================================================================
// const initInputFiles = () => {
//   const loaders = document.querySelectorAll(".file-loader");

//   loaders.forEach((loader) => {
//     const dropBox = loader.querySelector(".file-loader__row");
//     const input = loader.querySelector(".file-loader__input");
//     const files = loader.querySelector(".file-loader__files");
//     const errors = loader.querySelector(".file-loader__error");
//     const errorsTextEl = document.querySelector("#errors-code");
//     const maxSize = errorsTextEl.getAttribute("data-size");
//     const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
//     const fileTypeError = errorsTextEl.getAttribute("data-fileType");
//     const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
//     const maxFiles = errorsTextEl.getAttribute("data-max");

//     const dt = new DataTransfer();
//     let errorsArr = [];
//     const imageType = /image.*/;
//     const videoType = /video.*/;
//     const fileType = /application.*/;

//     const previewFile = (fileList) => {
//       const filesArr = [...fileList];

//       filesArr.forEach((file) => {
//         const fReader = new FileReader();

//         fReader.readAsDataURL(file);
//         fReader.onloadend = () => {
//           const wrap = document.createElement("div");
//           wrap.setAttribute("class", "file-loader__result");
//           const close = document.createElement("button");
//           const name = document.createElement("p");
//           close.classList.add("close");
//           name.textContent = file.name;
//           wrap.appendChild(name);
//           wrap.appendChild(close);
//           files.appendChild(wrap);
//           if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
//             files.appendChild(wrap).appendChild(close);
//             close.addEventListener("click", (e) => {
//               // eslint-disable-next-line no-use-before-define
//               // deleteFile(e.target.parentNode);
//               // e.preventDefault();
//               // e.stopPropagation();

//               const element = e.target.parentNode;
//               const elementIndex = getChildElementIndex(element);
//               deleteFile(element, elementIndex);
//             });
//           }
//         };
//       });
//     };

//     const createError = () => {
//       if (errorsArr.length) {
//         errors.classList.add("active");

//         errorsArr.forEach((string) => {
//           const p = document.createElement("p");
//           p.textContent = string;
//           errors.appendChild(p);
//         });
//       }
//       errorsArr = [];
//     };

//     const checkErrors = () => {
//       if (errorsArr[0]) {
//         createError();
//       } else {
//         errors.classList.remove("active");

//         errors.innerHTML = "";
//       }
//     };

//     const refreshFiles = () => {
//       // Clear files
//       files.innerHTML = "";

//       // Make all files

//       Array.from(input.files).forEach((file) => {
//         if (dt.files.length > maxFiles - 1) {
//           errorsArr.push(` ${maxFilesLenghtError}`);
//           return;
//         }
//         if (file.size > maxSize) {
//           errorsArr.push(`${file.name} ${maxSizeError}`);
//           return;
//         }

//         if (file.type.match(imageType)) {
//           dt.items.add(file);
//           return;
//         }
//         if (file.type.match(fileType)) {
//           dt.items.add(file);
//           return;
//         }
//         if (file.type.match(videoType)) {
//           dt.items.add(file);
//           return;
//         }
//         errorsArr.push(`${file.name} ${fileTypeError}`);
//       });
//       input.files = dt.files;

//       previewFile(dt.files);

//       if (input.files.length > 0) {
//         loader.classList.add("field");
//       } else {
//         loader.classList.remove("field");
//       }
//       checkErrors();
//     };

//     function getChildElementIndex(element) {
//       return Array.prototype.indexOf.call(element.parentNode.children, element);
//     }
//     const deleteFile = (element) => {
//       const newDt = new DataTransfer();
//       const fileIndex = Array.from(input.files).findIndex(
//         (file) => file.name === element.textContent.trim()
//       );

//       if (fileIndex !== -1) {
//         Array.from(input.files).forEach((file, index) => {
//           if (index !== fileIndex) {
//             newDt.items.add(file);
//           }
//         });

//         dt.items.clear();
//         input.files = newDt.files;
//         refreshFiles();
//       }
//     };

//     dropBox.addEventListener("drop", (e) => {
//       input.files = e.dataTransfer.files;
//       refreshFiles();
//       e.preventDefault();
//     });

//     input.addEventListener("change", (e) => {
//       if (input.files.length === 0) {
//         input.files = dt.files;
//         return;
//       }
//       refreshFiles();
//       e.preventDefault();
//     });
//   });
// };
// initInputFiles();
// window.initInputFiles = initInputFiles;

//========================================================================================================================================================
const initInputFiles = () => {
  const loaders = document.querySelectorAll(".file-loader");

  loaders.forEach((loader) => {
    const dropBox = loader.querySelector(".file-loader__row");
    const input = loader.querySelector(".file-loader__input");
    const files = loader.querySelector(".file-loader__files");
    const errors = loader.querySelector(".file-loader__error");
    const errorsTextEl = document.querySelector("#errors-code");
    const maxSize = errorsTextEl.getAttribute("data-size");
    const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
    const fileTypeError = errorsTextEl.getAttribute("data-fileType");
    const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
    const maxFiles = errorsTextEl.getAttribute("data-max");

    const dt = new DataTransfer();
    let errorsArr = [];
    const imageType = /image.*/;
    const videoType = /video.*/;
    const fileType = /application.*/;

    const previewFile = (fileList) => {
      const filesArr = [...fileList];

      filesArr.forEach((file) => {
        const fReader = new FileReader();

        fReader.readAsDataURL(file);
        fReader.onloadend = () => {
          const wrap = document.createElement("div");
          wrap.setAttribute("class", "file-loader__result");
          const close = document.createElement("button");
          const name = document.createElement("p");
          close.classList.add("close");
          name.textContent = file.name;
          wrap.appendChild(name);
          wrap.appendChild(close);
          files.appendChild(wrap);
          if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
            files.appendChild(wrap).appendChild(close);
            close.addEventListener("click", (e) => {
              // eslint-disable-next-line no-use-before-define
              // deleteFile(e.target.parentNode);
              // e.preventDefault();
              // e.stopPropagation();

              const element = e.target.parentNode;
              const elementIndex = getChildElementIndex(element);
              deleteFile(element, elementIndex);
            });
          }
        };
      });
    };

    const createError = () => {
      errors.innerHTML = ""; // Очистить ошибки перед добавлением новой
      if (errorsArr.length) {
        errors.classList.add("active");

        errorsArr.forEach((string) => {
          const p = document.createElement("p");
          p.textContent = string;
          errors.appendChild(p);
        });
      }
      errorsArr = [];
    };

    const checkErrors = () => {
      if (errorsArr[0]) {
        createError();
      } else {
        errors.classList.remove("active");

        errors.innerHTML = "";
      }
    };

    const refreshFiles = () => {
      // Clear files
      files.innerHTML = "";

      // Make all files

      Array.from(input.files).forEach((file) => {
        if (dt.files.length > maxFiles - 1) {
          errorsArr.push(` ${maxFilesLenghtError}`);
          return;
        }
        if (file.size > maxSize) {
          errorsArr.push(`${file.name} ${maxSizeError}`);
          return;
        }

        if (file.type.match(imageType)) {
          dt.items.add(file);
          return;
        }
        if (file.type.match(fileType)) {
          dt.items.add(file);
          return;
        }
        if (file.type.match(videoType)) {
          dt.items.add(file);
          return;
        }
        errorsArr.push(`${file.name} ${fileTypeError}`);
      });
      input.files = dt.files;

      previewFile(dt.files);

      if (input.files.length > 0) {
        loader.classList.add("field");
      } else {
        loader.classList.remove("field");
      }
      checkErrors();
    };

    function getChildElementIndex(element) {
      return Array.prototype.indexOf.call(element.parentNode.children, element);
    }
    const deleteFile = (element) => {
      const newDt = new DataTransfer();
      const fileIndex = Array.from(input.files).findIndex(
        (file) => file.name === element.textContent.trim()
      );

      if (fileIndex !== -1) {
        Array.from(input.files).forEach((file, index) => {
          if (index !== fileIndex) {
            newDt.items.add(file);
          }
        });

        dt.items.clear();
        input.files = newDt.files;
        refreshFiles();
      }
    };

    dropBox.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      refreshFiles();
      e.preventDefault();
    });

    input.addEventListener("change", (e) => {
      if (input.files.length === 0) {
        input.files = dt.files;
        return;
      }
      refreshFiles();
      e.preventDefault();
    });
  });
};
initInputFiles();
window.initInputFiles = initInputFiles;
//========================================================================================================================================================

// const headerColumnLinks = document.querySelectorAll(
//   ".header__column-link--list"
// );

// headerColumnLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     document.querySelectorAll(".header__column").forEach((column) => {
//       column.classList.remove("_active");
//     });

//     this.closest(".header__column").classList.toggle("_active");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const headerColumnLinks = document.querySelectorAll(
    ".header__column-link--list"
  );

  const headerColumns = document.querySelectorAll(".header__column");

  headerColumnLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation();
      const headerColumn = this.closest(".header__column");
      const submenu = headerColumn.querySelector(".header__column-submenu");

      if (headerColumn.classList.contains("_active")) {
        headerColumn.classList.remove("_active");
        submenu.style.maxHeight = "0";
        submenu.style.visibility = "hidden";
        submenu.style.overflow = "hidden";
      } else {
        headerColumns.forEach((column) => {
          if (column !== headerColumn) {
            column.classList.remove("_active");
            const sub = column.querySelector(".header__column-submenu");
            if (sub) {
              sub.style.maxHeight = "0";
              sub.style.visibility = "hidden";
              sub.style.overflow = "hidden";
            }
          }
        });

        headerColumn.classList.add("_active");
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.style.visibility = "visible";
        submenu.style.overflow = "auto";
      }
    });
  });

  // Hide all submenus initially
  const submenus = document.querySelectorAll(".header__column-submenu");
  submenus.forEach((submenu) => {
    submenu.style.maxHeight = "0";
    submenu.style.visibility = "hidden";
    submenu.style.overflow = "hidden";
  });

  // Click outside headerColumn to remove _active class
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".header__column")) {
      headerColumns.forEach((column) => {
        column.classList.remove("_active");
        const submenu = column.querySelector(".header__column-submenu");
        if (submenu) {
          submenu.style.maxHeight = "0";
          submenu.style.visibility = "hidden";
          submenu.style.overflow = "hidden";
        }
      });
    }
  });
});
