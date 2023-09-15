let tags_container = document.querySelector(".tags-container").lastElementChild;
let chinese = tags_container.lastElementChild.cloneNode(true);
chinese.innerHTML = "Chinese (7)";
tags_container.appendChild(chinese);

let recipe_gallery = document.querySelector(".recipe-gallery");
let card = recipe_gallery.lastElementChild.cloneNode(true);
card.innerHTML = "<h5 class='recipe-name'>add 6th card here</h5>";
recipe_gallery.appendChild(card);
