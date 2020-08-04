//Clique Menu
const menuArea = document.getElementById("dh_menu_btn");
menuArea.addEventListener("click", showHideMenu, false);

//Função mostrar/esconder menu
function showHideMenu(){
    let menuOpened = document.getElementById("menu");
    if(menuOpened.style.display == 'block'){
        menuOpened.style.display = 'none';
    }else{
        menuOpened.style.display = 'block';
    }
}

//CRIANDO CARROSSEL

var imgs = [];
var slider;
var imgAtual;
var imgMax;
var tempo, tempoTroca;


//PRE CARREGAMENTO DAS IMAGENS
function preCarregamento(){
    let b =  1;
    for(var i = 0; i < 5; i++){
        imgs[i] = new Image();
        imgs[i].src = "img/books"+b+".jpg";
        b++;
    }
}

//CARREGA IMAGEM PARA O CARROSSEL
function carregarImg(img){
    slider.style.background = "url('"+imgs[img].src+"')";
    slider.style.backgroundSize = "100% 100%";
}

//INICIA
function init(){
    preCarregamento();
    imgAtual = 0;
    imgMax = imgs.length - 1;
    slider = document.getElementById("dh_carousel");
    carregarImg(imgAtual);
    tempoTroca = 3000;
    tempo = setInterval(trocarImagem, tempoTroca); //INTERVALO DE 3 SEGUNDOS
}

//TROCA IMAGEM DO CARROSSEL
function trocarImagem(){
    imgAtual++;
    if(imgAtual > imgMax)
        imgAtual = 0;
    carregarImg(imgAtual);
}

//inicia ao carregar a janela no navegador
window.addEventListener("load", init);