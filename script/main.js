//Aplicando evento para menu lateral
const body = document.querySelector("body");
const navbar = document.getElementById("menu");
let menuBTN = document.getElementById("dh_menu_btn");
let iconBTN = document.getElementById("iconBTN");

menuBTN.addEventListener("click", function () {
    if (navbar.style.display == "none"){
        navbar.style.display = "block";
        iconBTN.classList.remove("fa-bars");
        iconBTN.classList.add("fa-window-close");
    } else {
        navbar.style.display = "none";
        iconBTN.classList.add("fa-bars");
        iconBTN.classList.remove("fa-window-close");
    }
})

//Carrossel
//Encontrando no html
const imagensCarroussel = document.querySelectorAll(".imagensCaroussel");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");


/*mostra cada imagem uma só vez com um intervalo entre elas, 
responsavel por baixar a primeira imagem do carrossel e termina com ultima imagem da lista
***AJUSTAR: Problema se o usuário apertar os botões enquanto ele estiver funcionando*/
function carrossel () {
for (let i = 0; i <= imagensCarroussel.length-1; i++){
    (function (i) {
        setTimeout(function () {
            if (i > 0){
                imagensCarroussel[i-1].classList.remove("imagensCaroussel-active");
                }
                imagensCarroussel[i].classList.add("imagensCaroussel-active");
        }, 2000*i);
      })(i);
}
} carrossel()

//Se não houver o loop inicial das imagens, é preciso carregar a primeira imagem
// imagens[0].classList.add("imagensCaroussel-active");


let imagemAtual = document.querySelectorAll(".imagensCaroussel-active") != null; 
//identifica imagem que está aparecendo na tela

//Botões do carrossel
btnProximo.addEventListener("click", function () {
    let imagemAtual = document.querySelector(".imagensCaroussel-active")
    for (let i = 0; i < imagensCarroussel.length; i++){
        if (imagensCarroussel[i] == imagemAtual){
            if (i == 3){
                imagensCarroussel[3].classList.remove("imagensCaroussel-active");
                imagensCarroussel[0].classList.add("imagensCaroussel-active");
            } else {
                imagensCarroussel[i].classList.remove("imagensCaroussel-active");
                imagensCarroussel[i+1].classList.add("imagensCaroussel-active");
            }
        }
    }
})

btnAnterior.addEventListener("click", function () {
    let imagemAtual = document.querySelector(".imagensCaroussel-active")
    for (let i = 0; i < imagensCarroussel.length; i++){
        if (imagensCarroussel[i] == imagemAtual){
            if (i == 0){
                imagensCarroussel[0].classList.remove("imagensCaroussel-active");
                imagensCarroussel[3].classList.add("imagensCaroussel-active");
            } else {
                imagensCarroussel[i].classList.remove("imagensCaroussel-active");
                imagensCarroussel[i-1].classList.add("imagensCaroussel-active");
            }
        }
    }
})

//Definindo genero 
let genero = [];
const generos = document.getElementById("category")
for (let i = 1; i < generos.length; i++){
    genero.push(generos[i].value)
}

console.log(genero)

//Definindo os precos
let faixaDePreco = [];
const precos = document.getElementById("price_range");
for (let i = 1; i < precos.length; i++){
    faixaDePreco.push(precos.options[i].value)
}

//Inserindo livros
const galeriaLivros = document.querySelectorAll(".card")
const imagensLivros = document.querySelectorAll(".imagemLivro")
const tituloLivro = document.querySelectorAll(".tituloLivro")

const livros = [
    {
        titulo: 'A menina que não sabia ler',
        imagem: "img/a-menina-que-nao-sabia-ler.jpg",
        preco: faixaDePreco[0],
        genero: genero[2]
    },
    {
        titulo: 'O caderno de Maya',
        imagem: "img/o-caderno-de-maya.jpg",
        preco: faixaDePreco[3],
        genero: genero[2]
    }, 
    {
        titulo: "Capitães da Areia",
        imagem: "img/capitaes-da-areia.jpg",
        preco: faixaDePreco[1],
        genero: genero[3]
    },    
    {
        titulo: "A fábrica da violência",
        imagem: "img/fabrica-de-violencia.jpg",
        preco: faixaDePreco[2],
        genero: genero[0]
    },    
    {
        titulo: "A droga da obediência",
        imagem: "img/droga-da-obediencia.jpg",
        preco: faixaDePreco[1],
        genero: genero[0]
    },    
    {
        titulo: "A hospedeira",
        imagem: "img/a-hospedeira.jpg",
        preco: faixaDePreco[0],
        genero: genero[1]
    }
]

livros.forEach(livro => {
    let indice = livros.indexOf(livro)
    tituloLivro[indice].textContent = livro.titulo;
    imagensLivros[indice].src = livro.imagem;
    //inserir preco
    //inserir genero
})

console.log(livros)