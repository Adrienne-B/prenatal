const hamburger = document.querySelector(".hamburger);
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEvent("click", function () {
        hamburger.classList.remove("active");

}));

var reviews = [
    "Eros in cursus turpis massa  dui ut ornare lectus. Ac auctor augue mauris gravida in fermentum.",
    "Eros in cursus turpis massa  dui ut ornare lectus. Ac auctor augue mauris gravida in fermentum.",
]