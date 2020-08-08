const booksEndpoint = "https://5f288805f5d27e001612f074.mockapi.io";
const showcase = document.querySelector(".showcase");

const menuDrawer = document.querySelector(".right-drawer");
const menuButton = document.querySelector("#dh_menu_btn");
const bookNameInput = document.querySelector("#search_bar");
const bookNameButton = document.querySelector("#search_button");
const authorSelector = document.querySelector("#category");
const priceSelector = document.querySelector("#price_range");
const carouselSection = document.querySelector("#dh_carousel");
const priceRange = {
  barato: { from: 1, upTo: 20 },
  medio: { from: 21, upTo: 40 },
  maisCaro: { from: 41, upTo: 41 },
};

var isMenuOpen = false;
var bookElementList = [];
var originalBookList = [];
var bookList = [];
var authorsList = [];

const axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  responseType: "json",
  crossDomain: true,
};

menuButton.addEventListener("click", handleMenu);

function handleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menuDrawer.style.width = "20vw";

    const linkedInLink = document.createElement("a");
    linkedInLink.setAttribute(
      "href",
      "https://www.linkedin.com/in/willerson-abreu-72bb83115"
    );
    linkedInLink.setAttribute("target", "_blank");
    linkedInLink.innerHTML = "LinkedIn do Desenvolvedor";

    const githubLink = document.createElement("a");
    githubLink.setAttribute("href", "https://github.com/WillersonAbreu");
    githubLink.setAttribute("target", "_blank");
    githubLink.innerHTML = "Github do Desenvolvedor";

    menuDrawer.appendChild(linkedInLink);
    menuDrawer.appendChild(githubLink);
  } else {
    menuDrawer.innerHTML = "";
    menuDrawer.style.width = "0";
  }
}

function injectBookCardToHtml(book) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const bookCover = document.createElement("img");
  bookCover.setAttribute("src", book.image);

  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");

  const bookTitle = document.createElement("h2");
  bookTitle.innerHTML = book.title;

  const price = document.createElement("span");
  price.innerText = `Preço: R$ ${book.price.displayValue}`;

  overlay.appendChild(bookTitle);
  card.appendChild(bookCover);
  card.appendChild(overlay);

  let overlayLength = overlay.childNodes.length;

  overlay.insertBefore(price, overlay.childNodes[overlayLength + 1]);

  showcase.appendChild(card);
}

function buildBookList() {
  bookList.forEach((book) => {
    injectBookCardToHtml(book);
  });
}

function buildAuthorsList(originalBookList) {
  let authors = [];

  originalBookList.forEach((book) => {
    if (authors.indexOf(book.author) === -1) {
      authors.push(book.author);
    }
  });

  authorsList = authors;

  authors.map((author, index) => {
    const childCounter = authorSelector.childNodes.length;

    const option = document.createElement("option");

    option.setAttribute("value", index);
    option.innerHTML = author;

    authorSelector.insertBefore(
      option,
      authorSelector.childNodes[childCounter + 1]
    );
  });
}

function restoreBookList() {
  bookList = originalBookList;
  showcase.innerHTML = "";
  buildBookList();
}

async function getBooks() {
  try {
    const { data } = await axios.get(
      `${booksEndpoint}/books`,
      null,
      axiosConfig
    );
    originalBookList = data;
    bookList = data;
    await buildBookList();

    buildAuthorsList(data);
    initCarousel();
  } catch (error) {
    console.log(error);
  }
}

function initCarousel() {
  let index = 0;
  const cheapBooks = originalBookList.filter((book) => {
    return book.price.value <= 10;
  });
  const carouselLength = cheapBooks.length - 1;

  if (cheapBooks.length > 0) {
    renderCarousel(cheapBooks, carouselLength);

    const carouselNodes = carouselSection.childNodes;

    setInterval(() => {
      if (index !== 0) {
        carouselNodes[index - 1].style.display = "none";
      }

      if (index !== carouselLength) {
        carouselNodes[index].style.marginLeft = "-40vw";
        index += 1;
      } else if (index === carouselLength) {
        console.log(carouselNodes[index]);
        // carouselNodes[index].style.marginLeft = "40vw";
        carouselSection.innerHTML = "";
        index = 0;
        renderCarousel(cheapBooks, carouselLength);
      }
    }, 2500);
  }
}

function renderCarousel(books, carouselLength) {
  books.map((book, idx) => {
    const imageSlide = document.createElement("img");
    imageSlide.setAttribute("src", book.image);
    imageSlide.style.display = "block";
    if (idx === 0) {
      imageSlide.style.marginLeft = "42vw";
    } else {
      imageSlide.style.marginLeft = "65vw";
    }
    if (idx === carouselLength) {
      console.log("Joguei 10vw");
      imageSlide.style.marginRight = "40vw";
    }
    carouselSection.appendChild(imageSlide);
  });
}

getBooks();

/**
 * Search functions
 *
 */

// Author Name Search
authorSelector.addEventListener("change", (event) => {
  if (event.target.value !== "all") {
    const authorName = authorsList[event.target.value];
    searchByAuthor(authorName);
  } else {
    restoreBookList();
  }
});

function searchByAuthor(author) {
  const books = originalBookList.filter((book) => {
    return book.author === author;
  });
  showcase.innerHTML = "";
  bookList = books;
  buildBookList();
}

// Price Range Search
priceSelector.addEventListener("change", (event) => {
  if (event.target.value !== "all") {
    const currentRange = priceRange[event.target.value];

    searchByPriceRange(currentRange);
  } else {
    restoreBookList();
  }
});

function searchByPriceRange(range) {
  const books = originalBookList.filter((book) => {
    return book.price.value >= range.from && book.price.value <= range.upTo;
  });
  showcase.innerHTML = "";
  bookList = books;
  buildBookList();
}

// Book Name Search
bookNameButton.addEventListener("click", searchByName);

function searchByName(_event) {
  const value = bookNameInput.value;
  if (value.length > 0) {
    const books = originalBookList.filter((book) => {
      return book.title.includes(value);
    });
    showcase.innerHTML = "";
    bookList = books;
    buildBookList();
  } else {
    bookNameInput.style.borderColor = "red";
    bookNameButton.style.borderColor = "red";

    setTimeout(() => {
      window.alert("Preencha o campo de nome do livro para fazer a busca");
    }, 150);
  }
}
