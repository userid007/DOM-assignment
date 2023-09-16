let course = document.querySelector(".main__languages");

for (let i = 1; i < course.children.length; i++) {
  if (course.children[i].innerHTML.includes("2.0")) {
    course.children[i].style.display = "none";
  }
}


setTimeout(() => {
  let input = document.querySelector(".main__form-input");
  input.value = "iNeuron";
  setTimeout(() => {
    let form = document.querySelector("form");
    form.submit();
  }, 2000);
}, 2000);