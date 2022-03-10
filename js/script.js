const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('.close-icon');
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

function closeMenuResize() {
  if (window.innerWidth > 600) {
    closeMenu();
  }
}
window.addEventListener('resize', closeMenuResize);

menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});
