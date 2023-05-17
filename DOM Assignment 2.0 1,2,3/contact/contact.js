const inputform = document.querySelector(".mainRight").querySelector("form");
const outputform = document.querySelector(".mainLeft").querySelector("form");

inputform.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < 3; i++) {
    outputform.elements[i].value = inputform.elements[i].value;
  }
});
