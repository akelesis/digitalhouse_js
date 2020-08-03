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

livros = [ 
  {Titulo: "Anna Karienina", img: "./img/AnnaKarienina.jpg", valor: 70.00, gênero: "Romance" },
  {Titulo: "O morro dos ventos uivantes", img: "./img/oMorroDosVentosUivantes.jpg", valor: 35.00, gênero: "Romance" },
  {Titulo: "O nome do vento", img: "./img/oNomeDoVento.jpg", valor: 40.00, gênero: "Fantasia" },
  {Titulo: "O temor do sabio", img: "./img/oTemorDoSabio.jpg", valor: 35.00, gênero: "Fantasia" },
  {Titulo: "A musica do silêncio", img: "./img/aMusicaDoSilencio.jpg", valor: 30.00, gênero: "Fantasia" },
  {Titulo: "Orgulho e preconceito", img: "./img/OrgulhoEPreconceito.jpg", valor: 50.00, gênero: "Romance" }
]

const troca = document.querySelectorAll("h2")
const troca1 = document.querySelectorAll(".imglivro")
const troca2 = document.querySelectorAll("p")
  for ( let i = 0; i < troca.length; i++){
  troca[i].innerHTML = livros[i].Titulo
  troca1[i].src = livros[i].img
  troca2[i].innerHTML = "valor: R$:" + livros[i].valor +" gênero: " + livros[i].gênero
};
