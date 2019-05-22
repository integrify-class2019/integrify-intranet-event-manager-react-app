// GET DOM ELEMENT

const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.side-bar');
console.log(sideBar);

const showMenu = () => {
  console.log('clicked');
  sideBar.classList.toggle('show-menu');
};
menuButton.addEventListener('click', showMenu);

const hideMenu = () => {};
