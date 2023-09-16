const title = document.querySelector("h1");
title.addEventListener("mouseover", () => {
  title.style.color = "#DC143C";
});
title.addEventListener("mouseout", () => {
  title.style.color = "black";
});
const add_to_cart = document.querySelector(".add-to-cart");

add_to_cart.addEventListener("mouseover", () => {
  add_to_cart.style.background = "#DC143C";
});
add_to_cart.addEventListener("mouseout", () => {
  add_to_cart.style.background = "hsl(158, 36%, 37%)";
});