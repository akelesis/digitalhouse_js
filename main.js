// Burger menu variables
const burgerButton = document.querySelector("#dh_menu_btn");
const sideMenu = document.querySelector(".side-menu");
burgerButton.addEventListener("click", showSideMenu);
window.addEventListener("scroll", hideSideMenuScroll);

// Carousel variables
const carouselSlider = document.querySelector(".carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-slider img");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");
const carouselWidth = carouselSlider.clientWidth;
let slideFactor = 0;

nextButton.addEventListener("click", slideForward);
previousButton.addEventListener("click", slideBackward);

// Selection filter variables
const categorySelector = document.querySelector("#category");
const priceRangeSelector = document.querySelector("#price_range");

const searchBar = document.querySelector("#search_bar");
const searchButton = document.querySelector("#search_button");
const bookList = document.querySelectorAll(".showcase .card");

categorySelector.addEventListener("change", filterByCategoryAndByPriceRangeAndByTitle);
priceRangeSelector.addEventListener("change", filterByCategoryAndByPriceRangeAndByTitle);
searchButton.addEventListener("click", filterByCategoryAndByPriceRangeAndByTitle);

// Insert new book variables
const insertNewBookButtton = document.querySelector(".insert-book-btn");
const submitNewBook = document.querySelector("#submit-new-book");

insertNewBookButtton.addEventListener("click", showInsertForm);
submitNewBook.addEventListener("click", insertNewBook);

// Burger menu functions
function showSideMenu(event) {
    console.log(sideMenu);
    sideMenu.classList.toggle("side-menu-toggle");
}


function hideSideMenuScroll(event) {
    if (sideMenu.classList.contains("side-menu-toggle")) {
        sideMenu.classList.remove("side-menu-toggle");
    }
}

// Carousel functions
function slideForward(event) {
    slideFactor = (slideFactor + 1) % carouselImages.length;
    carouselSlider.style.transform = `translateX(-${carouselWidth * slideFactor}px)`;
    console.log(slideFactor);
}

function slideBackward(event) {
    slideFactor = (slideFactor + (carouselImages.length - 1)) % carouselImages.length;
    carouselSlider.style.transform = `translateX(-${carouselWidth * slideFactor}px)`;
    console.log(slideFactor);
}

// Filter functions
function filterByCategoryAndByPriceRangeAndByTitle(event) {
    bookList.forEach(book => {
        const displayRangeResult = filterByPriceRange(book);
        const displayCategoryResult = filterByCategory(book);
        const displayTitleResult = filterByTitleName(book)
        book.style.display = (displayCategoryResult === "block" && displayRangeResult == "block"
        && displayTitleResult === "block") ? "block" : "none";
    })
}

function filterByTitleName(book) {
    const inputTitle = searchBar.value.toUpperCase();
    const bookTitle = book.querySelector("h2").textContent.toUpperCase();
    return (bookTitle.includes(inputTitle)) ? "block" : "none";
}

function filterByPriceRange(book) {
    const selectedPriceRange = priceRangeSelector.options[priceRangeSelector.selectedIndex].value.toLowerCase();
    const bookPrice = book.querySelector(".preco").textContent.replace("R$", "");
    let displayValue = "none";

    if (selectedPriceRange === "todos") {
        displayValue = "block";
    } else if (selectedPriceRange === "barato" && (bookPrice >= 1 && bookPrice <= 20)) {
        displayValue = "block";
    } else if (selectedPriceRange === "medio" && (bookPrice >= 21 && bookPrice <= 40)) {
        displayValue = "block";
    } else if (selectedPriceRange === "caro" && (bookPrice >= 41 && bookPrice <= 60)) {
        displayValue = "block";
    } else if (selectedPriceRange === "mais caro" && bookPrice >= 61) {
        displayValue = "block";
    }
    return displayValue;
}

function filterByCategory(book) {
    const selectedCategory = categorySelector.options[categorySelector.selectedIndex].value.toLowerCase();
    const bookCategory = book.querySelector(".categoria").textContent.toLowerCase();
    return (bookCategory === selectedCategory || selectedCategory == "todos") ? "block" : "none";
}

// Insert new book functions
function showInsertForm(event) {
    const form = document.querySelector(".insert-book-form");
    form.classList.toggle("inactive-element")    
}

function insertNewBook(event) {
    event.preventDefault();
    const form = document.querySelector(".insert-book-form");
    const formInputs = document.querySelectorAll(".insert-book-form input");
    const newBook = createNewBook();
    const overlayItems = Array.from(newBook.children[1].children);
    const frontCoverItems = Array.from(newBook.children[0].children);

    frontCoverItems[0].src = formInputs[formInputs.length - 1].value;    

    for (let i = 0; i < overlayItems.length; i++ ){
        overlayItems[i].textContent = formInputs[i].value;
    }

    const showCase = document.querySelector(".showcase");
    showCase.appendChild(newBook);
    form.reset();
}

function createNewBook() {
    return document.querySelector(".card").cloneNode(true);
}