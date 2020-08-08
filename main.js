const carousel = document.getElementById('carousel-items');

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

let position = 0;

const carouselNext = () => {
  if (position/deviceWidth === 2) {
    position = 0;
    carousel.scrollTo(position, 0);
    return;
  }
  position += deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselBack = () => {
  if (position/deviceWidth === 0) {
    position += 2 * deviceWidth;
    carousel.scrollTo(position, 0);
    return;
  }
  position -= deviceWidth;
  carousel.scrollTo(position, 0);
}

const carouselNextButton = document.getElementById('carousel-next');
carouselNextButton.onclick = carouselNext;

const carouselBackButton = document.getElementById('carousel-back');
carouselBackButton.onclick = carouselBack;

const sideMenuButton = document.getElementById('dh_menu_btn');
const dismissSideMenuButton = document.getElementById('dismiss-dh_menu-btn');
const sideMenu = document.getElementById('side-menu');

let sideMenuOpen = false;

sideMenuButton.addEventListener('click', () => {
  if (sideMenuOpen === false) {
    console.log('oi')
    sideMenu.style.right = '0';
    sideMenuOpen = true;
  }
});

dismissSideMenuButton.addEventListener('click', () => {
  if (sideMenuOpen) {
    sideMenu.style.right = '-350px';
    sideMenuOpen = false;
  }
});

const availableBooks = [
  {
    name: 'Diario De Um Banana 14 - Vergara E Riba',
    price: 37.27,
    category: 'Fantansia',
    description: 'Greg e sua família acabam de receber uma herança inesperada e vão usar o dinheiro para reformar a casa. Mas obras são uma caixinha de surpresas.',
    image: './img/diario.jpg',
  },
  {
    name: 'A Garota do Lago',
    price: 14.90,
    category: 'Ficção Científica',
    description: 'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada',
    image: './img/garota.jpg',
  },
  {
    name: 'Atitude Mental Positiva - Versão De Bolso',
    price: 12.90,
    category: 'Auto Ajuda',
    description: '“Tudo o que a mente humana pode conceber e acreditar ela pode conquistar.”',
    image: './img/atitude.jpg',
  },
  {
    name: 'Drácula - Edição De Luxo',
    price: 55.00,
    category: 'Ficção Científica',
    description: 'Bram Stoker é o criador genial de uma das mais famosas e horripilantes histórias de terror de todos os tempos.',
    image: './img/dracula.jpg',
  },
  {
    name: 'Laços Inseparáveis',
    price: 70.00,
    category: 'Romance',
    description: 'A autora de cinco romances de sucesso, Emily Giffin, lança uma história inesquecível de duas mulheres, as famílias que a fazem ser quem são, e a lealdade e o amor que as ligam.',
    image: './img/inseparaveis.jpg',
  },
  {
    name: 'Attack On Titan 13',
    price: 21.90,
    category: 'Fantasia',
    description: "What's left of humanity lives in fear of their lives in this exciting, terrifying new manga that`s a number one bestseller in Japan",
    image: './img/titan.jpg',
  },
];

const cardsContainer = document.getElementById('cardsContainer');

for (let book of availableBooks) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardImage = document.createElement('img');
  cardImage.src = book.image;
  card.appendChild(cardImage);

  const cardOverlay = document.createElement('div');
  cardOverlay.className = 'overlay';

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = book.name;
  cardOverlay.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.textContent = book.description;
  cardOverlay.appendChild(cardDescription);

  card.appendChild(cardOverlay);

  cardsContainer.appendChild(card);
}

const textFilter = document.getElementById('search_bar');
const categoryFilter = document.getElementById('category');
const priceRangeFilter = document.getElementById('price_range');

function filter() {
  cardsContainer.innerHTML = '';
  
  let filteredBooks = availableBooks.filter((book) => {
    let bookPriceRange;
    if (book.price >= 1 && book.price <= 20) {
      bookPriceRange = 'barato';
    }
    if (book.price >= 21 && book.price <= 40) {
      bookPriceRange = 'medio';
    }
    if (book.price >= 41 && book.price <= 60) {
      bookPriceRange = 'caro';
    }
    if (book.price >= 61) {
      bookPriceRange = 'mais caro';
    }
    return (
      (book.name.toLowerCase().startsWith(textFilter.value.toLowerCase()) || textFilter.value === '')
      && (book.category === categoryFilter.value || categoryFilter.value === '')
      && (bookPriceRange === priceRangeFilter.value || priceRangeFilter.value === '')
    );
  });

  if (filteredBooks.length === 0) {
    const card = document.createElement('div');
    card.className = 'card';
    cardsContainer.appendChild(card);
    return;
  }

  for (let book of filteredBooks) {
    const card = document.createElement('div');
    card.className = 'card';
  
    const cardImage = document.createElement('img');
    cardImage.src = book.image;
    card.appendChild(cardImage);
  
    const cardOverlay = document.createElement('div');
    cardOverlay.className = 'overlay';
  
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = book.name;
    cardOverlay.appendChild(cardTitle);
  
    const cardDescription = document.createElement('p');
    cardDescription.textContent = book.description;
    cardOverlay.appendChild(cardDescription);
  
    card.appendChild(cardOverlay);
  
    cardsContainer.appendChild(card);
  }
}