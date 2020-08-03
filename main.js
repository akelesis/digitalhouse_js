var carrossel_imgs = ["img/anorlondo.jpg","img/anorlondo_2.jpg","img/anorlondo_3_3.jpg"]
var carrossel = document.getElementById("dh_carousel");
var i = 0;

    setInterval(function(){

        console.log(i)
        carrossel.style.backgroundImage = "url("+carrossel_imgs[i]+")";
        if(i>=2){
            i = 0;
        }else {i++}

    }, 3000);

var btnMenu = document.getElementById("dh_menu_btn");
var blockMenu = document.getElementById("menuLateral");
var folha = document.getElementById("folha");

    btnMenu.addEventListener("click",function(){
        blockMenu.style.width = "260px"
        folha.style.width = "100%"
    });

    folha.addEventListener("click",function(){
        blockMenu.style.width = "0px"
        folha.style.width = "0"
    });

var livro = {

    nome: "Harry Potter",
    descricao: "Harry Potter e a Pedra Filosofal é o primeiro dos sete livros da série de fantasia Harry Potter, escrita por J. K. Rowling. O livro conta a história de Harry Potter, um órfão criado pelos tios que descobre, em seu décimo primeiro aniversário, que é um bruxo.",
    preco : 10.00,
    capa: "img/capa1.jpg"

};
var livro_2 = {

    nome: "The Witcher",
    descricao: "O Último Desejo é o primeiro dos dois livros que colecionam contos do escritor de fantasia Andrzej Sapkowski e que antecedem os romances da série Wiedźmin. ",
    preco : 10.00,
    capa: "img/capa2.jpg"

};
var livro_3 = {

    nome: "Senhor dos aneis",
    descricao: "O Senhor dos Anéis, escrita pelo professor e filólogo britânico J. R. R. Tolkien. Narra o início da história do Um Anel, tendo como principal aspecto a formação de uma Sociedade que deveria levar o Anel para a Montanha da Perdição a fim de destrui-lo.",
    preco : 10.00,
    capa: "img/capa3.jpg"

};
var livro_4 = {

    nome: "Eragon",
    descricao: "Eragon é o primeiro livro da tetralogia Ciclo da Herança escrita por Christopher Paolini. Depois de escrever o primeiro rascunho por um ano, Paolini passou um segundo ano reescrevendo e detalhando a história e os personagens.",
    preco : 10.00,
    capa: "img/capa4.jpg"

};
var livro_5 = {

    nome: "Prince of Thorns",
    descricao: "Tem início a Trilogia dos Espinhos... Ainda criança, o príncipe Honório Jorg Ancrath testemunhou o brutal assassinato da Rainha mãe e de seu irmão caçula, William. Jorg não conseguiu defender sua família nem fugir do horror.",
    preco : 10.00,
    capa: "img/capa5.jpg"

};
var livro_6 = {

    nome: "A Rainha Vermelha",
    descricao: "Mare Barrow é uma Vermelha que vive com os pais e a irmã mais nova, Gisa; enquanto seus três irmãos mais velhos, Bree, Tramy e Shade estão atualmente servindo no front de uma guerra entre o Reino de Lakeland e o Reino de Norta, que é onde os Barrow's moram e que é governado pelo rei Tiberias Calore VI, um Prateado com poderes de fogo.",
    preco : 10.00,
    capa: "img/capa6.jpg"

};
var arrayLivros = [livro, livro_2, livro_3, livro_4, livro_5, livro_6];
var exemplar = document.getElementsByClassName("card");

/*Imagem da capa do livro*/ 
//exemplar[0].childNodes[1].src= "img/capa1.jpg";

/* Nome do livro*/ 
//exemplar[0].children[1].children[0].innerText = "Nome do livro";

/* Descricao do livro*/
//exemplar[0].children[1].children[1].innerText = "Descricao do livro";

for(let i = 0; i<exemplar.length; i++){

    exemplar[i].childNodes[1].src = arrayLivros[i].capa
    exemplar[i].children[1].children[0].innerText = arrayLivros[i].nome;
    exemplar[i].children[1].children[1].innerText = arrayLivros[i].descricao;

}