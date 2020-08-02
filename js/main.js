/* Menu lateral */

let menu = document.querySelector("#dh_menu_btn");

menu.addEventListener("click", function() {
    document.querySelector(".bookshop_header").innerHTML = "<form>Formulário</form>";
});

/* Esse trecho de código refere-se unicamente ao carrossel */

let btnNext = document.querySelector("#carousel_button_next");
let btnPrev = document.querySelector("#carousel_button_prev");
let imagens = ["url('images/celebration.png')", "url('images/bicycles.png')", 
"url('images/special-delivery.jpg')"];

let quant = imagens.length - 1;
let ind = 0;

btnPrev.addEventListener("click", () => {
    if (ind == 0) ind = quant;
    else ind--;
    document.getElementById("dh_carousel").style.backgroundImage = imagens[ind];
});

btnNext.addEventListener("click", () => {
    if (ind == quant) ind = 0;
    else ind++;
    document.getElementById("dh_carousel").style.backgroundImage = imagens[ind];
});

