import mydata from "../mydata";

console.log(mydata);

const menu = document.querySelector("#menu");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector("#mobile-menu");
const sandwichIcon = document.querySelector(".sandwich");
const menuItem = document.querySelectorAll(".menu-list-item");
const header = document.querySelector("header");

function clickSandwichIcon() {
  document.body.style.overflowY = "hidden";
  header.style.cssText = "height: 100vh; background-color: #3c3a39;";
  menu.style.display = "none";
  menu.style.position = "static";
  mobileMenu.style.display = "block";
}

sandwichIcon.addEventListener("click", clickSandwichIcon);

function closeMenu() {
  document.body.style.overflowY = "visible";
  header.style.cssText = "height: 72px; background-color: #3c3a39;";
  menu.style.display = "flex";
  mobileMenu.style.display = "none";
}

closeIcon.addEventListener("click", closeMenu);

menuItem.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

// pop window

const myWork = document.querySelector("#my-work");
const cardsWrapper = document.querySelector(".cards-wrapper");

// My work

let itemElement = "";
mydata[0].technologies.forEach((tech) => {
  itemElement += `<li><a href="#">${tech}</a></li>`;
});
myWork.innerHTML = `
        <div class="title">
          <h2>My Recent mywork</h2>
          <div class="separator"></div>
        </div>
        <div class="featured">
          <div class="image">
            <img
              src=${mydata[0].featuredImage}
              alt="featured work"
            />
          </div>
          <div class="content">
            <h3>${mydata[0].name}</h3>
            <p>${mydata[0].description}</p>
            <ul class="tags">
             ${itemElement}
            </ul>
            <button id="work-btn" class="btn btn-main" type="button" data-work="${0}">See Project</button>
          </div>
        </div>
`;
