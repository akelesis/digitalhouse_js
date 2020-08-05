var book = {
  imagem: null,
  titulo: null,
  preco: null,
  categoria: null,
  descricao: null,
};
var books = [];



window.addEventListener("load", function (event) {
  addBook(
    (book = {
      imagem: "../img/HP.jpeg",
      titulo: "harry potter",
      preco: "barato",
      categoria: "Fantasia",
      descricao:
        "Harry Potter é um garoto muito serelepe que junto de seus amigos se mete em diversas enrascadas de rachar o bico",
    })
  );

  addBook(
    (book = {
      imagem: "../img/FN.jpg",
      titulo: "Felipe Neto",
      preco: "mais caro",
      categoria: "Biografia",
      descricao:
        "O maior e melhor youtuber brasileiro Felipe Neto conta como foi a sua trajetoria desde um garoto pobre vivendo no sul do afeganistão, até um dos maiores youtubers do universo",
    })
  );

  addBook(
    (book = {
      imagem: "../img/AG.jpeg",
      titulo: "AuthenticGames",
      preco: "medio",
      categoria: "comedia",
      descricao: "to com preguiça de pensar na descrição",
    })
  );

  InsertBook(books);
  carousel();
});

window.setInterval(carousel, 3000);

var currentCarouselimg = 0;
let imagesToCarousel = ["../img/saldaoDH1.png", "../img/melhoresLivros.jpg"];

function carousel() {
  
  let imgCarousel = document.getElementById("imgCarousel");

  imgCarousel.src = imagesToCarousel[currentCarouselimg];

  currentCarouselimg++;

checkCarousel();
  
}

const buttonColapse = document.getElementById("dh_menu_btn");

buttonColapse.addEventListener("click",colapseMenu)

//menu copalsável
function colapseMenu(){

let colapse = true;

colapse = !colapse;

if (colapse){
  closeNav();
}
else{openNav();}

}


function openNav() {
  document.getElementById("Sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

function checkCarousel(){
  if (currentCarouselimg >= imagesToCarousel.length) {
    currentCarouselimg = 0;
  }

  if (currentCarouselimg < 0){
    currentCarouselimg = imagesToCarousel.length-1;
  }
}

/*buttons[0].addEventListener("click", ()=>{

currentCarouselimg--;

document.getElementById("imgCarousel").src = imagesToCarousel[currentCarouselimg];
checkCarousel()


})
buttons[1].addEventListener("click", ()=>{

  currentCarouselimg++;
  document.getElementById("imgCarousel").src = imagesToCarousel[currentCarouselimg];
  checkCarousel()

  })
*/

//a partir daqui é pra inserir os livros
function addBook(objeto) {
  return books.push(objeto);
}

function InsertBook(books) {
  for (let i = 0; i < books.length; i++) {
    inner(books[i]);
  }
}

  function inner(objeto) {
   
    let livro = document.createElement("div");
    let overlay = document.createElement("div");
    let livroCapa = document.createElement("img");
    let TituloLivro = document.createElement("h2");
    let descricaoLivro = document.createElement("p");
    let Showcase = document.getElementById("showcase");

    livro.classList.add("card");
    livroCapa.classList.add("capa");
    overlay.classList.add("overlay");

    livroCapa.src = objeto.imagem;
    TituloLivro.innerText = objeto.titulo;
    descricaoLivro.innerText = objeto.descricao;

    Showcase.appendChild(livro);
    livro.appendChild(livroCapa);
    livro.appendChild(overlay);
    overlay.appendChild(TituloLivro);
    overlay.appendChild(descricaoLivro);
  }

//sistema de pesquisa

let searchBar = document.getElementById("search_bar").value
let searchCategoty = document.getElementById("category").value
let searchPrice = document.getElementById("price_range").value

let searchbutton = document.getElementById("search_button");



 searchbutton.addEventListener("click",() => {pesquisa(searchBar,searchCategoty,searchPrice)})


function pesquisa(name, category, price){
  let livrosFiltrados = [];
  

  for(let i = 0; i< books.length; i++){

    let nameInc, categoryInc, priceInc
    
    if(name != undefined){
     nameInc = books[i].titulo.includes(name);

    }

    else{nameInc = true}

    if(category != ""){
     categoryInc = books[i].categoria.includes(category);

    }
    else{categoryInc = true}

    if(price != ""){

    priceInc =  books[i].preco.includes(price);

    }
    else{priceInc = true}
    

    if(nameInc && categoryInc && priceInc){
    livrosFiltrados.push(books[i]);

    }
    }
    if (livrosFiltrados.length > 0){

      console.log(livrosFiltrados);
      let showcase = document.getElementById("showcase");
    //  showcase.classList.add("invisivel");
  }
  }

