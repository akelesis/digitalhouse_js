// livros inicio

const livros = [
    {
        titulo: "Eloquent JavaScript",
        autor: "Marijin Haverbeke",
        preço:"caro",
        imagem: "img/eloquent_js.jpg",
        categoria: "Programação"
    },
    {
        titulo: "Armadilha da identidade",
        autor: "Asad Haider",
        preço:"medio",
        imagem: "img/armadilha.jpg",
        categoria: "Discriminação e Racismo Política e Ciências Sociais"
    },
    {
        titulo: "Pequeno manual antirracista",
        autor: "Djamila Ribeiro",
        preço:"barato",
        imagem: "img/manual.jpg",
        categoria: "Discriminação e Racismo Política e Ciências Sociais"
    },
    {
        titulo: "Cinqüenta Dias a Bordo de Um Navio Negreiro",
        autor: "Pascoe Grefen Hill",
        preço:"caro",
        imagem: "img/50_dias.jpg",
        categoria: "História"
    },
    {
        titulo: "O Genocídio do negro brasileiro: Processo de um racismo mascarado",
        autor: "Abdias Nascimento",
        preço:"medio",
        imagem: "img/genocidio_negro.jpg",
        categoria: "Discriminação e Racismo Política e Ciências Sociais"
    },
    {
        titulo: "Olhos D'Agua",
        autor: "Conceição Evaristo",
        preço:"medio",
        imagem: "img/olhos_dagua.jpg",
        categoria: "Teoria e crítica literária"
    },
]

// livros fim

// sidebar inicio
const buttonMenu = document.getElementById("dh_menu_btn")
const buttonCloseMenu = document.getElementById("dh_close_menu_btn")
buttonMenu.addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("selected")
})

buttonCloseMenu.addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("selected")
})
// sidebar fim


// showcase inicio
let showcase = document.querySelector(".showcase")
let carousel_slide = document.querySelector(".carousel_slide")


livros.forEach( livro => {
showcase.innerHTML +=
    `<div class="card" name="${livro.titulo}" categoria="${livro.categoria}" valor="${livro.preço}">
    <img src="${livro.imagem}">
    <div class="overlay">
    <h2>${livro.titulo}</h2>
    </div>
    </div>`
    if(livro.titulo == "Eloquent JavaScript") {
        carousel_slide.innerHTML += 
        `<div class="item active">
        <img src="${livro.imagem}">
        <div class="caption">${livro.titulo}</div>
        </div>`
    } else {
        carousel_slide.innerHTML += 
        `<div class="item">
        <img src="${livro.imagem}">
        <div class="caption">${livro.titulo}</div>
        </div>`
    }
})
// showcase fim

// carousel inicio
const slides = document.querySelector(".carousel_slide").children
const nextSlide = document.querySelector(".right-slide")
const prevSlide = document.querySelector(".left-slide")
const totalSlides = slides.length
let index = 0


nextSlide.onclick = () => next("next")
prevSlide.onclick = () => next("prev")

function next(direction) {
    if(direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index --;            
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
// carousel fim


const btnBusca = document.getElementById("search_button")
const barraDePesquisa = document.getElementById("search_bar")

const generos = document.getElementById("category")
const precos = document.getElementById("price_range")


btnBusca.onclick = function teste(){
    const cards = document.querySelectorAll(".card")
    let nomePesquisa = barraDePesquisa.value
    let categoriaPesquisa = generos.value
    let valorPesquisa = precos.value

    for(card in cards) {
        let nome = cards[card].getAttribute("name")
        let categoria = cards[card].getAttribute("categoria")
        let valor = cards[card].getAttribute("valor")
        if (nome == nomePesquisa || categoria == categoriaPesquisa || valor == valorPesquisa) {
            cards[card].removeAttribute("style")
        } else {
            cards[card].style.display = "none"
        }
    }

}