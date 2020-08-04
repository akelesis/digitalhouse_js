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

setInterval(function() {
    if (ind == quant) ind = 0;
    else ind++;
    document.getElementById("dh_carousel").style.backgroundImage = imagensCarrossel[ind];
}, 1500);

/* Seção de pesquisa */

let livros = [
    livro01 = {titulo: "A Revolta de Atlas", categoria: "Distopia", preco: 60.0, capa: "images/books/atlas.jpg"},
    livro02 = {titulo: "A Menina que Roubava Livros", categoria: "Ficção histórica", preco: 45.0, capa: "images/books/thief.jpg"},
    livro03 = {titulo: "Toda Luz que Não Podemos Ver", categoria: "Ficção histórica", preco: 40.0, capa: "images/books/luz.jpg"},
    livro04 = {titulo: "O Iluminado", categoria: "Terror", preco: 50.0, capa: "images/books/iluminado.jpg"},
    livro05 = {titulo: "Mr. Mercedes", categoria: "Suspense", preco: 35.0, capa: "images/books/mr_mercedes.jpg"},
    livro06 = {titulo: "Breve História de Quase Tudo", categoria: "Divulgação científica", preco: 45.0, capa: "images/books/breve.jpg"} /*,
    livro07 = {titulo: "Carrie, a Estranha", categoria: "Terror", preco: 25.0, capa: "images/books/carrie.jpg"}*/
];

let cards = document.querySelectorAll(".card img");
let btnPesquisa = document.getElementById("search_button");

/* Esse eventListener realiza todo o processo de filtragem */
btnPesquisa.addEventListener("click", function(){
    let tituloPesquisa = document.getElementById("search_bar").value;
    let categoriaSelecionada = document.getElementById("category").value;
    let faixaPreco = document.getElementById("price_range").value;

    let tiposDePesquisa = [faixaPreco, categoriaSelecionada, tituloPesquisa];

    /* Esse array vai armazenar os livros na nova ordem a ser usada após a pesquisa */
    let newCards = livros;
    let aux1 = [];
    let aux2 = [];

    let i = 0;
    let filtro = "";
    for (i = 0; i < tiposDePesquisa.length; i++){
        filtro = tiposDePesquisa[i];

        /* Filtragem por preço 
        if (filtro == categoriaSelecionada && filtro != ""){
            aux1 = newCards;
            newCards = newCards.filter(livro => livro.preco == faixaPreco);
            aux2 = aux1.filter(livro => livro.preco != faixaPreco);

            for (i = newCards.length; i < livros.length; i++){
                newCards[i] = aux2[i-1];
            }
        }
        */
        /* Filtragem por categoria */
        if (filtro == categoriaSelecionada && filtro != ""){
            aux1 = newCards;
            newCards = newCards.filter(livro => livro.categoria == categoriaSelecionada);
            aux2 = aux1.filter(livro => livro.categoria != categoriaSelecionada);

            for (i = newCards.length; i < livros.length; i++){
                newCards[i] = aux2[i-1];
            }
        }
        /* Filtragem por título */
        else if (filtro == tituloPesquisa && filtro != ""){
            aux1 = newCards;
            newCards = newCards.filter(livro => livro.titulo == tituloPesquisa);
            aux2 = aux1.filter(livro => livro.titulo != tituloPesquisa);

            /* O array newCards recebe os elementos do array aux */
            for (i = newCards.length; i < livros.length; i++){
                newCards[i] = aux2[i-1];
            }
        }
        else console.log("Opção inválida");
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