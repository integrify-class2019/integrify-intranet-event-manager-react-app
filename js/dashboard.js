// GET DOM ELEMENT

const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const main = document.querySelector('main');
console.log(nav);

const showMenu = () => {
  console.log('clicked');
  nav.classList.toggle('open');
};
menuBar.addEventListener('click', showMenu);
