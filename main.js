const btnMenu = document.getElementById("dh_menu_btn")
const menuIcon = document.getElementById("menu-icon")
const filterCategory = document.getElementById("category")
const filterPrice = document.getElementById("price_range")
const seachLivro = document.getElementById("search_bar")
const btnSearch = document.getElementById("search_button")
const menuItems = document.querySelector('.menu-items')
const conteinerLivros = document.querySelector('.showcase')
const banners = document.querySelectorAll('.banners')


let len = 0

const listaLivros = [
    {
        name: "Matilda",
        author: "Roald Dahl",
        category: "Infantil",
        price: 39.50,
        img: "./img/livro1.jpg",
        description: "Matilda is a sweet, exceptional young girl, but her parents think she's just a nuisance. She expects school to be different but there she has to face Miss Trunchbull, a kid-hating terror of a headmistress. When Matilda is attacked by the Trunchbull she suddenly discovers she has a remarkable power with which to fight back. It'll take a superhuman genius to give Miss Trunchbull what she deserves and Matilda may be just the one to do it!"
    },
    {
        name: "A Pedra Mágica",
        author: "Marco Barella",
        category: "Fantasia",
        price: 30.50,
        img: "./img/livro2.jpg",
        description: "Um Italiano e seu cão irão achar na mata uma pedra diferente que irá transformar as vidas deles. Com ela farão milagres que as pessoas duvidarão, inclusive com a permissão de Deus, irão trazer pessoas de volta a vida...um jovem de família muito humilde ira estar presente firmemente na vida dos dois, assim como os pais do Italiano aparecerão várias vezes para se comunicar com ele, apesar de estarem já falecidos..."
    },
    {
        name: "Sense-Making",
        author: "Ron Immink",
        category: "Ficção Científica",
        price: 5.99,
        img: "./img/livro3.jpg",
        description: "‘Sense-making’ is not about making sense about the exponential development in technology, as that is now a given, but about the impact and implications of technology on business and humanity. Here are the books: The Fourth Age: A book about how humanity has evolved and progressed - with some warnings, but with a very optimistic perspective on humankind;"
    },
    {
        name: "The Goldwork Masterclass",
        author: "Alison Cole",
        category: "Tecnico",
        price: 15.99,
        img: "./img/livro4.png",
        description: "This book has been written for all who love the joys of Goldwork. The opulence of metal thread embroidery has been associated with royalty, church and military regalia for centuries and now is readily available for all embroiderers to enjoy. "
    },
    {
        name: "A Revolução dos Bichos",
        author: "George Orwell",
        category: "Fantasia",
        price: 23.90,
        img: "./img/livro5.jpeg",
        description: "Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos."
    },
    {
        name: "Senhor dos Anéis: As Duas Torres",
        author: "J R. R. Tolkien",
        category: "Fantasia",
        price: 23.90,
        img: "./img/livro6.jpg",
        description: "O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien."
    },
]

function carregaLivros(filterLivros) {

    let livrosConteiner
    let livrosImage
    let card

    const allLivros = (filterLivros.length == undefined) ? listaLivros : filterLivros

    if (filterLivros.length !== undefined) {
        const cardBox = document.querySelectorAll(".card")
        cardBox.forEach(value => {
            conteinerLivros.removeChild(value)
        })
    }

    allLivros.forEach(livros => {
        card = document.createElement("div")
        livrosConteiner = document.createElement("div")
        livrosImage = document.createElement("img")

        livrosConteiner.setAttribute("class", "overlay")
        card.setAttribute("class", "card")
        livrosImage.setAttribute("src", livros.img)

        livrosConteiner.innerHTML = `<h2>${livros.name}</h2> <h4>${livros.author}</h4> <p>${livros.description}</p> <p>Preço: ${livros.price.toFixed(2)}</p>`

        card.appendChild(livrosImage)
        card.appendChild(livrosConteiner)
        conteinerLivros.appendChild(card)
    })
}

const mostraMenu = () => {

    if (menuItems.className == "menu-items") {
        menuItems.className += " active"
        menuIcon.className = "fa fa-times"
    } else {
        menuIcon.className = "fas fa-bars"
        menuItems.className = "menu-items"
    }
}

const sliderBanner = () => {

    if (len > 0 || len == banners.length) {
        banners[len - 1].className = "banners"
    }

    if (len == banners.length) {
        len = 0
    }

    if (banners[len].className == "banners") {
        banners[len].className += " active-banner"
    } else {
        len++
        banners[len - 1].className = "banners"
        banners[len].className += " active-banner"
    }

    len++
}

function filtraCategoria() {
    let newList

    if (filterCategory.value == "Todos") {
        newList = listaLivros
    } else {
        newList = listaLivros.filter(livros => {
            return livros.category == filterCategory.value
        })
    }

    carregaLivros(newList)
}

function filtraPreco() {
    let newList
    let min, max

    if (filterPrice.value == "Todos") {
        newList = listaLivros
    } else {
        switch (filterPrice.value) {
            case 'barato':
                min = 1
                max = 20
                break;
            case 'medio':
                min = 21
                max = 40
                break;
            case 'caro':
                min = 41
                max = 60
                break;
            case 'mais caro':
                min = 61
                max = 99999
                break;
            default:
                break;
        }
        newList = listaLivros.filter(livros => {
            return livros.price >= min && livros.price <= max
        })
    }
    carregaLivros(newList)
}

function procuraLivro() {

    const newList = listaLivros.filter(value => {
        return value.name.indexOf(seachLivro.value) >= 0
    })

    carregaLivros(newList)
}

btnMenu.addEventListener("click", mostraMenu)
filterCategory.addEventListener("input", filtraCategoria)
filterPrice.addEventListener("input", filtraPreco)
btnSearch.addEventListener("click", procuraLivro)
window.addEventListener("load", carregaLivros)

setInterval(sliderBanner, 3500)



