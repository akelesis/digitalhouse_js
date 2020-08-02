const burgerButton = document.querySelector("#dh_menu_btn");
const sideMenu = document.querySelector(".side-menu");

const carouselSlider = document.querySelector(".carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-slider img");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");
const carouselWidth = carouselSlider.clientWidth;
let slideFactor = 0;

burgerButton.addEventListener("click", showSideMenu);
window.addEventListener("scroll", hideSideMenuScroll);

nextButton.addEventListener("click", slideForward);
previousButton.addEventListener("click", slideBackward);

function showSideMenu(event) {
    console.log(sideMenu);
    sideMenu.classList.toggle("side-menu-toggle");
}

function hideSideMenuScroll(event) {
    if (sideMenu.classList.contains("side-menu-toggle")) {
        sideMenu.classList.remove("side-menu-toggle");
    }
}

function slideForward(event) {
    slideFactor = (slideFactor + 1) % carouselImages.length;
    carouselSlider.style.transform = `translateX(-${carouselWidth * slideFactor}px)`;
    console.log(slideFactor);
}

function slideBackward(event) {
    slideFactor = (slideFactor + (carouselImages.length - 1)) % carouselImages.length;
    carouselSlider.style.transform = `translateX(-${carouselWidth * slideFactor}px)`;
    console.log(slideFactor);

}