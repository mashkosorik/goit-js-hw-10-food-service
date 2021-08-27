import css from "./css/style.css";
import post from "./post.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const themeSwitchToggle = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");
const jsMenu = document.querySelector(".js-menu");
const menuItem = post(menu);
jsMenu.insertAdjacentHTML("afterbegin", menuItem);

if (localStorage.getItem('theme')) {
  body.classList.add(Theme.DARK);
  themeSwitchToggle.checked = true
}


themeSwitchToggle.addEventListener ("change", (event) =>{
if (event.target.checked) {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', '!')
} else {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  localStorage.removeItem('theme')
}
});

