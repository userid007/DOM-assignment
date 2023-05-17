const random = Math.floor(Math.random(0, 1) * 5);
const def = [first, second, third, fourth, fifth];
console.log(random);

function first() {
  document.querySelector(
    "ul"
  ).innerHTML += `<li>Projects</li> \n <li>Hire Me</li>`;
  document.querySelector("footer").children[1].style.visibility = "hidden";
}
function second() {
  document.querySelector("ul").children[2].innerHTML = "Projects";
  document.querySelector("input").placeholder = "Search My Project";
  document.querySelector("input").style.width = "200px";
  document.querySelector("footer").children[1].style.visibility = "hidden";
}

function third() {
  document.querySelector("ul").children[2].innerHTML = "Projects";
}

function fourth() {
  document.querySelector("ul").children[2].innerHTML = "Projects";
  document.querySelector("img").src = "./logo.jpeg";
}
function fifth() {
  document.querySelector("ul").children[2].innerHTML = "Projects";
  const button = document.createElement("button");
  button.innerHTML = "Support Me";
  document.querySelector(".hero-right-section-btns").appendChild(button);
}
def[random]();
