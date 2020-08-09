const btnMenu = document.getElementById("dh_menu_btn");
const mnLat = document.getElementById("menulat");
mnLat.setAttribute("style", "visibility: hidden")
function aparecerMenu(){
    console.log ("ta rolando")
    if (mnLat.style.visibility == "visible"){
        mnLat.setAttribute("style", "visibility: hidden")
    } else if (mnLat.style.visibility == "hidden"){
        mnLat.setAttribute("style", "visibility: visible")
    }
}
btnMenu.addEventListener("click", aparecerMenu)


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
let nomes=livros.map(function(n){
    return n.nome;
});
let precos=livros.map(function(p){
    return p.preco;
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
carousel();

const qualLivro = document.getElementById("search_bar");
const btBusca = document.getElementById("search_button");
const container = document.getElementById("showc")

btBusca.addEventListener("click", function(){
    container.innerHTML="";
    const resposta = livros.filter(nm => {
        return (nm.nome).toLowerCase() == (qualLivro.value).toLowerCase()
    })
    resposta.forEach(function(lv){
    let h3d = document.createElement("h3");
    let textoh3d = document.createTextNode("Encontramos seu livro!")
    let pPreco = document.createElement("p")
    let textoPreco = document.createTextNode("O preço dele é " + lv.preco)
    let imgh3d = document.createElement("img")
    imgh3d.setAttribute("src", lv.capa)
    imgh3d.setAttribute("style", "width: 300px")
    pPreco.appendChild(textoPreco)
    h3d.setAttribute("style", "fontSize: 20px")
    h3d.appendChild(textoh3d);
    h3d.appendChild(pPreco);
    document.getElementById("showc").appendChild(h3d);
    document.getElementById("showc").appendChild(imgh3d);
    })
})    




  

//     return nomes.indexOf("qualLivro")
//     }
// if (buscaPeloNome == -1) {
//     function sumir (item){
//         item.setAttribute("style", "visibility: hidden")
//     }
//     someCard.forEach(sumir)
//     let h3 = document.createElement("h3");
//     let textoh3 = document.createTextNode("Seu livro não foi encontrado")
//     h3.appendChild(textoh3);
//     document.getElementById("showc").appendChild(h3);
// } else {
//     function sumir3 (item3){
//         item3.setAttribute("style", "visibility: hidden")
// //     }
//     // someCard.forEach(sumir3)
//     let h3d = document.createElement("h3");
//     let textoh3d = document.createTextNode("Encontramos seu livro!")
//     let imgh3d = document.createElement("img")
//     imgh3d.setAttribute("src", capas[buscaPeloNome])
//     h3d.setAttribute("style", "fontSize: 20px")
//     h3d.appendChild(textoh3d);
//     document.getElementById("showc").appendChild(h3d);
//     document.getElementById("showc").appendChild(imgh3d);
// // }



