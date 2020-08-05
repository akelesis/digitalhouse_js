/**
 * Este arquivo contém as funções JavaScript que controlam o carrossel de
 * imagens, um menu lateral e os filtros para buscar livros por título,
 * categoria e faixa de preço.
 */

/**
 * Como não estamos acessando o servidor, criei um arquivo de livros para não
 * misturar com o código.
 */
let imported = document.createElement('script');
imported.src = 'books.js';
document.head.appendChild(imported);

/**
 * Ao carregar a página, carrega dinamicamente a imagem dos livros.
 */
window.addEventListener("load", function(){
    show_books(books);
});

/**
 * Array de imagens a serem exibidas no carrossel.
 */
const carousel_images = [
    "https://i.imgur.com/FUW7Zul.jpg", // fundo vermelho
    "https://i.imgur.com/cDOagcJ.jpg", // fundo laranja
    "https://i.imgur.com/J4FRxwA.jpg"  // fundo verde
];

/**
 * Constantes para categorias de livros e mensagens.
 */
const no_books_message = "Nenhum livro encontrado.";
const all_books_category = "all_books";
const autoajuda_category = "autoajuda";
const fantasia_category = "fantasia";
const ficcao_cientifica_category = "ficcao_cientifica";
const romance_category = "romance";

/**
 * Intervalo de tempo para atualizar a imagem exibida no carrossel.
 */
const interval = 5000;

/**
 * Remove todos os livros (cards) que são exibidos na section de classe 'show_case'.
 */
function remove_all_books() {
    const booksSection = document.querySelector('.showcase');   
    booksSection.querySelectorAll('*').forEach(element => {
        element.remove();
    }); 
    // booksSection.innerHTML = "";
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * F I L T R O S * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Função principal para filtrar livros por titulo, categoria ou preço.
 */ 
function books_filter() {
    remove_all_books();
    
    let filteredBooks = books;
    const searchedBookTitle = document.getElementById('search_bar').value;
    console.log(searchedBookTitle);
    if (searchedBookTitle !== undefined && searchedBookTitle.trim() !== "") {
        console.log("entrou");
        filteredBooks = filteredBooks.filter(book => {
            return book.title.toUpperCase().trim() === searchedBookTitle.toUpperCase().trim();
        })
    }
    //console.log(filteredBooks);
        
    const searchedBookCategory = document.getElementById('category').value;
    if (searchedBookCategory !== undefined && searchedBookCategory.trim() !== "") {
        filteredBooks = filteredBooks.filter(book => {
            return book.category.toUpperCase().trim() === searchedBookCategory.toUpperCase().trim();
        })
    }
    //console.log(filteredBooks);

    let searchedBookPriceRange = document.getElementById('price_range').value;
    if (searchedBookPriceRange !== undefined && searchedBookPriceRange.trim() !== "") {
        searchedBookPriceRange = searchedBookPriceRange.toLowerCase().trim();
        filteredBooks = filteredBooks.filter(book => {
            if (searchedBookPriceRange == "barato") {
                return book.price >= 1 && book.price <= 20;   
            }
            else if (searchedBookPriceRange === "medio") {
                return book.price >= 21 && book.price <= 40;   
            }
            else if (searchedBookPriceRange === "caro") {
                return book.price >= 41 && book.price <= 60;   
            }
            else if (searchedBookPriceRange === "mais caro") {
                return book.price >= 61;   
            }
        })
    }
    //console.log(filteredBooks);

    // Exibe os livros filtrados
    show_books(filteredBooks);
}

/**
 * Mostra os livros filtrados na página.
 * @param {*} filteredBooks Livros a serem exibidos no html. 
 */ 
function show_books(filteredBooks) {
    const booksSection = document.querySelector('.showcase');

    filteredBooks.forEach(book => {

        // Cria o card
        const divElement = document.createElement('div');
        divElement.setAttribute('class', 'card');

        // Cria a imagem
        const bookImg = document.createElement('img');
        bookImg.setAttribute('src', book.url);
        bookImg.setAttribute('class', 'book_image');

        // A imagem é filha do card (divElement)
        divElement.appendChild(bookImg);

        // Cada card é filho do bookSection.
        booksSection.appendChild(divElement);
        
    });

    if (filteredBooks.length == 0) {
        append_message(booksSection, no_books_message);
        //booksSection.innerHTML = no_books_message;
    }
}

/**
 * Adiciona uma mensagem em um elemento do DOM.
 * @param {*} element Elemento no qual irá aparecer a mensagem.
 * @param {*} msg Mensagem a ser adicionada ao element. 
 */
function append_message(element, msg) {
    const error_message = document.createElement('h2');
    error_message.setAttribute('class', 'error_messages');
    error_message.innerHTML = msg;
    element.appendChild(error_message);
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * M E N U * L A T E R A L * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function open_menu() {
    document.getElementById('lateral_menu').style.width = '250px';
} 

function close_menu() {
    document.getElementById('lateral_menu').style.width = '0px';    
}

const all_books = document.getElementById(all_books_category);
all_books.addEventListener("click", function() {
    remove_all_books();
    show_books(books);
});

const autoajuda = document.getElementById(autoajuda_category);
autoajuda.addEventListener("click", function() {
    remove_all_books();
    show_books(filter_book_by_category(books, autoajuda_category));
});

const fantasia = document.getElementById(fantasia_category);
fantasia.addEventListener("click", function() {
    remove_all_books();
    show_books(filter_book_by_category(books, fantasia_category));
});

const ficcao_cientifica = document.getElementById(ficcao_cientifica_category);
ficcao_cientifica.addEventListener("click", function() {
    remove_all_books();
    show_books(filter_book_by_category(books, "Ficção Científica"));
});

const romance = document.getElementById(romance_category);
romance.addEventListener("click", function() {
    remove_all_books();
    show_books(filter_book_by_category(books, romance_category));
});

function filter_book_by_category(book_list, category) {
    return book_list.filter(book => {
        return book.category.toUpperCase().trim() === category.toUpperCase().trim();
    })
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * C A R R O S S E L * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

let index = 0;
setInterval(function() {
    index++;
    show_carousel_image();
}, interval);

function show_carousel_image() {
    if (index >= carousel_images.length) {
        index = 0;
    } else if (index < 0) {
        index = carousel_images.length - 1;
    } 

    console.log("images.length: " + carousel_images.length); 
    console.log("index: " + index);
    let image = document.getElementById('selected_image');
    console.log(carousel_images[index]);
    image.setAttribute('src', carousel_images[index]);
}

function plus_slides(delta) {
    index += delta;
    show_carousel_image();
}