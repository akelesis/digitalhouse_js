//menu function

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

const slides = document.querySelector(".carousel_container").children;
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const indicator = document.querySelector(".carousel_counter");
let count = 0;

prev.addEventListener("click", function(){
  prevSlide();
  updateCircleIndicator(); 
  resetTimer();
})

next.addEventListener("click", function(){
  nextSlide(); 
  updateCircleIndicator();
  resetTimer();
})

//circle indicators
function circleIndicator(){
  for(let i = 0; i < slides.length; i++){
    const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick","indicateSlide(this)")
        div.id = i;
        if(i == 0){
            div.className = "active";
        }
        indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element){
  count = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator(){
   for(let i = 0; i < indicator.children.length; i++){
      indicator.children[i].classList.remove("active");
   }
   indicator.children[count].classList.add("active");
}

function prevSlide(){
  if(count == 0){
    count = slides.length-1;
  } else {
    count--;
  }
   changeSlide();
}

function nextSlide(){
 if(count == slides.length-1) {
  count = 0;
 } else {
  count++;
 }
 changeSlide();
}

function changeSlide(){
  for(let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  slides[count].classList.add("active");
}

function resetTimer(){
  // stop timer 
  clearInterval(timer);
  timer = setInterval(autoPlay,4000);
}

function autoPlay(){
 nextSlide();
 updateCircleIndicator();
}

let timer=setInterval(autoPlay,4000);

let booksDescription = function () {
  let card = document.querySelectorAll("div.card");
  let image = document.querySelectorAll("div.card img");
  let title = document.querySelectorAll("div.overlay h2");
  let text = document.querySelectorAll("div.overlay p");

  let books = [
      {
          img: 'https://images-na.ssl-images-amazon.com/images/I/71nygThi5FL.jpg',
          title: 'O Labirinto Do Fauno',
          text: 'Encantou público e crítica com sua história que mesclava sonho e realidade, trazendo para o universo da fantasia o cotidiano da Espanha fascista de Franco. A produção permanece conquistando fãs e mostrando que boas histórias são atemporais.',
          category: 'Fantasia',
          price: '35.91'
      },
      {
        img: 'https://images-na.ssl-images-amazon.com/images/I/41vEGoXo1sL._SX323_BO1,204,203,200_.jpg',
        title: 'Javascript e Jquery',
        text: 'Jon Duckett projeta e desenvolver websites há mais de quinze anos. Trabalhou em pequenas startups e empresas internacionais e escreveu mais de uma dúzia de livros sobre web design e programação.',
        category: 'Ficção Científica',
        price: '200.0'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/413XcyZzPQL._SX339_BO1,204,203,200_.jpg',
      title: 'Mr. Romance',
      text: 'Max Riley pode fazer com que as fantasias mais incríveis ganhem vida: sob o alterego de Mr. Romance, um bad boy inocente, um geek sexy ou qualquer outro homem que satisfaça os desejos das mulheres solitárias da alta sociedade de Nova York.',
      category: 'Romance',
      price: '15.06'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41FKKyqw8xL._SX348_BO1,204,203,200_.jpg",
    title: "O universo autoconsciente",
    text: "Lançado originalmente em 1993, este livro abalou a comunidade ao apresentar uma teoria revolucionária.",
    category: "Auto Ajuda",
    price: '42.95'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg",
    title: "As Crônicas de Nárnia",
    text: "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis.",
    category: "Fantasia",
    price: '58'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51BG+Wr5KDL._SX322_BO1,204,203,200_.jpg",
    title: "O Ladrão de Raios",
    text: "Os cinco livros da série que se tornou fenômeno mundial, em edição limitada e com design exclusivo: as cinco lombadas dos livros compõem, juntas, uma ilustração especial de John Rocco.",
    category: "Fantasia",
    price: '21.9'
  }
   
  ];

  for (let i = 0; i < card.length; i++) {
      image[i].setAttribute('src', books[i].img);
      title[i].textContent = books[i].title;
      text[i].textContent = books[i].text;
  }
};
booksDescription();

let bookSearch = function() {
  let searchBar = document.getElementById('search_bar');
  let books = document.getElementsByClassName('card');
  let searchButton = document.getElementById('search_button');

  searchButton.onclick = function () {
      if (searchBar.value != '') {
        checkSearch(searchBar.value);
      }
  };

  searchBar.addEventListener('keyup', function(event) {
      if (searchBar.value != '') {
        checkSearch(searchBar.value);
      }
      else{
          for (let i = 0; i < books.length; i++) {
              books[i].style.display = '';
          }
      }
  });
  
  checkSearch = function (input) {
      for (let i = 0; i < books.length; i++) {
          let title = books[i].querySelector('h2').textContent;
  
          if (title.toUpperCase().includes(input.toUpperCase())) {
              books[i].style.display = '';
          } else {
             books[i].style.display = 'none';
          }
      }
  };
}
bookSearch();