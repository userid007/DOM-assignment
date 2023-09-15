let price = document.querySelector(".app_price");
console.log(price.firstElementChild);
price.firstElementChild.innerHTML = "$10";


let social = document.querySelector(".footer_social");
let linkedIn = social.lastElementChild.cloneNode(true);
linkedIn.firstElementChild.className = "fa-brands fa-linkedin";
social.appendChild(linkedIn);