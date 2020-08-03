/* Menu lateral */

let btn = document.getElementById("dh_menu_btn");

btn.addEventListener("click", function(event){
    if (document.getElementById("options").style.display == "none"){
        document.getElementById("options").style.display = "flex";
        document.getElementById("menu").style.minWidth = "250px";
    }
    else {
        document.getElementById("options").style.display = "none";
        document.getElementById("menu").style.minWidth = "0";
    }
});





/* Carrossel */

let btnNext = document.querySelector("#carousel_button_next");
let btnPrev = document.querySelector("#carousel_button_prev");
let imagensCarrossel = [
    "url('images/carousel/celebration.png')", "url('images/carousel/bicycles.png')", 
    "url('images/carousel/special-delivery.jpg')"
];

let quant = imagensCarrossel.length - 1;
let ind = 0;

btnPrev.addEventListener("click", () => {
    if (ind == 0) ind = quant;
    else ind--;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[ind];
});

btnNext.addEventListener("click", () => {
    if (ind == quant) ind = 0;
    else ind++;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[ind];
});

/*
 * 
 *
 * 
 * 
 * 
 * 
 */

/* Seção de pesquisa por nome */

/* O array livros é usado em outros lugares também */
let livros = [
    livro01 = {titulo: "A Revolta de Atlas", categoria: "Distopia", preco: 60.0},
    livro02 = {titulo: "A Menina que Roubava Livros", categoria: "Ficção histórica", preco: 45.0},
    livro03 = {titulo: "Toda Luz que Não Podemos Ver", categoria: "Ficção histórica", preco: 40.0},
    livro04 = {titulo: "O Iluminado", categoria: "Terror", preco: 50.0},
    livro05 = {titulo: "Mr. Mercedes", categoria: "Suspense", preco: 35.0},
    livro06 = {titulo: "Breve História de Quase Tudo", categoria: "Divulgação científica", preco: 45.0} /*,
    livro01 = {titulo: "Carrie, a Estranha", categoria: "Terror", preco: 25.0}*/
];

/* O array capasLivros é usado em outros lugares também */
let capasLivros = [
    "images/books/atlas.jpg", "images/books/thief.jpg", "images/books/luz.jpg", 
    "images/books/iluminado.jpg", "images/books/mr_mercedes.jpg", "images/books/breve.jpg"/*, 
    "images/books/carrie.jpg"*/
];

/* O array cards é usado em outros lugares também */
let cards = document.querySelectorAll(".card img");

let btnPesquisa = document.getElementById("search_button");

btnPesquisa.addEventListener("click", function(){
    let tituloPesquisa = document.getElementById("search_bar").value;
    /* Procura o título no array de livros e devolve um índice, caso encontre*/
    let indCapasLivros = function(){
        let pos = 0;
        while ((livros[pos].titulo != tituloPesquisa) && (pos < livros.length)){
            pos = pos + 1;
        }
        if ((pos < livros.length) && (livros[pos].titulo == tituloPesquisa)) return pos;
        else return -1;
    };
    let x = indCapasLivros();

    /* Se x for menor que 0, significa que o título pesquisado não foi encontrado */
    if (x > 0){
        for (let i = 0; i < cards.length; i++) {
            cards[i].src = "images/300x400.png"; /* Todos os cards (exceto o primeiro) ficam com a imagem padrão */
        }
        /* Apenas o primeiro card fica com uma imagem diferente (do array de capas de livros) */
        document.querySelector(".card img").src = capasLivros[x];
    }
    else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].src = capasLivros[i];
        }
    }
});

/*
 * 
 *
 * 
 * 
 * 
 * 
 */

/* Seção de pesquisa por categoria */

let categorias = [
    "Distopia", "Divulgação Científica", "Ficção Histórica", 
    "Suspense", "Terror"
];

function buscaPorCategoria(elemento){

}
/*
 * 
 *
 * 
 * 
 * 
 * 
 */

/* Seção de pesquisa por preço */

/*
 * 
 *
 * 
 * 
 * 
 * 
 */

/* Seção de cards de livros */

capasLivros.forEach(function(item, index) {
    cards[index].src = capasLivros[index];
});