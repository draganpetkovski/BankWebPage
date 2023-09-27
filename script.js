const header = document.querySelector(".header");
const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML =
  "Our website uses cookies to improve your experience <button class='btn--cookie'> Got it </button>";

header.append(message);

document.querySelector(".btn--cookie").addEventListener("click", function () {
  message.remove();
});

message.style.backgroundColor = "#37383d";

btnScroll.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// document.querySelectorAll("h1").forEach(function (curr) {
//   curr.addEventListener("mouseenter", function (e) {
//     alert("great");
//   });
// });

// document.querySelector(".nav__item").addEventListener("click", function (e) {
//   this.style.backgroundColor = "red";
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = "blue";
// });

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//PAGE NAVIGATION

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//TABBED COMPONENT

document
  .querySelector(".operations__tab-container")
  .addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");

    document
      .querySelectorAll(".operations__tab")
      .forEach((el) => el.classList.remove("operations__tab--active"));

    clicked.classList.add("operations__tab--active");

    document
      .querySelectorAll(".operations__content")
      .forEach((el) => el.classList.remove("operations__content--active"));

    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });

//NAVIGATION FADE

document.querySelector(".nav").addEventListener("mouseover", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const clicked = e.target;
    document.querySelectorAll(".nav__link").forEach(function (el) {
      if (el !== clicked) el.style.opacity = 0.5;
    });
    document.querySelector(".nav__logo").style.opacity = 0.5;
  }
});

document.querySelector(".nav").addEventListener("mouseout", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const clicked = e.target;
    document.querySelectorAll(".nav__link").forEach(function (el) {
      if (el !== clicked) el.style.opacity = 1;
    });
    document.querySelector(".nav__logo").style.opacity = 1;
  }
});

//Sticky Navigation
const stick = document.querySelector("#section--1").getBoundingClientRect();
console.log(stick);

window.addEventListener("scroll", function () {
  if (window.scrollY > stick.top)
    document.querySelector(".nav").classList.add("sticky");
  else document.querySelector(".nav").classList.remove("sticky");
});

//Slider component

const content = document.querySelectorAll(".slide");
const size = content.length;
console.log(size);
let brojac = 0;
console.log(content);
content[brojac].classList.remove("slideNode");
console.log(content[brojac]);

const next = document.querySelector(".slider__btn--right");
const prev = document.querySelector(".slider__btn--left");
next.addEventListener("click", function (e) {
  e.preventDefault();
  content.forEach((cur) => cur.classList.add("slideNone"));
  console.log(content);
  brojac++;
  console.log(brojac);
  if (brojac > content.length - 1) {
    brojac = 0;
    content[brojac].classList.remove("slideNone");
    return;
  }

  for (let [i, item] of content.entries()) {
    if (i == brojac) {
      item.classList.remove("slideNone");
    }
  }
});

prev.addEventListener("click", function (e) {
  e.preventDefault();
  content.forEach((cur) => cur.classList.add("slideNone"));
  console.log(content);
  brojac--;
  console.log(brojac);
  if (brojac < 0) {
    brojac = content.length - 1;
    content[brojac].classList.remove("slideNone");
    return;
  }

  for (let [i, item] of content.entries()) {
    if (i == brojac) {
      item.classList.remove("slideNone");
    }
  }
});

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
