const targetSection = document.getElementById("main-showcase");
const categoryTitles = [
  "Auto Ajuda",
  "Ficção Científica",
  "Fantasia",
  "Romance",
];
const numberOfBooksPerCategory = 20;
let booksPerCategory;
let allBooks;

/* Run on load page */
loadCategorizedBooks().then((categorizedBooks) => {
  booksPerCategory = categorizedBooks;
  allBooks = booksPerCategory.reduce(
    (booksAccumulator, bookCategory) =>
      booksAccumulator.concat(bookCategory.books),
    []
  );
});
/************************************************************/

/************************************************************/
async function loadCategorizedBooks() {
  appendLoadingSpinner();
  const allCategories = categoryTitles.map(async (categoryQuery) => {
    const books = await getBooks(categoryQuery, numberOfBooksPerCategory);
    removeLoadingSpinner();
    createBookCards(books);
    return { category: categoryQuery, books };
  });

  const categorizedBooks = await Promise.all(allCategories);
  return categorizedBooks;
}

async function getBooks(query, numberOfBooks) {
  try {
    const targetUrl = getApiUrl(query, numberOfBooks);
    const apiResponse = await fetch(targetUrl);
    const books = await apiResponse.json();
    return books.items;
  } catch {
    alert("Ocorreu um erro, atualize a página");
  }
}

function filterByTitleSearchQuery() {
  const queryValue = document.getElementById("search_bar").value.toLowerCase();

  if (queryValue === "" || queryValue.length < 3) {
    return;
  }

  const filteredBooks = allBooks.filter((book) => {
    const title = book.volumeInfo.title.toLowerCase();
    return title.includes(queryValue);
  });

  if (filteredBooks.length === 0) {
    appendWarning(
      "Não foi possível encontrar livros para a sua pesquisa. Tente alterar o texto no campo e pesquisar novamente. Ou pesquise por categoria"
    );
    return;
  }

  const categoryFilterSelect = document.getElementById("category");
  categoryFilterSelect.selectedIndex = 0;

  updateRenderedCards(filteredBooks);
}

function filterByCategory() {
  const filter = document.getElementById("category").value;

  if (filter === "Selecione a Categoria") {
    return;
  }

  const [filteredBooksCategory] = booksPerCategory.filter(
    (books) => books.category === filter
  );

  if (filteredBooksCategory) {
    updateRenderedCards(filteredBooksCategory.books);
  } else {
    updateRenderedCards(allBooks);
  }
}

function updateRenderedCards(booksInfo) {
  removeBookCards();
  createBookCards(booksInfo);
}

function createBookCards(booksInfo) {
  booksInfo.forEach((book) => {
    const bookInfo = book.volumeInfo;

    if (bookInfo.imageLinks) {
      const bookTitle = bookInfo.title;
      const bookImgLink = bookInfo.imageLinks.thumbnail;
      const moreInfoLink = bookInfo.infoLink;

      const bookCard = document.createElement("div");
      bookCard.className = "card";
      bookCard.title = bookTitle;

      const bookCardImg = document.createElement("img");
      bookCardImg.src = bookImgLink;
      bookCardImg.className = "book-card-background-img";

      const bookCardOverlay = document.createElement("div");
      bookCardOverlay.className = "overlay";

      const bookCardLinkToMoreInfo = document.createElement("a");
      bookCardLinkToMoreInfo.innerText = "Saiba Mais";
      bookCardLinkToMoreInfo.className = "book-card-more-info";
      bookCardLinkToMoreInfo.setAttribute("href", moreInfoLink);
      bookCardLinkToMoreInfo.setAttribute("rel", "noopener noreferrer");
      bookCardLinkToMoreInfo.setAttribute("target", "_blank");

      const bookCardLinkIcon = document.createElement("i");
      bookCardLinkIcon.className = "fas fa-angle-right link-icon";

      bookCardLinkToMoreInfo.appendChild(bookCardLinkIcon);

      bookCardOverlay.appendChild(bookCardLinkToMoreInfo);

      bookCard.appendChild(bookCardImg);
      bookCard.appendChild(bookCardOverlay);

      targetSection.appendChild(bookCard);
    }
  });
}

function removeBookCards() {
  targetSection.innerHTML = "";
}

function getApiUrl(query, numberOfResults) {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=${numberOfResults}`;
  return apiUrl;
}

function appendLoadingSpinner() {
  const spinner = document.createElement("i");
  spinner.className = "fas fa-spinner fa-spin fa-5x";
  spinner.id = "showcase-spinner";
  targetSection.appendChild(spinner);
}

function removeLoadingSpinner() {
  const spinner = document.getElementById("showcase-spinner");
  if (spinner) {
    targetSection.removeChild(spinner);
  }
}

function appendWarning(warning) {
  targetSection.innerHTML = "";
  const warningWrapper = document.createElement("div");
  warningWrapper.className = "warning";

  const warningText = document.createElement("p");
  warningText.className = "warning-text";

  warningText.innerText = warning;
  warningWrapper.appendChild(warningText);
  targetSection.appendChild(warningWrapper);
}
