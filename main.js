const dhCarrousel = document.getElementById("dh_carousel");
const crNext = document.getElementById("cr_next");
const crPrevious = document.getElementById("cr_previous");

crPrevious.onclick = carrouselPrevious;
crNext.onclick = carrouselNext;

function carrouselPrevious(){
    dhCarrousel.style.backgroundImage = "url(./img/c1.jpg)";
}

function carrouselNext(){
    dhCarrousel.style.backgroundImage = "url(./img/c2.jpg)";
}
