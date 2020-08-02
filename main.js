// Add event in the dh_menu_btn
document.querySelector("#dh_menu_btn").addEventListener("click", expandirMenuLateral);

let navbar = document.querySelector(".dh_menu_lateral");
let body = document.querySelector("#body");
let img = document.querySelector("#carrosel_img");

//Carrosel
const img_carrousel = ['./img/carrousel_1.jpg', './img/carrousel_2.jpg', './img/carrousel_3.jpg'];

let contador = 1;
function carrosel(){
    setInterval(function(){
        img.setAttribute("src", img_carrousel[contador]);
        contador < img_carrousel.length - 1 ? contador++ :contador = 0;
    }, 10000)
}
carrosel();
//

// start expanded menu
function expandirMenuLateral(){
    let expandedMore = 25 + '%';
    let expandedLess = 0 + '%';

    if (navbar.style.width == 0 || navbar.style.width == 0 + '%'){
        body.style.marginRight = expandedMore;
        navbar.style.width = expandedMore;

        body.style.transition = 0.2+'s';
        navbar.style.transition = 0.2+'s';

    } else {
        body.style.marginRight = expandedLess;
        navbar.style.width = expandedLess;
    }
}
// end expanded menu