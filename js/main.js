// navbar
const navIcon = document.querySelector(".nav-icon");
const menus = document.querySelector(".menus");
navIcon.addEventListener("click", function () {
  menus.classList.toggle("active");
});

// swiper js
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});
