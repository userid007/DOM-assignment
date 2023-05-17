let accordian_wrapper = document.querySelector(".accordian-wrapper");
console.log(accordian_wrapper);
accordian_wrapper.innerHTML += `<div class="accordian">
  <h3 style="background: rgb(219, 219, 249);">Skills</h3>
  <p>
  I posses a very good command over the Full Stack Development technologies like MERN which can be
  seen in my work over the Github.
  </p>
</div>`;

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.style.background = "#DBDBF9";
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
