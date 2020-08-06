const s = (element) => document.querySelector(element);
const sa = (element) => document.querySelectorAll(element);
const sid = (element) => document.getElementById(element);
const ae = (element, event, callback) =>
  element.addEventListener(event, callback);
const re = (element, event, callback) =>
  element.removeEventListener(event, callback);

function exibe(){
    let menu = document.getElementById("dh_menu");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

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
    this.changeSlide(this.props.startAtSlide ? this.props.startAtSlide : 0);
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

  bind() {
    this.autoSlide = this.autoSlide.bind(this);
    this.createControls = this.createControls.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
}

const slide = new Slide({
  slide: 'carousel',
  time: 3500,
  auto: true,
  controls: true,
})
