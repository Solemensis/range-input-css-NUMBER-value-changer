"use strict";

const root = document.documentElement;
const opacityInput = document.querySelector(".opacity-input");

opacityInput.addEventListener("input", function () {
  root.style.setProperty("--opacity", this.value);
});
