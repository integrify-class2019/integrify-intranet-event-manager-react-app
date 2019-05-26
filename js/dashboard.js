// GET DOM ELEMENT

const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('nav');

const showMenu = () => {
  nav.classList.toggle('open');
};
menuBar.addEventListener('click', showMenu);
