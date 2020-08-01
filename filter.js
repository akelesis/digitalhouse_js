// library object with books object array
const library = {
  books: [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2014-12-14T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX376_BO1,204,203,200_.jpg",
      category: "Auto Ajuda",
      price: 18.72,
      price_range: "barato",
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      subtitle: "A JavaScript and jQuery Developer's Guide",
      author: "Addy Osmani",
      published: "2012-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description:
        "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
      website:
        "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/71wDOMQ7lIL.jpg",
      category: "Auto Ajuda",
      price: 78.13,
      price_range: "mais caro",
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      subtitle: "An In-Depth Guide for Programmers",
      author: "Axel Rauschmayer",
      published: "2014-02-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 460,
      description:
        "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      website: "http://speakingjs.com/",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/51EBAoje-rL._SX258_BO1,204,203,200_QL70_ML2_.jpg",
      category: "Ficção Científica",
      price: 26.34,
      price_range: "medio",
    },
    {
      isbn: "9781491950296",
      title: "Programming JavaScript Applications",
      subtitle:
        "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
      author: "Eric Elliott",
      published: "2014-07-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 254,
      description:
        "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
      website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
      img_url: "https://m.media-amazon.com/images/I/51t0zfcEBVL.jpg",
      category: "Romance",
      price: 59.58,
      price_range: "caro",
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      subtitle: "The Definitive Guide for JavaScript Developers",
      author: "Nicholas C. Zakas",
      published: "2016-09-03T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 352,
      description:
        "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
      website: "https://leanpub.com/understandinges6/read",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/51+Ee6EuenL._SX376_BO1,204,203,200_.jpg",
      category: "Fantasia",
      price: 37.25,
      price_range: "medio",
    },
    {
      isbn: "9781491904244",
      title: "You Don't Know JS",
      subtitle: "ES6 & Beyond",
      author: "Kyle Simpson",
      published: "2015-12-27T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 278,
      description:
        "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the 'You Don’t Know JS' series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
      website:
        "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/716akBT2tLL.jpg",
      category: "Auto Ajuda",
      price: 12.62,
      price_range: "barato",
    },
    {
      isbn: "9781449325862",
      title: "Git Pocket Guide",
      subtitle: "A Working Introduction",
      author: "Richard E. Silverman",
      published: "2013-08-02T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 234,
      description:
        "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
      website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/71f5JPIzrbL.jpg",
      category: "Romance",
      price: 72.17,
      price_range: "mais caro",
    },
    {
      isbn: "9781449337711",
      title: "Designing Evolvable Web APIs with ASP.NET",
      subtitle: "Harnessing the Power of the Web",
      author: "Glenn Block, et al.",
      published: "2014-04-07T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 538,
      description:
        "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
      website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html",
      img_url: "https://m.media-amazon.com/images/I/51wKBhPHoBL.jpg",
      category: "Ficção Científica",
      price: 18.24,
      price_range: "barato",
    },
    {
      isbn: "9780596517748",
      title: "JavaScript: The Good Parts",
      subtitle: "",
      author: "Douglas Crockford",
      published: "2008-05-01T00:00:00.000Z",
      publisher: "O'Reilly Media",
      pages: 153,
      description:
        "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
      website:
        "https://www.oreilly.com/library/view/javascript-the-good/9780596517748/",
      img_url:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      category: "Romance",
      price: 13.37,
      price_range: "barato",
    },
  ],
};

// filters to apply
const filters = {
  category: "",
  price_range: "",
  title: "",
};

/* get selects, inputs and buttons */

// get category select
const categorySelect = document.getElementById("category");
// get price range select
const priceRangeSelect = document.getElementById("price_range");
// get search bar input
const searchBar = document.getElementById("search_bar");
// get search bar action button
const searchButton = document.getElementById("search_button");

/* add event listeners to selects, inputs and buttons */

// on category select change, filter and populate showcase with filtered data
categorySelect.addEventListener("change", ({ target: { value } }) => {
  filters.category = value;
  loadBooksOnShowcase();
});
// on price range select change, filter and populate showcase with filtered data
priceRangeSelect.addEventListener("change", ({ target: { value } }) => {
  filters.price_range = value;
  loadBooksOnShowcase();
});
// on search button click, use search bar value to populate shoucase with
// filtered data
searchButton.addEventListener("click", () => {
  filters.title = searchBar.value;
  loadBooksOnShowcase();
});

// when user open/refresh page
const getPreviousFilters = () => {
  const searchBarValue = searchBar.value;
  const categoryValue = categorySelect.selectedOptions[0].value;
  const priceRangeValue = priceRangeSelect.selectedOptions[0].value;

  filters.category = categoryValue;
  filters.price_range = priceRangeValue;
  filters.title = searchBarValue;
};

// apply filter on books, return array with filtered results
const filterBooks = (books = library.books) =>
  books.filter((book) => {
    for (let filter in filters) {
      if (
        filters[filter] !== undefined &&
        filters[filter] !== "" &&
        (book[filter] === undefined ||
          // using toUpperCase and include because we are mading strings
          // comparison, not the best approach, but i`m running out of coffee
          // TODO: improve comparison
          !book[filter].toUpperCase().includes(filters[filter].toUpperCase()))
      ) {
        return false;
      }
    }

    return true;
  });

// function that show books on showcase
const loadBooksOnShowcase = () => {
  // get filtered books
  const filteredBooks = filterBooks();

  const showcase = document.querySelector(".showcase");
  showcase.innerHTML = "";

  if (!filteredBooks.length) {
    const noBooks = document.createElement("p");
    noBooks.className = "no-books";
    noBooks.textContent = "Nenhum livro com esses critérios.";
    showcase.appendChild(noBooks);
  }

  for (const book of filteredBooks) {
    const card = document.createElement("div");
    card.className = "card";

    const bookImg = document.createElement("img");
    bookImg.src = book.img_url;

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;

    const bookSinopsis = document.createElement("p");
    bookSinopsis.textContent = book.description;

    overlay.appendChild(bookTitle);
    overlay.appendChild(bookSinopsis);

    card.appendChild(bookImg);
    card.appendChild(overlay);

    showcase.appendChild(card);
  }
};

// first run to populate showcase
getPreviousFilters();
loadBooksOnShowcase();
