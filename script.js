const logo = document.getElementById("navbar_logo");
const button = document.getElementById("btn");
const menuShow = document.getElementById("menu-show");
const home = document.getElementById("About");
const closeMenus = document.getElementById("menu-close");
const menuList = document.querySelectorAll(".menu-item");
const mainBody = document.getElementById("main");

const openMenu = () => {
  menuShow.classList.add("show-menu");
  logo.classList.add("blur-filter");
  home.classList.add("blur-filter");
  button.classList.add("blur-filter");
  mainBody.classList.add("blur-filter");
};

const closeMenu = () => {
  menuShow.classList.remove("show-menu");
  logo.classList.remove("blur-filter");
  home.classList.remove("blur-filter");
  button.classList.remove("blur-filter");
  mainBody.classList.remove("blur-filter");
};

button.addEventListener("click", openMenu);
closeMenus.addEventListener("click", closeMenu);

menuList.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

// project detail
const cardWorksWrapper = document.getElementById("grid-container");
const popupCardDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

const projectDetails = [
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups are required.",
    image: "./image/Snapshoot Portfolio.png",
    alt: "tonic project image",
    companyRoles: { company: "Canopy", position: "Back End Dev", year: "2015" },
    skills: ["html", "css", "javascript"],
    liveLink: { link: "./index.html", text: "See live" },
    sourceLink: {
      link: "https://github.com/Yemisirach/MyPortfolio",
      text: "See Source",
    },
    buttonText: "See Project",
  },
  {
    title: "Multi_Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    image: "./image/Snapshoot Portfolio (1).png",
    alt: "Multiple project image",
    companyRoles: {
      company: "FACEBOOK",
      position: "Back End Dev",
      year: "2015",
    },
    skills: ["html", "css", "javascript"],
    liveLink: { link: "./index.html", text: "See live" },
    sourceLink: {
      link: "https://github.com/Yemisirach/MyPortfolio",
      text: "See Source",
    },
    buttonText: "See Project",
  },
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups are required.",
    image: "./image/desktop-version/Snapshoot Portfolio3.png",
    alt: "tonic project image",
    companyRoles: {
      company: "FACEBOOK 360",
      position: "Back End Dev",
      year: "2015",
    },
    skills: ["html", "css", "javascript"],
    liveLink: { link: "../index.html", text: "See live" },
    sourceLink: {
      link: "https://github.com/Yemisirach/MyPortfolio",
      text: "See Source",
    },
    buttonText: "See Project",
  },
  {
    title: "Uber Navigation",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups are required.",
    image: "./image/desktop-version/Snapshoot Portfolio2.png",
    alt: "tonic project image",
    companyRoles: {
      company: "Uber",
      position: "Lead Developer",
      year: "2018",
    },
    skills: ["html", "css", "javascript"],
    liveLink: { link: "../index.html", text: "See live" },
    sourceLink: {
      link: "https://github.com/Yemisirach/MyPortfolio",
      text: "See Source",
    },
    buttonText: "See Project",
  },
];
const project = document.getElementById("grid-container");
// document.getElementById("grid-container").innerHTML = "I have changed!";
const projectcad = document.querySelectorAll("snapshoot");
// console.log(projectcad);
// const snapshoot = document.querySelector('.snapshoot_revers');
// const cadDaital = document.querySelector('.profile');
// const langList = document.querySelector('.skill');

const creatProjectDetails = (item) => {
  const snapshoot = document.createElement("div");
  if (item.flip == 1) {
    snapshoot.classList.add("grid-container, snapshoot_revers ");
  } else {
    snapshoot.classList.add("grid-container");
  }

  const roles = item.companyRoles.map((value, index) => {
    if (index !== 0) {
      return `<div class="card-bullet-separator"></div> <span class="card-canopy card-canopy-details">${value}</span>`;
    }
    return `<span class="card-canopy">${value}</span>`;
  });

  const innerHTML = `<img src="${item.image}" alt="${item.alt}">
  <div class="card-sizing">
    <h2 class="card-title-text">${item.title}</h2>
    <div class="card-list">
      ${roles.join("")}
    </div>
    <p class="card-main-text">${item.description}</p>
    <ul class="card-tools-list">
      ${skillsList.join("")}
    </ul>
    <div class="card-button-box">
      <button card-id=${
        item.id
      } class="card-button popup-card-button">See Project</button>
    </div>
  </div>`;
  snapshoot.innerHTML = innerHTML;
  cardWorksWrapper.appendChild(card);
};
projectDetails.forEach((item) => creatProjectDetails(item));
