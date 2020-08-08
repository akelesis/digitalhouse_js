var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
//ARRAY DE LIVROS
const livros=[
    {
        nome:'Arquitetura Limpa',
        categoria:'Auto Ajuda',
        preco:120
    },
    {
        nome:'Programacao em C++',
        categoria:'Ficcao Cientifica',
        preco:60
    },
    {
        nome:'Mysql',
        categoria:'Fantasia',
        preco:35
    },
    {
        nome:'Java Como Programar',
        categoria:'Romance',
        preco:15
    },
    {
        nome:'Javascript e Jquery',
        categoria:'Auto Ajuda',
        preco:250
    }
];
//FIM DO ARRAY DE LIVROS

/*BUSCA POR TEXTO*/
function busca(){
    var campo = document.getElementById('search_bar');
    const postUser1 = livros.filter((item)=>{
        return item.nome===campo.value;
        
    });
    if (postUser1.length>0) {
        /*console.log(...postUser1);*/
        console.log(postUser1);
        document.getElementById('nome').innerHTML= postUser1[0].nome;
        document.getElementById('descricao').innerHTML= "Valor: "+ "R$"+postUser1[0].preco;
    } else {
        window.alert("NADA FOI LOCALIZADO");
        document.getElementById('search_bar').value='';
    }
}
/*FIM BUSCA POR TEXTO*/

/* IMPRIMIR NO HTML -- NAO CONSEGUI FUNCIONAR :( */
function gerar(){
    let lista = document.getElementById('divResult');
    for(var i = 0; i < postUser1.length; i++){
        let item2 = document.createElement('h2');
        item2.appendChild(document.createTextNode(postUser1[i].nome));
        document.getElementById('divResult').appendChild(item2);
        lista.appendChild(item2);
    }
}
/* FIM IMPRIMIR NO HTML */


//CARROSSEL
function load(){
    var s=1;
    for(var i=0;i<5;i++){
        imgs[i]= new Image();
        imgs[i].src="img/pic" +s+".jpg";
        s++;

    }

}
function carregarImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";

}
function inicia(){
    load();
    imgAtual=0;
    maxImg=imgs.length-1;
    slider=document.getElementById("dh_carouselFoto");
    carregarImg(imgAtual);
    tmp=setInterval(troca,3000);
}
function troca(){
    imgAtual++;
    if(imgAtual>maxImg){
        imgAtual=0;
    }
    carregarImg(imgAtual);

}
window.addEventListener("load", inicia);
//FIM CARROSSEL

//FUNÇÃO DO BOTAO EXIBE E OCULTA MENU
function mostra(){
    if (document.getElementById('menu').style.display=='block'){
        document.getElementById('menu').style.display='none';
    }else{
            document.getElementById('menu').style.display='block';
        }
    
}
//DIM DA FUNÇÃO DO BOTAO EXIBE E OCULTA MENU