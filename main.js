const opennav = document.getElementById("openNav");
const closenav = document.getElementById("closebtn");
const imagens = ["https://awebic.com/wp-content/uploads/2018/09/20180919-livros-autoajuda-2018-1.png",
"https://www.writersafterdark.com/wp-content/uploads/2019/12/WritersAD-42.jpg",
"https://4.bp.blogspot.com/-YAJTIc0y0PU/Vm96JDylwxI/AAAAAAAADjk/zT9tsftTCoc/s1600/hpcapas.jpg",
"https://bookhub.online/sites/default/files/romance-promo.jpg"];

let livros=[{
    capa: "https://m.media-amazon.com/images/I/51vJiEaw12L.jpg",
    titulo: "O Poder do Hábito",
    descricao: "Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los.",
    categoria: "Auto Ajuda",
    preco: 44.90 
},
{
    capa: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12101866/1000019985.jpg?v=637142221039930000",
    titulo: "Vinte Mil Léguas Submarinas",
    descricao: "Um misterioso monstro vem assombrando os oceanos. Destruindo navios e matando seua tripulantes. Publicado originalmente em 1870, Vinte mil léguas submarinas é um exemplo clássico da visão e da imaginação de Júlio Verne. O pioneirismo de sua escrita fez com que fosse reconhecido como o pai da ficção científica.",
    categoria: "Ficção Científica",
    preco: 31.00
},
{
    capa: "https://m.media-amazon.com/images/I/51ghFCcQc1L.jpg",
    titulo: "Harry Potter e as Relíquias da Morte",
    descricao: "Em Harry Potter e as Relíquias da Morte, o encontro inevitável com Lord Voldemort não pode mais ser adiado. Harry, no entanto, precisa ganhar tempo para encontrar as Horcruxes que ainda estão faltando.",
    categoria: "Fantasia",
    preco: 38.45
},
{
    capa: "https://m.media-amazon.com/images/I/5148QtE6WAL._SY346_.jpg",
    titulo: "Querido John",
    descricao: "Após uma juventude de rebeldia e bebedeira, John Tyree decidiu dar início a um novo capítulo em sua vida e se alistou no Exército. Um ano depois, agora um novo homem, ele retorna a ­Wilmington, na Carolina do Norte, para passar um tempo com o velho pai.",
    categoria: "Romance",
    preco: 15.90
},
{
    capa: "https://images-na.ssl-images-amazon.com/images/I/51BG+Wr5KDL._SX322_BO1,204,203,200_.jpg",
    titulo: "O Ladrão de Raios - Volume 1. Série Percy Jackson e os Olimpianos",
    descricao: "Em O ladrão de raios, Percy Jackson, o menino que aos doze anos descobre que é um semideus, filho de Poseidon, precisa impedir uma guerra entre os deuses que destruiria a civilização ocidental",
    categoria: "Fantasia",
    preco: 23.90
},
{
    capa: "https://images-na.ssl-images-amazon.com/images/I/51-ukCnGSxL._SX345_BO1,204,203,200_.jpg",
    titulo: "Se eu ficar",
    descricao: "Por que eu tenho a impressão de que você está prestes a mudar a minha vida?Em uma manhã de fevereiro, Mia sai para um passeio de carro. E, em um instante, tudo muda. Todas as escolhas se perderam, menos uma. A única que realmente importa",
    categoria: "Romance",
    preco: 29.90
}];
//DECLARACAO DE VARIAVEIS
let cards= document.querySelectorAll(".card");
var input = document.getElementById("search_bar");
var categorias = document.getElementById("category");
var precos = document.getElementById("price_range");

const img = document.getElementById("img");
let contador=0;
//MENU LATERAL
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  opennav.addEventListener("click",openNav);
  closenav.addEventListener("click",closeNav);
  
  //CARROSSEL
  setInterval(function(){
    if(contador<4){
        img.setAttribute("src",imagens[contador]);
        contador++;
    }
    else{
        contador =0;
    }
},4000);

//INSERCAO DE LIVROS COM CAPA, TITULO E DESCRICAO
for(let i=0; i<cards.length;i++){
    cards[i].children[0].setAttribute("src",livros[i].capa);
    cards[i].addEventListener("mouseover", function(){
        cards[i].children[1].children[0].innerHTML=livros[i].titulo;
        cards[i].children[1].children[1].innerHTML=livros[i].descricao;
    });
    cards[i].addEventListener("mouseout", function(){
        cards[i].children[1].children[0].innerHTML="";
        cards[i].children[1].children[1].innerHTML="";
    });
}
//INSERCAO DOS 3 FILTROS 
function selecionar(){
    for(let i=0;i<livros.length;i++){
        if(livros[i].categoria===categorias.value){
            cards[i].children[0].setAttribute("src",livros[i].capa);
            cards[i].addEventListener("mouseover", function(){
                cards[i].children[1].children[0].innerHTML=livros[i].titulo;
                cards[i].children[1].children[1].innerHTML=livros[i].descricao;
            });
            cards[i].addEventListener("mouseout", function(){
                cards[i].children[1].children[0].innerHTML="";
                cards[i].children[1].children[1].innerHTML="";
            });
        }
        else{
            cards[i].children[0].style.display="none";
            cards[i].children[1].children[0].style.display="none";
            cards[i].children[1].children[1].style.display="none";
        }
    }
}
categorias.addEventListener("change",selecionar);

precos.addEventListener("change",function(){
    var precoCategoria=[];
    for(let i=0;i<livros.length;i++){
        
                if(livros[i].preco>=1 && livros[i].preco<=20){
                    precoCategoria.push("barato");
                }
                else if(livros[i].preco>=21 && livros[i].preco<=40){
                    precoCategoria.push("medio");
                }
                else if(livros[i].preco>=41 && livros[i].preco<=60){
                    precoCategoria.push("caro");
                }
                else if(livros[i].preco>=61){
                    precoCategoria.push("mais caro");
                }
        
    
        if(precoCategoria[i]===precos.value){
            cards[i].children[0].setAttribute("src",livros[i].capa);
            cards[i].addEventListener("mouseover", function(){
                cards[i].children[1].children[0].innerHTML=livros[i].titulo;
                cards[i].children[1].children[1].innerHTML=livros[i].descricao;
            });
            cards[i].addEventListener("mouseout", function(){
                cards[i].children[1].children[0].innerHTML="";
                cards[i].children[1].children[1].innerHTML="";
            });
        }
        else{
            cards[i].children[0].style.display="none";
            cards[i].children[1].children[0].style.display="none";
            cards[i].children[1].children[1].style.display="none";
        }
    }
});


function teste(){
    var pegar = input.value.toUpperCase();
    console.log(pegar);
    
    for(let i=0;i<livros.length;i++){
        if(livros[i].titulo.toUpperCase().indexOf(pegar)>-1){
            cards[i].children[0].setAttribute("src",livros[i].capa);
            cards[i].addEventListener("mouseover", function(){
                cards[i].children[1].children[0].innerHTML=livros[i].titulo;
                cards[i].children[1].children[1].innerHTML=livros[i].descricao;
            });
            cards[i].addEventListener("mouseout", function(){
                cards[i].children[1].children[0].innerHTML="";
                cards[i].children[1].children[1].innerHTML="";
            });
        }
        else{
            cards[i].children[0].style.display="none";
            cards[i].children[1].children[0].style.display="none";
            cards[i].children[1].children[1].style.display="none";
        }
    }
}


