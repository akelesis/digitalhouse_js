// Menu
const buttonMenu = document.querySelector("#dh_menu_btn");
const menu = document.querySelector(".dh_menu");

buttonMenu.onclick = function() {
  if (menu.style.display === "none") {
    showMenu();
  } else {
    hideMenu();
  }
}

function showMenu() {
  menu.style.display = "flex";
}

function hideMenu() {
  menu.style.display = "none";
}

// Carousel
function showCarousel(n) {
  let i;
  const slides = document.querySelectorAll(".carousel_item");
  
  if (n > slides.length) {
    index = 1;
  }

  if (n < 1) {
    index = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index-1].style.display = "flex"
}

function changeSlide(n) {
  showCarousel(index += n);
}

let index = 1
const next = document.querySelector(".carousel_next");
const prev = document.querySelector(".carousel_prev");
let n

showCarousel(index);

next.onclick = function () {
  n = 1;
  changeSlide(n);
}

prev.onclick = function () {
  n = -1;
  changeSlide(n)
}

// Books

const books = [
  {
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    category: "Auto Ajuda",
    price: 48.9,
    cover: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_2d812137ddb6a4e43a705f79282502854b1252c0.jpg"
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    category: "Ficção Científica",
    price: 19.9,
    cover: "https://d38h3sy5jr28pf.cloudfront.net/capas-livros/9788576573005-william-gibson-neuromancer-1038305047.jpg"
  },
  {
    title: "A Máquina do Tempo",
    author: "H. G. Wells",
    category: "Ficção Científica",
    price: 29.9,
    cover: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/eab2296bfa7690cfce6c5bb2a4ccb1baad661be8.jpg"
  },
  {
    title: "Harry Potter e a Câmara Secreta",
    author: "J. K. Rowling",
    category: "Fantasia",
    price: 38.9,
    cover: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/003b6168c696ba5d72c74b92cfbc39d7307137e1.jpg"
  },
  {
    title: "Fogo e Sangue - Volume 1",
    author: "George R. R. Martin",
    category: "Fantasia",
    price: 69.9,
    cover: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_9a85bb2b1b20f208b844e2682ddb3078.jpg"
  },
  {
    title: "Cinquenta Tons de Cinza",
    author: "E. L. James",
    category: "Romance",
    price: 44.9,
    cover: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/3c32bf7e183b3c708d882330c7f1948866e632f7.jpg"
  }
];

let booksList = document.querySelector(".showcase");

function showBook(book) {
  bookCard = document.createElement("div");
  bookCard.className = "card";
  
  bookCover = document.createElement("img");
  bookCover.src = book.cover;
  
  bookOverlay = document.createElement("div");
  bookOverlay.className = "overlay";
  
  bookTitle = document.createElement("h2");
  titleText = document.createTextNode(book.title);
  bookTitle.appendChild(titleText);
  bookOverlay.appendChild(bookTitle);

  bookAuthor = document.createElement("p");
  authorText = document.createTextNode(book.author);
  bookAuthor.appendChild(authorText);
  bookOverlay.appendChild(bookAuthor);

  bookCard.appendChild(bookCover);
  bookCard.appendChild(bookOverlay);
  
  
  booksList.appendChild(bookCard);



  // console.log(book.title);
  // console.log(book.author);
  // console.log(book.category);
  // console.log(book.price);
}

books.forEach(showBook);
