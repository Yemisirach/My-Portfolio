const button = document.getElementById("btn");
const list = document.getElementById("list");

list.style.display = "none";

button.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
