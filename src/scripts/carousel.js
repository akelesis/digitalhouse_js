const imageList = document.querySelector('#dh_carousel .image-list');

const previousButton = document.querySelector('#dh_carousel .prev');

const nextButton = document.querySelector('#dh_carousel .next');

const images = (index) => imageList.children.item(index);

let activeIndex = 0;

const nextImage = () => {
    const lastImage = (activeIndex == 2);

    const activeImage = images(activeIndex);

    const nextIndex = lastImage ? 0 : activeIndex + 1;

    const nextImage = images(nextIndex);

    nextImage.className = 'active';

    activeImage.className = '';

    activeIndex = lastImage ? 0 : activeIndex + 1;
}

const previousImage = () => {
    const firstImage = (activeIndex == 0);

    const activeImage = images(activeIndex);

    const previousIndex = firstImage ? 2 : activeIndex - 1;

    const previousImage = images(previousIndex);

    previousImage.className = 'active';

    activeImage.className = '';

    activeIndex = firstImage ? 2 : activeIndex - 1;
}

let autoNext;

const startAutoNext = () => autoNext = setInterval(nextImage, 6000);

const resetAutoNext = () => {
    clearInterval(autoNext);
    startAutoNext();
}

startAutoNext();

previousButton.addEventListener('click', () => {
    previousImage();
    resetAutoNext();
});

nextButton.addEventListener('click', () =>{
    nextImage();
    resetAutoNext();
});
