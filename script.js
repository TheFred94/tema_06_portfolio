const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

// Lav en variabel, der refererer til body
const body = document.querySelector("body");
// Lav en variabel, der refererer til ".mode"
const mode = document.querySelector(".mode");
const banner = document.querySelector(".banner");
const button = document.querySelector("button");

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

function darkMode() {
  body.classList.toggle("dark");
  mode.classList.toggle("dark");
  banner.classList.toggle("dark");
  hamburger.classList.toggle("dark");

  if (mode.classList.contains("dark")) {
    document.querySelector("button").textContent = "Light Mode";
  } else {
    document.querySelector("button").textContent = "Dark Mode";
  }
}

mode.addEventListener("click", darkMode);
