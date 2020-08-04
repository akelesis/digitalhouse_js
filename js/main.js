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
let imagensCarrossel = [
    "url('images/carousel/celebration.png')", "url('images/carousel/bicycles.png')", 
    "url('images/carousel/special-delivery.jpg')"
];

let quant = imagensCarrossel.length - 1;
let indInterval = 0; /* Esse índice é usado no setInterval */

setInterval(function() {
    if (indInterval == quant) indInterval = 0;
    else indInterval++;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[indInterval];
}, 1500);

let btnNext = document.querySelector("#carousel_button_next");
let btnPrev = document.querySelector("#carousel_button_prev");

/* Esse trecho refere-se aos botões do Carrossel */
let ind = 0; /* Esse índice é usado nos botões */
btnNext.addEventListener("click", function(){
    if (indInterval == quant) indInterval = 0;
    else indInterval++;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[indInterval];
});

btnPrev.addEventListener("click", function(){
    if (indInterval == 0) indInterval = quant;
    else indInterval--;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[indInterval];
});
/* Seção de pesquisa */

let livros = [
    livro01 = {titulo: "A Revolta de Atlas", categoria: "Distopia", preco: 60.0, capa: "images/books/atlas.jpg"},
    livro02 = {titulo: "A Menina que Roubava Livros", categoria: "Ficção Histórica", preco: 45.0, capa: "images/books/thief.jpg"},
    livro03 = {titulo: "Toda Luz que Não Podemos Ver", categoria: "Ficção Histórica", preco: 40.0, capa: "images/books/luz.jpg"},
    livro04 = {titulo: "O Iluminado", categoria: "Terror", preco: 50.0, capa: "images/books/iluminado.jpg"},
    livro05 = {titulo: "Mr. Mercedes", categoria: "Suspense", preco: 35.0, capa: "images/books/mr_mercedes.jpg"},
    livro06 = {titulo: "Breve História de Quase Tudo", categoria: "Divulgação Científica", preco: 45.0, capa: "images/books/breve.jpg"} /*,
    livro07 = {titulo: "Carrie, a Estranha", categoria: "Terror", preco: 25.0, capa: "images/books/carrie.jpg"}*/
];

let cards = document.querySelectorAll(".card img");
let btnPesquisa = document.getElementById("search_button");

/* Esses arrays serão utilizados para reorganizar os cards */
let newCards = [];
let aux = [];

/* Variáveis utilizadas para trabalhar com índices */
let i = 0;
let j = 0;

/* Filtragem por título */
btnPesquisa.addEventListener("click", function(){
    let tituloPesquisa = document.getElementById("search_bar").value;

    /* Esse array vai armazenar os livros na nova ordem a ser usada após a pesquisa */        
    newCards = livros.filter(livro => livro.titulo == tituloPesquisa);
    aux = livros.filter(livro => livro.titulo != tituloPesquisa);

    j = 0; /* Essa variável deve sempre ser resetada */
    /* O array newCards recebe os elementos do array aux */
    for (i = newCards.length; i < livros.length; i++){
        newCards[i] = aux[j];
        j = j + 1;
    }
    console.log(newCards);
    for (i = 0; i < cards.length; i++) {
        cards[i].src = newCards[i].capa;
    }
});

/* Filtragem por categoria */
let selectCategoria = document.getElementById("category");
let categoriaSelecionada = "";

selectCategoria.addEventListener("change", function(){
    categoriaSelecionada = selectCategoria.value;
    console.log(categoriaSelecionada);
    newCards = livros.filter(livro => livro.categoria == categoriaSelecionada);
    aux = livros.filter(livro => livro.categoria != categoriaSelecionada);
    
    j = 0;
    for (i = newCards.length; i < livros.length; i++){
        newCards[i] = aux[j];
        j = j + 1;
    }
    console.log(newCards);
    for (i = 0; i < cards.length; i++) {
        cards[i].src = newCards[i].capa;
    }
});

/* Filtragem por preço */
let selectFaixaDePreco = document.getElementById("price_range");
let faixaSelecionada = "";

/* Essa variável serve para classificar o preço do livro em barato, caro etc. */
let valorLivro = "";

selectFaixaDePreco.addEventListener("change", function(){
    faixaSelecionada = selectFaixaDePreco.value;
    console.log(faixaSelecionada);
    newCards = livros.filter(function(livro){
        if (livro.preco >= 1 && livro.preco <= 20){
            valorLivro = "barato";
        }
        else if (livro.preco >= 21 && livro.preco <= 40){
            valorLivro = "medio";
        }
        else if (livro.preco >= 41 && livro.preco <= 60){
            valorLivro = "caro";
        }
        else valorLivro = "mais caro";

        return valorLivro == faixaSelecionada;
    });
    aux = livros.filter(function(livro){
        if (livro.preco >= 1 && livro.preco <= 20){
            valorLivro = "barato";
        }
        else if (livro.preco >= 21 && livro.preco <= 40){
            valorLivro = "medio";
        }
        else if (livro.preco >= 41 && livro.preco <= 60){
            valorLivro = "caro";
        }
        else valorLivro = "mais caro";

        return valorLivro != faixaSelecionada;
    });
    
    j = 0;
    for (i = newCards.length; i < livros.length; i++){
        newCards[i] = aux[j];
        j = j + 1;
    }
    console.log(newCards);
    for (i = 0; i < cards.length; i++) {
        cards[i].src = newCards[i].capa;
    }
});

/* Seção de cards de livros */

livros.forEach(function(item, index) {
    cards[index].src = livros[index].capa;
});