// Add anoter row inside the right side panel and implement scroll
let div = document.querySelector(".new");
let hr = document.createElement("hr");
let h2 = document.createElement("h2");
let p = document.createElement("p");

hr.setAttribute("class", "hr-line");
h2.setAttribute("class", "new-head");
p.setAttribute("class", "new-p");

h2.innerText = "This is my Custom Heading";
p.innerText = "This is the Custom Sub Heading";

div.append(hr);
div.append(h2);
div.append(p);

let cont = document.querySelector("aside");
cont.style.overflow = "auto";
