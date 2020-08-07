//Carrossel

var indice = 1;
passador(indice);

function outroSlide(indicador) {
  passador(indice += indicador);
}

function slideAtual(indicador) {
  passador(indice = indicador);
}

function passador(indicador){
    var i;
    var slide = document.getElementsByClassName("slide"); // div que contem as imagens
    var pontos = document.getElementsByClassName("bola"); // bolinhas que ficam no rodapé da imagem

    /* AS variaveis definidas a cima são da forma de arrays, por isso nesses condicionais irei pegar 
    o tamanho desse array para fazer o carrousel funcionar. Nesse primeiro if estou tratando quando o
    parâmetro dessa função for maior que a quantidade de slides ou seja, se for maior o indice será igual a 1
    se for menor o indice será igual a quantidade de slides. Para as repetiçoes, para cada slide, os outros
    ficaram com display none, assim eles não aparecerão na tela na outra repetição está sendo trocada as 
    configurações CSS*/

    if(indicador > slide.length){
        indice = 1;
    }
    if(indicador < 1){
        indice = slide.length;
    }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for(i=0; i< pontos.length; i++){
        pontos[i].className = pontos[i].className.replace(" ball-color", "")
    }
    slide[indice-1].style.display = "block";
    pontos[indice-1].className = pontos[indice-1].className + " ball-color"
}

//MENU

/*var div = document.getElementById('div');
var button = document.getElementById("dh_menu_btn");

var counter = 0;
button.onclick = function (){
    counter++;
    if(counter % 2 != 0){
        div.classList.remove("menu_escondida");
        div.classList.add("menu");
    }
    else{
        div.classList.remove("menu");
        div.classList.add("menu_escondida");
    }
}*/

function myFunction() {
    var element = document.getElementById("menu_escondido");
  
    if (element.classList) { 
      element.classList.toggle("menu");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("menu");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("menu");
        element.className = classes.join(" "); 
    }
  }

var livros = [
            {
                capa: "img/livro1.jpg",
                titulo: "JavaScript Guia do Programador",
                categoria: "Programação",
                preco: 29.90,
            },
            {
                capa: "img/livro2.jpg",
                titulo: "Aprendendo JavaScript",
                categoria: "Programação",
                preco: 76.90,
            },
            {
                capa: "img/livro3.jpg",
                titulo: "JavaScript & Jquery",
                categoria: "Programação",
                preco: 45.90,
            },
            {
                capa: "img/livro4.jpg",
                titulo: "O poder do Hábito",
                categoria: "Auto Ajuda",
                preco: 26.90,

            },
            {
                capa: "img/livro5.jpg",
                titulo: "Harry-Poter e a Pedra Filosofal",
                categoria: "Fantasia",
                preco: 47.91,
            },
            {
                capa: "img/livro6.jpg",
                titulo: "As Cronicas de Nárnia",
                categoria: "Fantasia",
                preco: 59.40,
            },
            {
                capa: "img/livro7.jpg",
                titulo: "Star Wars A Ameaça Fantasma",
                categoria: "Ficção Científica",
                preco: 41.89,
            },
            {
                capa: "img/livro8.jpg",
                titulo: "O Poder Da Ação",
                categoria: "Auto Ajuda",
                preco: 54.90,
            },
]
        
function mostraLivros () {
    document.getElementById('container').innerHTML = "";      
    const card = livros.map(livro => {
        return(
            `
            <div class="card" >
                <img src=${livro.capa} id="img">
                <div class="overlay">
                    <div class="styleDescription">
                        <h2>${livro.titulo}</h2>
                        <p>R$ ${(livro.preco)}</p>
                    </div>
                </div>
            </div>
                    `
                );
    });  
    for (let i = 0; i < card.length; i++) {
        document.getElementById('container').innerHTML += card[i];
    }   
}