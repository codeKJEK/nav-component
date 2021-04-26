// ===== content loaded =====
window.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById("nav-list");
    if (window.innerWidth > 1025) {
        navList.hidden = false;
    }
});

// ===== window resize =====
window.addEventListener("resize", () => {
    const navList = document.getElementById("nav-list");
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
    const menuSwitch = document.querySelector(".menu-switch");
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