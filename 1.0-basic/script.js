const navList = document.getElementById("nav-list");
const menuSwitch = document.querySelector(".menu-switch");
// ===== content loaded =====
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 1025) {
        navList.hidden = false;
    }
});

// ===== window resize =====
window.addEventListener("resize", () => {
    if (window.innerWidth > 1025) {
        navList.hidden = false;
    } else if (window.innerWidth < 1025) {
        navList.hidden = true;
    }
})

// ===== menu button click =====
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", (event) => {
    const ariaControls = event.currentTarget.getAttribute("aria-controls");
    const controlledAria = document.getElementById(ariaControls);
    if (controlledAria.hidden) {
        controlledAria.hidden = false;
        event.currentTarget.setAttribute("aria-expanded", "true");
        menuSwitch.innerHTML = "close";
    } else if (!controlledAria.hidden) {
        controlledAria.hidden = true;
        event.currentTarget.setAttribute("aria-expanded", "false");
        menuSwitch.innerHTML = "open";
    }
});

const mainNav = document.querySelector(".main-nav");
const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach(element => {
    console.log(element);
    element.addEventListener("click", () => {
        if (window.innerWidth < 1025) {
            navList.hidden = true;
            menuSwitch.innerHTML = "open";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    })
});