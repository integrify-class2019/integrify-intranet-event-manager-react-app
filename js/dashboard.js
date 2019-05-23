// GET DOM ELEMENT

const menuBar = document.querySelector('.menu-bar');
const nav = document.querySelector('nav');
console.log(nav);

const showMenu = () => {
  console.log('clicked');
  nav.classList.toggle('open');
};
menuBar.addEventListener('click', showMenu);
