/*iniciando o trabalho*/

var pictures=["./img/livraria1.jpg","./img/livraria2.jpg","./img/livraria3.jpg"];

var currentImage;
var maxIMG;


/* function preLoad(){
    var l=1;
    for(var i=0;i<2;i++){
        pictures[i]=new Image();
        pictures[i].src="./img/livraria"+l+".jpg";
        l++;
    }
} */

function loadImage(img){
    carousel.style.backgroundImage="url('"+pictures[img].src+"')";
}

let i=0;


const carousel=document.getElementById("imagens_carousel");
setInterval(function (){
    carousel.style.backgroundImage="url('"+pictures[i]+"')"
    console.log()
    i++;
    if(i>pictures.length-1){
        i=0;
    }
}, 3000);

const positionOne = document.getElementById("positionOne").classList.add("bookOne")
const positionTwo = document.getElementById("positionTwo").classList.add("bookTwo")
const positionThree = document.getElementById("positionThree").classList.add("bookThree")
const positionfour = document.getElementById("positionFour").classList.add("bookFour")
const positionFive = document.getElementById("positionFive").classList.add("bookFive")
const positionSix = document.getElementById("positionSix").classList.add("bookSix")

let books = [];

fetch("livros.json").then(res => res.json()).then(res => books=res);

function searchName(bookName){
for (var i = 0; i < books.length; i++){
    var cont = 0;
    if (books[i].nome == bookName){
        cont++;
    }
    
    }
    return cont;
  }

function getName(){
    var txt = document.getElementById("search_bar").value;
    alert(searchName(txt));
    
}