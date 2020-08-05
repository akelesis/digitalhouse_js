// const btnMenu = document.getElementById("#dh_menu_btn");
// const mnLat = document.getElementById("#menulat");
// btnMenu.addEventListener("click", function(){
//     mnLat.setAttribute("right", "15px");
// })

let livro1={
    nome: "As Cidades Invisíveis" ,
    autor: "Italo Calvino",
    preco: "45.00",
    capa: "img/calvinoCidades.jpg"
}
let livro2={
    nome: "Ensaio Sobre a Cegueira" ,
    autor: "José Saramago",
    preco: "35.00",
    capa: "img/cegueira.jpg"
}
let livro3={
    nome: "Estórias Abensonhadas" ,
    autor: "Mia Couto",
    preco: "40.00",
    capa: "img/estoriasMia.jpeg"
}
let livro4={
    nome: "O Livro dos Abraços" ,
    autor: "Eduardo Galeano",
    preco: "29.00",
    capa: "img/galeanoAbracos.jpeg"
}
let livro5={
    nome: "Sobrevivente" ,
    autor: "Chuck Palahniuk",
    preco: "38.00",
    capa: "img/sobrevivente.jpeg"
}
let livro6={
    nome: "Como Ser Legal" ,
    autor: "Nick Hornby",
    preco: "25.00",
    capa: "img/legalNick.jpg"
}
let livros=[livro1, livro2, livro3, livro4, livro5, livro6]
let capas=livros.map(function(l){
    return l.capa;
});
let imgcapa1 = document.getElementById("img1car")
let imgcapa2 = document.getElementById("img2car")
let imgcapa3 = document.getElementById("img3car")
let cont1=0;
let cont2=1;
let cont3=2;
function carousel(){
    setInterval(function () {
        imgcapa1.setAttribute("src", capas[cont1]);
        imgcapa2.setAttribute("src", capas[cont2]);
        imgcapa3.setAttribute("src", capas[cont3]);
        cont1<(livros.length-1)? cont1++ : cont1=0;
        cont2<(livros.length-1)? cont2++ : cont2=0;
        cont3<(livros.length-1)? cont3++ : cont3=0;
    }, 3000);
}
carousel()