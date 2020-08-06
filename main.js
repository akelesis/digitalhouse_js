function showCarousel(n) {
  let i;
  const slides = document.querySelectorAll(".carousel_item");
  
  if (n > slides.length) {
    index = 1;
  }

  if (n < 1) {
    index = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index-1].style.display = "flex"
}

function changeSlide(n) {
  showCarousel(index += n);
}

let index = 1
const next = document.querySelector(".carousel_next");
const prev = document.querySelector(".carousel_prev");
let n

showCarousel(index);

next.onclick = function () {
  n = 1;
  changeSlide(n);
}

prev.onclick = function () {
  n = -1;
  changeSlide(n)
}