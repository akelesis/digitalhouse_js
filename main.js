dh_menu_btn.onclick = function() {
    var div = document.getElementById('sidebar');
    div.style.display = 'block';
};

dh_closeMenu_btn.onclick = function() {
    var div = document.getElementById('sidebar');
    div.style.display = 'none';
};

const carouselImages = document.querySelector('.carousel_images');
const carouselBtn = document.querySelectorAll('.carousel_button');
const qtdImages =  document.querySelectorAll('.carousel_images img').length;


let imageIndex = 1;
let translateX = 0;

carouselBtn.forEach(button => {
    button.addEventListener("click", event => {
        let imageWidth = getComputedStyle(carouselImages).width.split("px");
        let imageWidthValue = parseInt(imageWidth[0]);

        if (event.target.id === "previous") {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += imageWidthValue;
            } else {
                imageIndex = qtdImages;
                translateX -= imageWidthValue * (qtdImages - 1);
            }
        } else {
            if (imageIndex !== qtdImages) {
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

