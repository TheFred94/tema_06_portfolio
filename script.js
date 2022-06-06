// Variabler til burgermenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

// Variabler til dark mode
const body = document.querySelector("body");
const mode = document.querySelector(".mode");
const banner = document.querySelector(".banner");
const button = document.querySelector("button");
const footer = document.querySelector("footer");

// Burgermenu funktioner
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
    header.classList.remove(".active");
  })
);

// Dark mode funktioner
function darkMode() {
  body.classList.toggle("dark");
  mode.classList.toggle("dark");
  banner.classList.toggle("dark");
  hamburger.classList.toggle("dark");
  footer.classList.toggle("dark");

  if (mode.classList.contains("dark")) {
    document.querySelector("button").textContent = "Light Mode";
  } else {
    document.querySelector("button").textContent = "Dark Mode";
  }
}

mode.addEventListener("click", darkMode);
