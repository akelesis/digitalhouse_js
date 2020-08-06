const carousel = document.getElementById('carousel-items');

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

let position = 0;

const carouselNext = () => {
  if (position/deviceWidth === 2) {
    position = 0;
    carousel.scrollTo(position, 0);
    return;
  }
  position += deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselBack = () => {
  if (position/deviceWidth === 0) {
    position += 2 * deviceWidth;
    carousel.scrollTo(position, 0);
    return;
  }
  position -= deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselNextButton = document.getElementById('carousel-next');
carouselNextButton.onclick = carouselNext;

const carouselBackButton = document.getElementById('carousel-back');
carouselBackButton.onclick = carouselBack;

const sideMenuButton = document.getElementById('dh_menu_btn');
const dismissSideMenuButton = document.getElementById('dismiss-dh_menu-btn');
const sideMenu = document.getElementById('side-menu');

let sideMenuOpen = false;

sideMenuButton.addEventListener('click', () => {
  if (sideMenuOpen === false) {
    console.log('oi')
    sideMenu.style.right = '0';
    sideMenuOpen = true;
  }
});

dismissSideMenuButton.addEventListener('click', () => {
  if (sideMenuOpen) {
    sideMenu.style.right = '-350px';
    sideMenuOpen = false;
  }
});