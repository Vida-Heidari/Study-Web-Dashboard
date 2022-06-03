"use strict";
// ----------------------  MENU ITEM ----------------------
const menuItems = document.querySelectorAll(".menu__item");
const menulinks = document.querySelectorAll(".menu__link");

// -------- prevent default action of a tags
for (let j = 0; j < menulinks.length; j++) {
  menulinks[j].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// -------- remove and add active class to each li
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    for (let x = 0; x < menuItems.length; x++) {
      menuItems[x].classList.remove("active");
    }
    menuItems[i].classList.add("active");
  });
}
