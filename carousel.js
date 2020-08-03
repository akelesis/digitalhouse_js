const numberOfCarouselImgs = 3;
let currentCarouselIndex = 0;
const carouselImages = document.getElementsByClassName("carousel-img");

function prevCarouselImg() {
  const currentSlide = carouselImages[currentCarouselIndex];

  let nextCarouselIndex;
  if (currentCarouselIndex === 0) {
    nextCarouselIndex = numberOfCarouselImgs - 1;
  } else {
    nextCarouselIndex = currentCarouselIndex - 1;
  }
  const nextSlide = carouselImages[nextCarouselIndex];

  replaceClasses(currentSlide, "carousel-img carousel-hidden");
  replaceClasses(nextSlide, "carousel-img carousel-shown");

  currentCarouselIndex = nextCarouselIndex;
}

function nextCarouselImg() {
  const currentSlide = carouselImages[currentCarouselIndex];

  const nextCarouselIndex = (currentCarouselIndex + 1) % numberOfCarouselImgs;
  const nextSlide = carouselImages[nextCarouselIndex];

  replaceClasses(currentSlide, "carousel-img carousel-hidden");
  replaceClasses(nextSlide, "carousel-img carousel-shown");

  currentCarouselIndex = nextCarouselIndex;
}
