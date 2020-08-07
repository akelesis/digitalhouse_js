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
    if(i>2){
        i=0;
    }
}, 3000);







/* Carregando imagem
const carrousel = document.getElementById("imagens_carousel");
function carregaFoto(){
    carrousel.style.backgroundImage="url('./img/livraria1.jpg')"
}
carrousel.addEventListener("load", carregaFoto());
*/