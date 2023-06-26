const toggleMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.navbar');
const menuX = document.querySelector(".menu-X");
const container =  document.querySelector(".container");
var overlay = document.querySelector(".overlay");

function toggleOverlay() {
  overlay.style.display = (overlay.style.display === "none") ? "block" : "none";
}

toggleMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuX.classList.toggle('disabled');
  container.classList.toggle('overlay');

});


menuX.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuX.classList.toggle('disabled');
  container.classList.toggle('overlay');
});


