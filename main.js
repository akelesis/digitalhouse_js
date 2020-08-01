const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');
const carouselSection = document.querySelector('section#dh_carousel');
const carouselImg = document.querySelector('img#dh_carousel_img')
const carouselImgSources = ["./img/300x400.png", "./img/300x400.png", "./img/300x400.png"];
let carouselControl = 0;

function showMenu(){

    if(menuSection.getAttribute('active') === 'true'){
        
        return menuSection.setAttribute('active', 'false');
    }

    return menuSection.setAttribute('active', 'true');
}

function setCarrosselImg(){

    if(carouselControl === carouselImgSources.length){

        carouselControl = 0;
    }

    carouselImg.setAttribute('src', carouselImgSources[carouselControl]);

    carouselControl++;
}


const carousel = setInterval(setCarrosselImg, 3000);

menuButton.addEventListener('click', showMenu);