const dhCarrousel = document.getElementById("dh_carousel");
const crNext = document.getElementById("cr_next");
const crPrevious = document.getElementById("cr_previous");
const dhMenuBtn = document.getElementById("dh_menu_btn");
const dhMenuNavegacao = document.querySelector(".menu");

var menuNavegacao = false;

crPrevious.onclick = carrouselPrevious;
crNext.onclick = carrouselNext;
dhMenuBtn.onclick = menuSidebar;

function carrouselPrevious(){
    dhCarrousel.style.backgroundImage = "url(./img/c1.jpg)";
}

function carrouselNext(){
    dhCarrousel.style.backgroundImage = "url(./img/c2.jpg)";
}

function menuSidebar(){
    if(menuNavegacao == false){
        dhMenuNavegacao.style.visibility = "visible";
        menuNavegacao = true;
    }else{
        dhMenuNavegacao.style.visibility = "hidden";
        menuNavegacao = false
    }

}
