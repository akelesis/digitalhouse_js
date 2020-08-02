const carousel = document.getElementById('carousel-items');

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

let position = 0;

const carouselNext = () => {
  if (position/deviceWidth === 2) {
    return;
  }
  position += deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselBack = () => {
  if (position/deviceWidth === 0) {
    return;
  }
  position -= deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselNextButton = document.getElementById('carousel-next');
carouselNextButton.onclick = carouselNext;

const carouselBackButton = document.getElementById('carousel-back');
carouselBackButton.onclick = carouselBack;