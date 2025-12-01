/*----------------- BOUTON MENU RESPONSIVE -----------------*/
const menuResponsive = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  closeIcon.classList.add("hidden");
  menuResponsive.classList.remove("hidden")
});

menuResponsive.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  menuResponsive.classList.add("hidden")
});
