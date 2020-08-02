//Aplicando evento ao clicar no botão do menu, para que ele apareça na lateral da tela
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

//Inserindo livros
const galeriaLivros = document.querySelectorAll(".cards")
const imagensLivros = document.querySelectorAll(".imagemLivro")
const tituloLivro = document.querySelectorAll(".tituloLivro")

//Livro1
const livro1 = imagensLivros[0]
tituloLivro[0].textContent = "A menina que não sabia ler"

livro1.src = "img/a-menina-que-nao-sabia-ler.jpg"

//Livro2
const livro2 = imagensLivros[1]
tituloLivro[1].textContent = "O caderno de Maya"
livro2.src = "img/o-caderno-de-maya.jpg"

//Livro3
const livro3 = imagensLivros[2]
tituloLivro[2].textContent = "Capitães da Areia"
livro3.src = "img/capitaes-da-areia.jpg"

//Livro4
const livro4 = imagensLivros[3]
tituloLivro[3].textContent = "A fábrica da violência"
livro4.src = "img/fabrica-de-violencia.jpg"

//Livro5
const livro5 = imagensLivros[4]
tituloLivro[4].textContent = "A droga da obediência"
livro5.src = "img/droga-da-obediencia.jpg"

//Livro6
const livro6 = imagensLivros[5]
tituloLivro[5].textContent = "A hospedeira"
livro6.src = "img/a-hospedeira.jpg"

