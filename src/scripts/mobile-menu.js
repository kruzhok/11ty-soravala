const mobileMenu = document.querySelector('#mobile-menu');
const bg = document.querySelector('#background');
const  body = document.querySelector('#body');
const menuToggle = document.querySelector('#menu-toggle');
const closeMenuButton = document.querySelector('#close-menu-button');
const elementsArray = [mobileMenu, bg, body, menuToggle, closeMenuButton];

function doAllTheThingsToToggleMenu() {
  elementsArray.forEach(item => {
    item.classList.toggle('menu-open');
  })
}

menuToggle&&menuToggle.addEventListener('click', doAllTheThingsToToggleMenu);
bg&&bg.addEventListener('click', doAllTheThingsToToggleMenu);
closeMenuButton&&closeMenuButton.addEventListener('click', doAllTheThingsToToggleMenu);




