const logo = document.getElementById("navbar_logo");
const button = document.getElementById("btn");
const list = document.getElementById("list");
const menuShow = document.getElementById("menu-show");
const home = document.getElementById("About");
const closeMenus = document.getElementById("menu-close");
const menuList = document.querySelectorAll(".menu-item");
// list.style.display = "none";

// button.addEventListener("click", () => {
//   if (list.style.display === "none") {
//     list.style.display = "block";
//   } else {
//     list.style.display = "none";
//   }
// });

const openMenu = () => {
  menuShow.classList.add("show-menu");
  logo.classList.add("blur-filter");
  home.classList.add("blur-filter");
  // mainBody.classList.add("blur-filter");
};

const closeMenu = () => {
  menuShow.classList.remove("show-menu");
  logo.classList.remove("blur-filter");
  home.classList.remove("blur-filter");
  // mainBody.classList.remove("blur-filter");
};

button.addEventListener("click", openMenu);
button.addEventListener("click", closeMenu);

menuList.forEach((item) => {
  item.addEventListener("click", closeMenus);
});
