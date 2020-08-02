/* Menu lateral */

let menu = document.querySelector("#dh_menu_btn");

menu.addEventListener("click", function() {
    document.querySelector(".bookshop_header").innerHTML = "";
});

/* Esse trecho de código refere-se unicamente ao carrossel */

let btnNext = document.querySelector("#carousel_button_next");
let btnPrev = document.querySelector("#carousel_button_prev");
let imagens = [
    "url('images/carousel/celebration.png')", "url('images/carousel/bicycles.png')", 
    "url('images/carousel/special-delivery.jpg')"
];

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

/* Seção de pesquisa por nome */

/* Seção de livros */

let livros = {
    livro1: {titulo: "A Revolta de Atlas", categoria: "Distopia", preco: 60.0},
    livro2: {titulo: "A Menina que Roubava Livros", categoria: "Ficção histórica", preco: 45.0},
    livro3: {titulo: "Toda Luz que Não Podemos Ver", categoria: "Ficção histórica", preco: 40.0},
    livro4: {titulo: "O Iluminado", categoria: "Terror", preco: 50.0},
    livro5: {titulo: "Mr. Mercedes", categoria: "Suspense", preco: 35.0},
    livro6: {titulo: "Breve História de Quase Tudo", categoria: "Divulgação científica", preco: 45.0},
    livro7: {titulo: "Carrie, a Estranha", categoria: "Terror", preco: 25.0}
};

let backgroundLivros = [
    "url('images/books/atlas')", "url('images/books/thief.jpg')", "url('images/books/luz.jpg')", 
    "url('images/books/iluminado.jpg')", "url('mr_mercedes.jpg')", "url('images/books/breve.jpg')", 
    "url('images/books/carrie.jpg')"
];

let cards = document.querySelector(".card");

backgroundLivros.forEach(function(item, index) {
    document.querySelector(".card").style.backgroundImage = item;
});