let search_bar = null;
let search_button = null;
let conteudo = '';
let listBooks = {};
let acervo  = null;
let indexSlides = 0;

window.addEventListener('load', () => {
    showSlides();
    renderAllBooks();
    addEvents();
});

search_bar = document.querySelector('#search_bar');
search_button = document.querySelector('#search_button');
acervo = document.querySelector('.showcase');

listBooks = books.map(({ titulo, sinopse, autor }) => {
    return {
        titulo: titulo,
        tituloLowerCase: titulo.toLowerCase(),
        sinopse,
        autor,
    }
}).sort((a, b) => {
    return a.titulo.localeCompare(b.titulo);
});


function renderAllBooks() {
    
    listBooks.forEach(book => {
    conteudo +=
        `<div class="card">
        <img src="./img/300x400.png">
        <div class="overlay">
        <h2>${book.titulo}</h2>
        <p>${book.sinopse}</p>
        </div>
        </div>`
    });
    acervo.innerHTML = conteudo;
    
}

function addEvents() {
    search_bar.addEventListener('keyup', handleKeyup);
}

function handleKeyup(event) {
    const currentKey = event.key;

    if (currentKey !== 'Enter') {
        return;
    }

    const filterText = event.target.value;

    if (filterText.trim() !== '') {
        filterBooks(filterText);
    }
    
}

function filterBooks(filterText) {

    const filteredLowerCase = filterText.toLowerCase();

    const filteredBooks = listBooks.filter((book) => {
        return book.tituloLowerCase.includes(filteredLowerCase);
    });

    renderBooks(filteredBooks);
}

function renderBooks(result) {
    let x;
    conteudo = '';
    for (x = 0; x < result.length; x++) {
        conteudo +=
        `<div class="card">
            <img src="./img/300x400.png">
            <div class="overlay">
            <h2>${result[x].titulo}</h2>
            <p>${result[x].sinopse}</p>
            </div>
        </div>`
    }
    acervo.innerHTML = conteudo;
}

function showSlides() {
    let count;
    
    let slides = document.getElementsByClassName("mySlides");
    for (count = 0; count < slides.length; count++) {
        slides[count].style.display = "none";
    }
    
    indexSlides ++;
    
    if (indexSlides > slides.length) {
        indexSlides = 1
    }
    
    slides[indexSlides - 1].style.display = "block";
    
    setTimeout(showSlides, 3000);
}

function exibeMenu(){
    var submenu = document.getElementById('dh_nav');
    if(submenu.style.display == 'block'){
      submenu.style.display = 'none';
    }else{
      submenu.style.display = 'block';
    }
}

