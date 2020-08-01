const burgerButton = document.querySelector("#dh_menu_btn");
const sideMenu = document.querySelector(".side-menu");

burgerButton.addEventListener("click", showSideMenu);
window.addEventListener("scroll", hideSideMenuScroll);

function showSideMenu(event) {
    console.log(sideMenu);
    sideMenu.classList.toggle("side-menu-toggle");
}

function hideSideMenuScroll(event) {
    if (sideMenu.classList.contains("side-menu-toggle")) {
        sideMenu.classList.remove("side-menu-toggle");
    }
}