const btnMenu = document.getElementById("dh_menu_btn")
const menuIcon = document.getElementById("menu-icon")
const filterCategory = document.getElementById("category")
const filterPrice = document.getElementById("price_range")
const seachLivro = document.getElementById("search_bar")
const btnSearch = document.getElementById("search_button")
const banners = document.getElementById("banners")
const menuItems = document.querySelector('.menu-items')
const conteinerLivros = document.querySelector('.showcase')

let bgNumber = 0

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
        livrosImage.setAttribute("src", livros.img_url)

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
    if (bgNumber == allBanners.length) {
        bgNumber = 0
    }
    banners.style.backgroundImage = `url('${allBanners[bgNumber].banner_url}')`
    bgNumber++
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
        return value.name.toLowerCase().indexOf(seachLivro.value.toLowerCase()) >= 0
    })

    carregaLivros(newList)
}

btnMenu.addEventListener("click", mostraMenu)
filterCategory.addEventListener("input", filtraCategoria)
filterPrice.addEventListener("input", filtraPreco)
btnSearch.addEventListener("click", procuraLivro)
window.addEventListener("load", carregaLivros)

window.addEventListener("load", sliderBanner)
setInterval(sliderBanner, 5000)



