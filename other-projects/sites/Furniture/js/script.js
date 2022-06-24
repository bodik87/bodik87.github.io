const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
popup.addEventListener("click", closeOnClick);

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const swiper = new Swiper('.sl_1_slider', {
  speed: 400,
  spaceBetween: 20,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.67,
      spaceBetween: 18,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.7,
      spaceBetween: 18,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.67,
    }
  }
});

const swiper2 = new Swiper('.sl_2_slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const swiper3 = new Swiper('.sl_3_slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  grabCursor: 'true',
  navigation: {
    nextEl: ".slider3__btns__next",
    prevEl: ".slider3__btns__prev",
  },
});