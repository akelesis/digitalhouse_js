function openCloseMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("menu_overlay");
    var styles = window.getComputedStyle(menu);

    if( styles.right === "-270px" ){
        menu.style.right = "0px";
        overlay.style.display = "block";
    } else {
        menu.style.right = "-270px";
        overlay.style.display = "none";
    }
}


var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var current = 0;
var length = slides.length - 1;
var previous = length;

function getNext(current) {
    current++;
    if(current > length) {current = 0}

    return current;
}

function getPrevious(previous) {
    previous++;
    if(previous > length) {previous = 0}

    return previous;
}

function carousel() {
    slides[current].style.display = "block";
    slides[previous].style.display = "none";
    dots[current].className += " active";
    dots[previous].className = dots[previous].className.replace(" active", "");

    current = getNext(current);
    previous = getNext(previous);

    setTimeout(carousel, 3000)
}

showBooks(avaliableBooks);

function showBooks(booksList) {

    let showCase = document.getElementById("showcase");
    showCase.innerHTML = "";

    booksList.forEach(book => {

        let price = book.price;
        let cover = book.cover;
        let cardString = cardConstructor(price, cover);
            
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = cardString;

        showCase.appendChild(card);
    })
}

function cardConstructor(price, cover) {

    var card =
        `<img src="${cover}"> \
        <div class="overlay"> \
            <h2 class="book_price">R$ ${price}</h2> \
        </div>`;

    return card;
}

function search() {
    let search = document.getElementById("search_bar").value.toUpperCase();

    let newShowedBooks = [];

    if  (search.length > 0 ){ 
        newShowedBooks = avaliableBooks.filter((book) => book.title.indexOf(search) != -1);
    }

    showBooks(newShowedBooks);
}
