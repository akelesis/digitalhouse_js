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
    if (this.props.auto) this.autoSlide();
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
  }

  prevSlide() {
    this.changeSlide(this.currentSlide + 1);

  }

  autoSlide() {
    if (this.props.auto) {
      setTimeout(this.autoSlide, this.props.time);
      this.prevSlide();
    }
  }

  createControls() {
    this.controls = document.createElement('div');
    [...this.items].forEach(
      (_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        ae(button, 'click', () => this.changeSlide(index));
        this.controls.appendChild(button);
      }
    );
    this.controls.setAttribute('data-control-slide', this.props.slide);
    return this.controls;
  }

  bind() {
    this.autoSlide = this.autoSlide.bind(this);
    this.createControls = this.createControls.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }
}

class Book {
  constructor(props) {
    this.props = props;
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

// slide.changeSlide(1);