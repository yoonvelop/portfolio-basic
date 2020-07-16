"use strict";
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; //실제로 사용자에게 보여지는 사이즈를 가져오는 함수
document.addEventListener("scroll", () => {
  console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.remove("navbar--trans");
  } else {
    navbar.classList.add("navbar--trans");
  }
});
