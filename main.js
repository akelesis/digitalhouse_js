// Seleciona um elemento
const s = (element) => document.querySelector(element);
// Seleciona vários elementos
const sa = (element) => document.querySelectorAll(element);
// Seleciona pelo ID
const sid = (element) => document.getElementById(element);
// Adiciona um EventListener
const ae = (element, event, callback) =>
  element.addEventListener(event, callback);
// Remove um EventListener
const re = (element, event, callback) =>
  element.removeEventListener(event, callback);

// Controlador Slide
class Slide {
  constructor(props) {
    this.props = props;
    this.init();
    return this;
  }

  init() {
    this.bind();
    this.slideContainer = s(`[data-slide=${this.props.slide}]`);
    this.slideWrap = this.slideContainer.parentElement;
    this.items = this.slideContainer.children;
    this.currentSlide = 0;
    if (this.props.controls)
      this.slideWrap.appendChild(this.createControls());
    this.changeSlide(this.props.startAtSlide || 0);
  }

  makeActive(slide) {
    [...this.items].forEach(item => item.classList.remove('active'));
    this.items[slide].classList.add('active');
    if (this.controls) {
      [...this.controls.children].forEach(
        item => item.classList.remove('active')
      );
      this.controls.children[slide].classList.add('active');
    }
  }

  moveSlide(pos) {
    this.slideContainer.style = `
      left: ${pos}px;
    `;
  }

  changeSlide(slide) {
    if (slide >= this.items.length) {
      slide = 0;
    }
    const left = this.items[slide].offsetLeft;
    this.currentSlide = slide;
    this.makeActive(slide);
    this.moveSlide(-left);
    if (this.props.auto) this.autoSlide();
  }

  prevSlide() {
    this.changeSlide(this.currentSlide + 1);
  }

  autoSlide() {
    if (this.props.auto) {
      this.timer = setTimeout(this.prevSlide, this.props.time);
    }
  }

  createControls() {
    this.controls = document.createElement('div');
    [...this.items].forEach(
      (_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        ae(button, 'click', () => {
          clearTimeout(this.timer);
          this.changeSlide(index);
        });
        this.controls.appendChild(button);
      }
    );
    this.controls.setAttribute('data-control-slide', this.props.slide);
    return this.controls;
  }

  // O bind seta o this para 
  bind() {
    this.autoSlide = this.autoSlide.bind(this);
    this.createControls = this.createControls.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
}

// Gera o html do livro
class Book {
  constructor(props) {
    this.tags = [];
    this.props = props;
    return this;
  }
  createTag(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className || '');
    element.innerHTML = content || '';
    return element;
  }
  getCoverHTML() {
    const front = this.createTag('div', 'front', '');
    const back = this.createTag('div', 'back', '');
    const img = this.createTag('img', 'image_cover', '');
    img.setAttribute('src', this.props.coverURI);
    front.appendChild(img);
    const coverHTML = this.createTag(
      'div',
      'card-cover',
      front.outerHTML + back.outerHTML);
    return coverHTML;
  }
  getPriceHTML() {
    const [price, cents] = this.props.price.toFixed(2).split('.');
    const currencyHTML = this.createTag('currency', 'book_price_currency', 'R$');
    const centsHTML = this.createTag('small', 'book_price_cents', ',' + cents);
    const priceHTML = this.createTag('h3', 'book_price',
      currencyHTML.outerHTML + price);
    priceHTML.appendChild(centsHTML);
    return priceHTML;
  }
  getOverlayHTML() {
    const title = this.createTag('h2', 'book_title', this.props.title);
    const description = this.createTag('p', 'book_description', this.props.description);
    const author = this.createTag('p', 'book_author', this.props.author);
    const category = this.createTag('p', 'book_category', this.props.category);
    const price = this.getPriceHTML();
    const cardInfoHTML = this.createTag('div', 'card-info',
      title.outerHTML +
      description.outerHTML +
      author.outerHTML + 
      category.outerHTML +
      price.outerHTML
    )
    return cardInfoHTML;
  }
  getBookHTML() {
    this.tags.push(this.getCoverHTML());
    this.tags.push(this.getOverlayHTML());
    this.appendElements();
    return this.bookHTML;
  }
  setVisibility(visibility) {
    this.bookHTML.style.display = visibility ? 'block' : 'none';
  }
  appendElements() {
    this.bookHTML = this.createTag('div', 'card', '');
    this.tags.forEach(tag => this.bookHTML.appendChild(tag));
  }
}

const menuPopup = sid('dh_menu_popup');

const btnMenu = sid('dh_menu_btn');

const clickOut = function() {
  menuPopup.classList.remove('active');
  re(window, 'click', clickOut);
}

// stopPropagation: cancela o evento bubble que vem do objeto Window
ae(menuPopup, 'click', (e) => e.stopPropagation())

ae(btnMenu, 'click', (e) => {
  e.stopPropagation();
  // toggle: se está ativo remove esta classe, senão adiciona
  menuPopup.classList.toggle('active');
  if (menuPopup.classList.contains('active')) {
    // se o usuário em qualquer lugar fora do menu ele fecha o menu
    ae(window, 'click', clickOut);
  }
})

const slide = new Slide({
  slide: 'carousel',
  time: 3500,
  auto: true,
  controls: true,
})

// const loading = document.createElement('div');
// loading.classList.add('loading')
// for (let i = 1; i < 6; i++)
//   loading.appendChild(document.createElement('div'))

// console.log(loading)

const showCase = s('.showcase');
fetch('books.json')
  .then(res => res.json())
  .then(res => {
    const books = res;
    [...books].forEach(book => {
      const bookHTML = new Book(book);
      showCase.appendChild(bookHTML.getBookHTML());
    });
  });

/**
 * Filters
 * 
 * ids:
 * search_bar
 * search_button
 * category
 * price_range 
 * 
 * values:
 * barato // 1 - 20
 * medio // 21 - 40
 * caro // 41 - 60
 * mais caro // >= 61
 */

