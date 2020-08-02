const carouselImages = document.querySelector('.carousel_images');
const carouselButtons = document.querySelectorAll('.carousel_button');
const nmbrImages =  document.querySelectorAll('.carousel_images img').length;

//Initializing Variables
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener("click", event => {
        //Getting Image Width Value for Translation
        let imageWidth = getComputedStyle(carouselImages).width.split("px");
        let imageWidthValue = parseInt(imageWidth[0]);

        if (event.target.id === "previous") {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += imageWidthValue;
            } else {
                imageIndex = nmbrImages;
                translateX -= imageWidthValue * (nmbrImages - 1);
            }
        } else {
            if (imageIndex !== nmbrImages) {
                imageIndex++;
                translateX -= imageWidthValue;
            } else {
                imageIndex = 1;
                translateX = 0;
            }
        }

        carouselImages.style.transform = "translateX(" + translateX + "px)";
    })
});