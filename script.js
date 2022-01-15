//
//
const hamburgerbutton = document.querySelector(".hamburgermenu");

const menu = document.querySelector(".navbar");

const closebutton = document.querySelector(".close");

const viewportWidth = window.innerWidth;

console.log(viewportWidth);

function openMenu() {
  console.log("hello");

  hamburgerbutton.style.opacity = 0;

  menu.style.display = "block";

  closebutton.style.display = "block";
}

function closeMenu() {
  hamburgerbutton.style.opacity = 1;

  menu.style.display = "none";

  closebutton.style.display = "none";

  window.onresize = function () {
    location.reload();
  };
}

const links = document.querySelectorAll("a");

console.log(links);

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(e.target);

    if (e.target.classList.contains("works")) {
      const id = e.target.getAttribute("href");

      console.log(id);

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }

    if (viewportWidth <= 900) {
      closeMenu();
    }
  });
});
