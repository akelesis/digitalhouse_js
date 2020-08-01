// carousel
// promos object array
const promos = [
  { id: "1", title: "Promo 1", promo_banner: "img/banner_test.png" },
  { id: "2", title: "Promo 2", promo_banner: "img/300x400.png" },
  { id: "3", title: "Promo 3", promo_banner: "img/banner_test.png" },
];

const carouselContainer = document.querySelector(".carousel-container");
const carouselControlsContainer = document.querySelector(
  ".carousel-controls-container"
);

for (const { id, title, promo_banner: banner } of promos) {
  const carouselItem = document.createElement("div");
  const carouselItemTitle = document.createElement("h2");
  const carouselNavBtn = document.createElement("a");

  carouselItem.className = "carousel-item animated";
  carouselItem.id = id;
  carouselItem.style.backgroundImage = `url(${banner})`;
  carouselItemTitle.textContent = title;

  carouselNavBtn.href = `#${id}`;
  carouselNavBtn.className = "carousel-control-btn";
  carouselNavBtn.textContent = "•";

  carouselItem.appendChild(carouselItemTitle);
  carouselContainer.appendChild(carouselItem);

  carouselControlsContainer.appendChild(carouselNavBtn);
}
