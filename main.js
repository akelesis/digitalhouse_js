// Captura o botão do menu lateral
const btnMenu = document.getElementById('dh_menu_btn');

// Captura o elemento do menu que deve ser exibido quando clicar no botão
// do menu lateral
const dhMenu = document.querySelector('.dh_menu');

const showMenu = document.querySelector('.show');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const carouselImage = document.querySelector('.carouselImage');
const cards = document.querySelectorAll('.card');
const overlay = document.querySelectorAll('.overlay');

// captura o valor do select do estilo do livro
const selectCategory = document.getElementById('category');

// captura o valor do select do preço de livro
const selectPrice = document.getElementById('price_range');

// Captura o botão search
const searchButton = document.getElementById('search_button');
// Caputa o que foi digitado no Input text
const textDigited = document.getElementById('search_bar');

const imagesArray = [
  'https://images.unsplash.com/photo-1485990005353-9abcf694f3e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80',
  'https://images.unsplash.com/photo-1534774592507-488885376ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
];

window.addEventListener('load', () => {
  btnMenu.addEventListener('click', () => {
    if (dhMenu.classList.contains('show')) {
      dhMenu.classList.remove('show');
    } else {
      dhMenu.classList.add('show');
    }
  });

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

  for (let card of cards) {
    card.addEventListener('mouseover', () => {
      card.children[2].style.display = 'block';
      card.children[1].style.display = 'none';
    });

    card.addEventListener('mouseleave', () => {
      card.children[2].style.display = 'none';
      card.children[1].style.display = 'block';
    });
  }

  selectCategory.addEventListener('change', () => {
    for (let card of cards) {
      if (card.children[2].classList.contains(selectCategory.value)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });

  selectPrice.addEventListener('change', () => {
    for (let card of cards) {
      if (card.children[2].classList.contains(selectPrice.value)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });

  searchButton.addEventListener('click', () => {
    for (let card of cards) {
      if (
        card.children[2].children[0].innerHTML
          .toLowerCase()
          .includes(textDigited.value.toLowerCase())
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
});
