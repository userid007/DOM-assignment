let clash_card_level = document.getElementsByClassName("clash-card__level");
const temp = [];
for (let index = 0; index < clash_card_level.length; index++) {
  temp.push(
    getComputedStyle(clash_card_level[index]).getPropertyValue("color")
  );
}
console.log(temp);

let clearfix = document.getElementsByClassName("clearfix");
for (let index = 0; index < clash_card_level.length; index++) {
  clearfix[index].style.background = temp[index];
}

let stat = document.getElementsByClassName("stat");
for (let index = 0; index < stat.length; index++) {
  stat[index].style.color = "white";
}

let stat_value = document.getElementsByClassName("stat-value");
for (let index = 0; index < stat_value.length; index++) {
  stat_value[index].style.color = "white";
}
