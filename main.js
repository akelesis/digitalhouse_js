function openNav() {
  document.getElementById("menu").style.width = "250px";
}

function closeNav() {
  document.getElementById("menu").style.width = "0px";
}
/* carousel */

let images = [];
let i = 0;
time = 3000;

images[0] = "./img/bookcase-1869616_1280.jpg"
images[1] = "./img/library1pg.jpg"
images[2] = "./img/prague-980732_1920.jpg"

function mudarimg() {
document.carouselimg.src = images[i];
if( i < images.length - 1) {
  i++;
} else {
  i = 0;
}
setTimeout("mudarimg()", time);
}
window.onload = mudarimg;

/* bota os coiso no showcase */
const livros = [ 
{Titulo: "Anna Karienina", img: "./img/AnnaKarienina.jpg", valor: 70.00, gênero: "Romance"},
{Titulo: "O morro dos ventos uivantes", img: "./img/oMorroDosVentosUivantes.jpg", valor: 35.00, gênero: "Romance"},
{Titulo: "O nome do vento", img: "./img/oNomeDoVento.jpg", valor: 40.00, gênero: "Fantasia"},
{Titulo: "O temor do sabio", img: "./img/oTemorDoSabio.jpg", valor: 35.00, gênero: "Fantasia"},
{Titulo: "A musica do silêncio", img: "./img/aMusicaDoSilencio.jpg", valor: 30.00, gênero: "Fantasia"},
{Titulo: "Orgulho e preconceito", img: "./img/OrgulhoEPreconceito.jpg", valor: 50.00, gênero: "Romance"}
]

let appliedFilters = {
Titulo: "",
gênero: "",
price_range: "",
}

const showcase = document.querySelector(".showcase");

function renderizar() {
const filteredBooks = filterBooks();
// clear showcase before insertion
showcase.innerHTML = "";

// iterate over books array and insert
filteredBooks.forEach(function (book) {
  const card = document.createElement('div');
  card.className = 'card';

  const bookImg = document.createElement('img');
  bookImg.className = 'imglivro';

  const bookOverlay = document.createElement('div');
  bookOverlay.className = 'overlay';

  const bookTitle = document.createElement('h2');
  const bookDesc = document.createElement('p');

  bookImg.src = book.img;
  bookTitle.textContent = book.Titulo;
  bookDesc.textContent = `Valor: R$ ${book.valor}\nGênero: ${book.gênero}`;

  bookOverlay.appendChild(bookTitle);
  bookOverlay.appendChild(bookDesc);

  card.appendChild(bookImg);
  card.appendChild(bookOverlay);

  showcase.appendChild(card);
})
}

/* filters */
// apply filter on books, return array with filtered results
function filterBooks (books = livros) {
  function filtro(book) {
    for (let filter in appliedFilters) { // first run: name
      if (appliedFilters[filter] !== "" && filter === "price_range") {
        switch (appliedFilters[filter]) {
          case "barato": /* compara o valor do value (barato/caro) com o preço do livro */
            return book.valor >= 1 && book.valor < 21;
          case "medio":
            return book.valor >= 21 && book.valor < 41;
          case "caro":
            return book.valor >= 41 && book.valor < 61;
          case "mais caro":
            return book.valor >= 61;
          default:
            return true;
        }
      }
      
      if ( //appliedFilters['gênero'] === 'Romance'
        appliedFilters[filter] !== "" && //true
        filter !== "price_range" && //true
        !book[filter].toUpperCase().includes(appliedFilters[filter].toUpperCase())
      ) {
        return false;
      }
    }

    return true;
  }

  const filteredBooks = books.filter(filtro);

  return filteredBooks;
}


/*categoria select */

const selectCategory = document.getElementById("category");

selectCategory.addEventListener('change', function (event) {
appliedFilters.gênero = event.target.value;

renderizar();
})

/* price select */

const selectPriceRange = document.getElementById("price_range");

selectPriceRange.addEventListener('change', function (event) { /* evento de qnd mudar o option */
appliedFilters.price_range = event.target.value; /* salva o valor */

renderizar();
})

/* search select */
const searchBar = document.getElementById("search_bar");
const searchBarButton = document.getElementById("search_button");

searchBarButton.addEventListener("click", function() {
appliedFilters.Titulo = searchBar.value;

renderizar();
})


renderizar();
