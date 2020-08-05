// Array com os dados dos livros
// Dados dos livros da página inicial
data = [
  {
    id: 1,
    image_URL:
      'https://images.unsplash.com/photo-1569738713551-2958195b458a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'A culpa e das estrelas',
    author: 'Não sei',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 39.9,
    category: 'Romance',
    price_range: 'medio',
  },
  {
    id: 2,
    image_URL:
      'https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Harry Potter',
    author: 'JK',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 29.9,
    category: 'Fantasia',
    price_range: 'medio',
  },
  {
    id: 3,
    image_URL:
      'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Matrix',
    author: 'Irmãos wheihaeibd',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 69.9,
    category: 'Ficcao-Cientifica',
    price_range: 'maisCaro',
  },
  {
    id: 4,
    image_URL:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Alcance seus sonhos',
    author: 'Edward Lichenstein',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 19.9,
    category: 'Auto-Ajuda',
    price_range: 'barato',
  },
  {
    id: 5,
    image_URL:
      'https://images.unsplash.com/photo-1551300316-cc6ced5bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Narnia',
    author: 'Não faço ideia',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 39.9,
    category: 'Fantasia',
    price_range: 'medio',
  },
  {
    id: 6,
    image_URL:
      'https://images.unsplash.com/photo-1590310051055-1079d8f48c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Dear John',
    author: 'Alguma Ai',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 49.9,
    category: 'Romance',
    price_range: 'caro',
  },
  {
    id: 7,
    image_URL:
      'https://images.unsplash.com/photo-1582547761303-4899595f0f35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Senhor dos Aneis',
    author: 'Tolkien',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 45.9,
    category: 'Fantasia',
    price_range: 'caro',
  },
  {
    id: 8,
    image_URL:
      'https://images.unsplash.com/photo-1541702193626-24fe3a9fbed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Star Wars',
    author: 'George Lucas',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 39.9,
    category: 'Ficcao-Cientifica',
    price_range: 'medio',
  },
  {
    id: 9,
    image_URL:
      'https://images.unsplash.com/photo-1518744386442-2d48ac47a7eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '1000 destinos',
    author: 'Alguem que já viajou muito',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    Obcaecati minus eaque quos assumenda Culpa commodi repudiandae
    asperiores ipsa hic dicta cumque earum omnis aperiam eaque iste
    corrupti error perspiciatis repellat!`,
    price: 59.9,
    category: 'Outros',
    price_range: 'caro',
  },
];
// Captura o botão do menu lateral
const btnMenu = document.getElementById('dh_menu_btn');

// captura a seção de filtros
const filters = document.querySelector('.filters');

// Captura a seção showcase
const showCase = document.querySelector('.showcase');

// Captura o elemento do menu que deve ser exibido quando clicar no botão
// do menu lateral
const dhMenu = document.querySelector('.dh_menu');

const showMenu = document.querySelector('.show');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const carouselImage = document.querySelector('.carouselImage');

// captura o valor do select do estilo do livro
const selectedCategory = document.getElementById('category');

// captura o valor do select do preço de livro
const selectedPrice = document.getElementById('price_range');

// Captura o botão search
const searchButton = document.getElementById('search_button');

// Caputa o que foi digitado no Input text
const textDigited = document.getElementById('search_bar');

// Captura os estados dos seletores
let hasCategory = [];
let hasPrice = [];
let hasName = [];
for (let i = 0; i < data.length; i++) {
  hasCategory[i] = true;
  hasPrice[i] = true;
  hasName[i] = true;
}

// Modal
const modalOverlay = document.querySelector('.modal-overlay');

// Imagens do array que será mostrado no carrossel
const imagesArray = [
  'https://images.unsplash.com/photo-1485990005353-9abcf694f3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80',
  'https://images.unsplash.com/photo-1534774592507-488885376ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
];

window.addEventListener('load', () => {
  // função para mostrar os items clicando no menu lateral
  mostrarMenu();
  // função para passar as imagens do carrosel com a setas
  carrosselImagesPass();
  // Carrega os dados dos livros
  loadBookData(data);

  // cards dos livros
  const bookCards = document.querySelectorAll('.card');
  // Mostra mais informações quando o mouse passa sobre e desaparece quando tira
  // o mouse
  for (let bookCard of bookCards) {
    bookCard.addEventListener('mouseover', () => {
      bookCard.children[1].style.display = 'none';
      bookCard.children[2].style.display = 'block';
    });
  }

  for (let bookCard of bookCards) {
    bookCard.addEventListener('mouseleave', () => {
      bookCard.children[1].style.display = 'block';
      bookCard.children[2].style.display = 'none';
    });
  }

  // Filtra os resultados por categoria
  selectedCategory.addEventListener('change', () => {
    for (let count = 0; count < data.length; count++) {
      if (selectedCategory.value === 'todos') {
        hasCategory[count] = true;
      } else {
        if (data[count].category === selectedCategory.value) {
          hasCategory[count] = true;
        } else {
          hasCategory[count] = false;
        }
      }
    }
    return hasCategory;
  });

  // Filtra os resultados por preço
  selectedPrice.addEventListener('change', () => {
    for (let count = 0; count < data.length; count++) {
      if (selectedPrice.value === 'todos') {
        hasPrice[count] = true;
      } else {
        if (data[count].price_range === selectedPrice.value) {
          hasPrice[count] = true;
        } else {
          hasPrice[count] = false;
        }
      }
    }
    return hasPrice;
  });

  // Filtra pelo nome digitado
  searchButton.addEventListener('click', () => {
    for (let count = 0; count < data.length; count++) {
      if (
        data[count].title
          .toLowerCase()
          .includes(textDigited.value.toLowerCase())
      ) {
        hasName[count] = true;
        bookCards[count].style.display = 'block';
      } else {
        hasName[count] = false;
        bookCards[count].style.display = 'none';
      }
    }
    return hasName;
  });

  textDigited.addEventListener('keypress', () => {
    if (event.key === 'Enter') {
      for (let count = 0; count < data.length; count++) {
        data[count].title
          .toLowerCase()
          .includes(textDigited.value.toLowerCase())
          ? (hasName[count] = true)
          : (hasName[count] = false);
      }
    }
    return hasName;
  });

  // Mostra na tela os resultados finais após aplicação dos filtros
  filters.addEventListener('change', () => {
    for (let count = 0; count < data.length; count++) {
      hasCategory[count] === true &&
      hasPrice[count] === true &&
      hasName[count] == true
        ? (bookCards[count].style.display = 'block')
        : (bookCards[count].style.display = 'none');
    }
  });

  // Função para mostrar o modal com mais informações
  for (let bookCard of bookCards) {
    bookCard.querySelector('a').addEventListener('click', () => {
      const cardId = bookCard.getAttribute('id');
      modalOverlay.classList.add('active');
      modalOverlay
        .querySelector('img')
        .setAttribute('src', bookCard.querySelector('img').src);

      modalOverlay.querySelector('h2').textContent = `Title: ${
        data[cardId - 1].title
      } `;

      modalOverlay.querySelector('h3').textContent = `Author: ${
        data[cardId - 1].author
      }`;

      modalOverlay.querySelector(
        '.modal-description'
      ).textContent = `Description: ${data[cardId - 1].description} `;

      modalOverlay.querySelector('.modal-category').textContent = `Category: ${
        data[cardId - 1].category
      } `;

      modalOverlay.querySelector('.modal-price').textContent = `Price: $${
        data[cardId - 1].price
      }0 `;
    });
  }

  // funcao para fechar o modal
  document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });
});

function loadBookData(data) {
  data.map((book) => {
    // cria a div card
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('id', book.id);
    // atribui a showcase o filho card
    showCase.appendChild(card);

    // cria a imagem do livro
    const bookImg = document.createElement('img');
    bookImg.setAttribute('src', book.image_URL);
    card.appendChild(bookImg);

    // cria a div mais informações
    const moreInfo = document.createElement('div');
    moreInfo.className = 'maisInfo';
    moreInfo.textContent = 'Mais informações ...';
    card.appendChild(moreInfo);

    // cria a div overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    card.appendChild(overlay);

    // titulo do livro
    const title = document.createElement('h2');
    title.textContent = book.title;
    overlay.appendChild(title);

    // descrição do livro
    const description = document.createElement('p');
    description.textContent = book.description;
    overlay.appendChild(description);

    // preço do livro
    const price = document.createElement('p');
    price.textContent = `Price: $ ${book.price}0`;
    overlay.appendChild(price);

    // link saiba mais
    const knowMore = document.createElement('a');
    knowMore.setAttribute('id', book.id);
    knowMore.textContent = `Saiba mais ...`;
    overlay.appendChild(knowMore);
  });
}

function mostrarMenu() {
  btnMenu.addEventListener('click', () => {
    if (dhMenu.classList.contains('show')) {
      dhMenu.classList.remove('show');
      dhMenu.classList.add('voltar');
    } else {
      dhMenu.classList.add('show');
      dhMenu.classList.remove('voltar');
    }
  });
}

function carrosselImagesPass() {
  // Inicializa a imagem
  carouselImage.setAttribute(
    'src',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
  );

  let carouselImagesLength = imagesArray.length;
  let i = 0;

  arrowLeft.addEventListener('click', () => {
    i--;
    if (i < 0) {
      i = carouselImagesLength - 1;
    }
    carouselImage.setAttribute('src', imagesArray[i]);
    carouselImage.classList.add('changeLeft');

    setTimeout(() => {
      carouselImage.classList.remove('changeLeft');
    }, 800);
  });

  arrowRight.addEventListener('click', () => {
    i++;
    if (i >= carouselImagesLength) i = 0;
    carouselImage.setAttribute('src', imagesArray[i]);
    carouselImage.classList.add('changeRight');

    setTimeout(() => {
      carouselImage.classList.remove('changeRight');
    }, 800);

    clearTimeout();
  });
}
