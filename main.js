//window.addEventListener('load', start);

const livros = [
  {
    capa: './img/aDamaDasCamelias.png',
    titulo: 'A Dama das Camélias',
    categoria: 'Romance',
    preco: 15,
    id: 1,
  },
  {
    capa: './img/asCronicasDeNarnia.png',
    titulo: 'As Crônicas de Nárnia',
    categoria: 'Fantasia',
    preco: 22,
    id: 2,
  },
  {
    capa: './img/euRobo.png',
    titulo: 'Eu Robô',
    categoria: 'Ficção Científica',
    preco: 43,
    id: 3,
  },
  {
    capa: './img/lordOfRings.png',
    titulo: 'Lord Of The Rings',
    categoria: 'Fantasia',
    preco: 70,
    id: 4,
  },
  {
    capa: './img/mindset.png',
    titulo: 'Mindset',
    categoria: 'Auto Ajuda',
    preco: 19,
    id: 5,
  },
  {
    capa: './img/oGuiadoMochileiroDasGalaxias.png',
    titulo: 'O Guia do Mochileiro das Galáxias',
    categoria: 'Ficção Científica',
    preco: 25,
    id: 6,
  },

  {
    capa: './img/oPoderDoHabito.png',
    titulo: 'O Poder do Hábito',
    categoria: 'Auto Ajuda',
    preco: 47,
    id: 7,
  },
  {
    capa: './img/osMiseraveis.png',
    titulo: 'Os Miseráveis',
    categoria: 'Romance',
    preco: 99,
    id: 8,
  },
  {
    capa: './img/AsMelhoresHistoriasDeViagensNoTempo.png',
    titulo: 'As Melhores Histórias de Viagnes No Tempo',
    categoria: 'Ficção Científica',
    preco: 45,
    id: 9,
  },
];

const showAll = (card) => {
  for (let j = 0; j < card.length; j++) {
    card[j].style.display = 'block';
  }
};

let cards = () => {
  return document.getElementsByClassName('card');
};

const loadAll = (card, livros) => {
  for (let i = 0; i < card.length; i++) {
    card[i].childNodes[1].src = livros[i].capa;
  }
};

const clearDisplay = () => {
  let card = cards();
  for (let i = 0; i < card.length; i++) {
    card[i].style.display = 'none';
  }
};

const filterCategory = (categoria, card) => {
  var livroFiltrado = livros.filter((livro) => {
    return livro.categoria === categoria;
  });

  clearDisplay();
  for (let i = 0; i < livroFiltrado.length; i++) {
    for (let j = 0; j < card.length; j++) {
      if (card[j].childNodes[1].getAttribute('src') === livroFiltrado[i].capa) {
        card[j].style.display = 'block';
      }
    }
  }
};

let updateDisplay = (listLivros, card) => {
  clearDisplay();
  for (let i = 0; i < listLivros.length; i++) {
    for (let j = 0; j < card.length; j++) {
      if (card[j].childNodes[1].getAttribute('src') === listLivros[i].capa) {
        card[j].style.display = 'block';
      }
    }
  }
};

const filterPriceRange = (priceRange, card) => {
  const barato = { min: 1, max: 20 };
  const medio = { min: 21, max: 40 };
  const caro = { min: 41, max: 60 };
  const maisCaro = { min: 60, max: Number.MAX_SAFE_INTEGER };
  let range;
  switch (priceRange) {
    case 'barato':
      range = barato;
      break;
    case 'medio':
      range = medio;
      break;
    case 'caro':
      range = caro;
      break;
    case 'mais caro':
      range = maisCaro;
      break;
  }
  var livroFiltrado = livros.filter((livro) => {
    return livro.preco >= range.min && livro.preco <= range.max;
  });
  updateDisplay(livroFiltrado, card);
};

let selectCategory = document.getElementById('category');
selectCategory.addEventListener('change', () => {
  const categoria = event.target.value;
  filterCategory(categoria, cards());
});

let selectPriceRange = document.getElementById('price_range');
selectPriceRange.addEventListener('change', () => {
  const priceRange = event.target.value;
  filterPriceRange(priceRange, cards());
});

const loadCarousel = (livros) => {
  let carousel = document.getElementById('dh_carousel');
  let divCarousel = document.createElement('div');
  divCarousel.id = 'divCarousel';

  carousel.innerHTML = '';
  carousel.appendChild(divCarousel);
  let j = 0;
  setInterval(() => {
    if (j < livros.length) {
      divCarousel.innerHTML = `<img src="${livros[j].capa}" >`;
      j++;
    } else {
      j = 0;
      divCarousel.innerHTML = `<img src="${livros[0].capa}">`;
      j++;
    }
  }, 2000);
};

const fnSearchBar = (event, card) => {
  let searched = [];
  const regex = new RegExp(`${event.target.value}`, 'gmi');
  if (event.keyCode === 13) {
    if (event.target.value === '') {
      showAll(card);
    } else {
      searched = livros.filter((livro) => livro.titulo.match(regex));
      updateDisplay(searched, card);
    }
  }
};

let searchBar = document.getElementById('search_bar');
searchBar.addEventListener('keypress', (event) => {
  fnSearchBar(event, cards());
});

loadCarousel(livros);
loadAll(cards(), livros);
