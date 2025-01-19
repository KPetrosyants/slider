const sliderFrontSwiper = new Swiper(".slider-front-desc", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 26,

  // If we need pagination
  pagination: {
    el: ".slider-front-pagination-desc",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-front-button-next",
    prevEl: ".slider-front-button-prev",
  },
});
const sliderFrontMobileSwiper = new Swiper(
  ".slider-front.slider-front-mobile",
  {
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["50px", 0, 0],
      },
      next: {
        translate: ["50px", 0, 0],
      },
      progressMultiplier: 1,
      limitProgress: 4,
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
        creativeEffect: {
          prev: {
            translate: ["70px", 0, 0],
          },
          next: {
            translate: ["70px", 0, 0],
          },
          progressMultiplier: 1,
          limitProgress: 4,
        },
      },
      730: {
        slidesPerView: 1.5,
        creativeEffect: {
          prev: {
            translate: ["40px", 0, 0],
          },
          next: {
            translate: ["40px", 0, 0],
          },
          progressMultiplier: 1,
          limitProgress: 4,
        },
      },

      980: {
        slidesPerView: 2,
        creativeEffect: {
          prev: {
            translate: ["70px", 0, 0],
          },
          next: {
            translate: ["70px", 0, 0],
          },
          progressMultiplier: 1,
          limitProgress: 4,
        },
      },
    },
    pagination: {
      el: ".slider-front-pagination-mobile",
    },
  }
);

const slidersBack = document.querySelectorAll(".slider-back .swiper-slide");
const sliderFrontMob = document.querySelector(
  ".slider-front.slider-front-mobile"
);
const sliderFrontdDesc = document.querySelector(
  ".slider-front.slider-front-desc"
);

function backSliderChange(sliderFront) {
  console.log(sliderFront);
  const slidersFront = sliderFront.querySelectorAll(".swiper-slide");
  const sliderFrontActiveSlide = sliderFront.querySelector(
    ".swiper-slide-active"
  );
  console.log(sliderFront == sliderFrontdDesc);
  let sliderController = sliderFrontSwiper;
  if (sliderFront == sliderFrontMob) {
    sliderController = sliderFrontMobileSwiper;
  }
  sliderController.on("beforeTransitionStart", function () {
    slidersFront.forEach((slide, index) => {
      if (slide.classList.contains("swiper-slide-active")) {
        console.log(slide);
        slidersBack.forEach((slide) => {
          slide.classList.remove("active");
        });
        slidersBack[index].classList.add("active");
      }
    });
  });
}

backSliderChange(sliderFrontdDesc);
backSliderChange(sliderFrontMob);

// sliderFrontDesc.on("beforeTransitionStart", function () {
//   slidersFront.forEach((slide, index) => {
//     if (slide.classList.contains("swiper-slide-active")) {
//       console.log(slide);
//       slidersBack.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//       slidersBack[index].classList.add("active");
//     }
//   });
// });
// sliderFrontMobile.on("beforeTransitionStart", function () {
//   slidersFront.forEach((slide, index) => {
//     if (slide.classList.contains("swiper-slide-active")) {
//       console.log(slide);
//       slidersBack.forEach((slide) => {
//         slide.classList.remove("active");
//       });
//       slidersBack[index].classList.add("active");
//     }
//   });
// });

// var swiper = new Swiper(".mySwiper", {
//     grabCursor: true,
//     slidesPerView: 1.2,
//     effect: "creative",
//     creativeEffect: {
//       prev: {
//         translate: ["20px", 0, 0],
//       },
//       next: {
//         translate: ["20px", 0, 0],
//       },
//       progressMultiplier: 1,
//       limitProgress: 9,
//     },
//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
