//CAROUSEL

const carousel = document.getElementById('carousel_item');

function slide1(){
carousel.src="./img/banner1.jpg";
setTimeout("slide2()", 3000);
}

function slide2(){
carousel.src="./img/banner2.jpg";
setTimeout("slide3()", 3000);
}

function slide3(){
carousel.src="./img/banner3.jpg";
setTimeout("slide1()", 3000);
}

//CARDS
const infoLivro = document.querySelectorAll(".overlay");
const cardLivro = document.querySelectorAll(".card");

for(let i = 0; i < cardLivro.length; i++){
cardLivro[i].addEventListener("mouseover",()=>{    
        infoLivro[i].style.display="flex";    
});

cardLivro[i].addEventListener("mouseout",()=>{    
    infoLivro[i].style.display="none";    
});

}