import mydata from '../mydata.js';

const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('#close-icon');
const mobileMenu = document.querySelector('#mobile-menu');
const sandwichIcon = document.querySelector('.sandwich');
const menuItem = document.querySelectorAll('.menu-list-item');
const header = document.querySelector('header');

function clickSandwichIcon() {
  document.body.style.overflowY = 'hidden';
  header.style.cssText = 'height: 100vh; background-color: #3c3a39;';
  menu.style.display = 'none';
  menu.style.position = 'static';
  mobileMenu.style.display = 'block';
}

sandwichIcon.addEventListener('click', clickSandwichIcon);

function closeMenu() {
  document.body.style.overflowY = 'visible';
  header.style.cssText = 'height: 72px; background-color: #3c3a39;';
  menu.style.display = 'flex';
  mobileMenu.style.display = 'none';
}

closeIcon.addEventListener('click', closeMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// pop window

const myWork = document.querySelector('#my-work');
const cardsWrapper = document.querySelector('.cards-wrapper');

// My work

let itemElement = '';
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

// mydata cards
for (let i = 1; i < mydata.length; i += 1) {
  let itemElement = '';
  mydata[i].technologies.forEach((tech) => {
    itemElement += `<li><a href="#">${tech}</a></li>`;
  });

  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="card card-${i}">
    <div class="content">
      <h4 class="title">${mydata[i].name}</h4>
      <p class="summary">${mydata[i].description}</p>
      <ul class="tags">
        ${itemElement}
      </ul>
    </div>
    <button id="work-btn" class="btn btn-main" type="button" data-work="${i}">See Project</button>
  </div>
`;

  cardsWrapper.appendChild(cardDiv);
  const currentCard = document.querySelector(`.card.card-${i}`);
  currentCard.style.background = ` linear-gradient(
    180.45deg,
    rgba(38, 38, 38, 0) 0.75%,
    rgba(38, 38, 38, 0.9) 84.18%
  ),
  url('${mydata[i].featuredImage}')`;
}

// On mouse enter
for (let i = 1; i < mydata.length; i += 1) {
  const currentCard = document.querySelector(`.card-${i}`);
  currentCard.addEventListener('mouseenter', () => {
    currentCard.style.background = `url(${mydata[i].featuredImage})`;
  });
}

// On card mouse leave
for (let i = 1; i < mydata.length; i += 1) {
  const currentCard = document.querySelector(`.card-${i}`);
  currentCard.addEventListener('mouseleave', () => {
    currentCard.style.background = ` linear-gradient(
      180.45deg,
      rgba(38, 38, 38, 0) 0.75%,
      rgba(38, 38, 38, 0.9) 84.18%
    ),
    url('${mydata[i].featuredImage}')`;
  });
}

const workButtons = document.querySelectorAll('#work-btn');

const createModal = (i) => {
  let techStr = '';
  mydata[i].technologies.forEach((tech) => {
    techStr += `<li><a href="">${tech}</a></li>`;
  });
  const modal = `
  <div class="modal-content">
          <div class="modal-title">
            <h2>${mydata[i].name}</h2>
            <div id="close-works-modal">
              <img
                src="./assets/icons/close-popup-menu.png"
                alt="close modal"
              />
            </div>
          </div>
          <ul class="tech-tags">${techStr}</ul>
          <div class="modal-main">
            <div class="modal-img">
              <img src="${mydata[i].featuredImage}" alt="work" />
            </div>
            <div class="modal-info">
              <div class="modal-right">
                <p>${mydata[i].description}</p>
                <div class="modal-btns">
                  <button id="btn-1" class="btn btn-main" type="button">
                  <a href="${mydata[i].urlLive}" class="modal-links">
                  <span>
                    See Live
                  </span>
                  <img
                    class="icon"
                    src="./assets/icons/see-live.png"
                    alt="see live"
                /></a>
                  </button>
                  <button id="btn-2" class="btn btn-main" type="button">
                  <a href="${mydata[i].urlRepo}" class="modal-links">
                  <span>
                    See Source
                  </span>
                  <img
                    class="icon"
                    src="./assets/icons/github-modal.png"
                    alt="see source"
                /></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
  return modal;
};

const displayModal = (event) => {
  const modalSection = document.querySelector('.work-modal');
  const index = event.target.dataset.work;
  const workModal = createModal(index);
  modalSection.innerHTML = workModal;
  modalSection.style.display = 'block';
  const closeModalBtn = document.querySelector('.close-works-modal');
  closeModalBtn.addEventListener('click', () => {
    modalSection.style.display = 'none';
  });
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'work-modal') {
      modalSection.style.display = 'none';
    }
  });
};

workButtons.forEach((btn) => {
  btn.addEventListener('click', displayModal);
});

// Validating mail form
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const fullName = document.querySelector('#name');

const disableRequired = () => {
  firstName.removeAttribute('required');
  lastName.removeAttribute('required');
  fullName.removeAttribute('required');
};

window.addEventListener('load', disableRequired);

function validEmail(value) {
  if (value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
}

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  const emailEntered = document.querySelector('#email');
  const errorMsg = document.querySelector('#validation-message');
  if (validEmail(emailEntered.value)) {
    errorMsg.textContent = '';
    emailEntered.style.border = '1px solid #cfd8dc';
  } else {
    e.preventDefault();
    emailEntered.style.border = '3px solid red';
    errorMsg.textContent = 'Submission FAILS!! Email should be lower case, Like: "example@mail.com"';
  }
});
