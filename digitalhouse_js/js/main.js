//Fazendo o caroseul
var images = [];
var i = 0;
var time = 3000;
var ft = document.querySelector("img#foto")
images[0] = "../img/Livro-01.jpg"
images[1] = "./img/Livro-02.jpg"
images[2] = "./img/Livro-03.jpg"

function mudarimg() {
ft.src = images[i];
if( i < images.length - 1) {
  i++;
} else {
  i = 0;
}
setTimeout("mudarimg()", time);
}
window.onload = mudarimg;

//Menu Lateral
var aberto = false;
function btnMenu(){
  if(aberto == false){
    document.querySelector("div#dh_menu").style.visibility = "visible";
    aberto = true;
  }else{
    document.querySelector("div#dh_menu").style.visibility = "hidden";
    aberto = false;
  }
}

//filtro de livros