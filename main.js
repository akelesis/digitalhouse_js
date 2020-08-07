const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const botao = document.getElementById("dh_menu_btn");
const busca = document.getElementById("search_button");
const searchBar = document.getElementById("search_bar");
const bookCase = document.getElementById("bookCase");
const showcase = document.getElementsByClassName("showcase");
const body = document.querySelector("body")
    // const menu = document.getElementById("menuLateral");

function openCloseMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("menu_overlay");
    var styles = window.getComputedStyle(menu);
    console.log("fui clicado")

    if (styles.right === "-270px") {
        menu.style.right = "0px";
        overlay.style.display = "block";
    } else {
        menu.style.right = "-270px";
        overlay.style.display = "none";
    }
}

// function ativaBotaoMenu() {

//     var styles = window.getComputedStyle(menu);

//     if (styles.right === "-270px") {
//         menu.style.right = "0px";
//     } else {
//         menu.style.right = "-270px";
//     }

// }

botao.addEventListener("click", function() {

    // ativaBotaoMenu();
    openCloseMenu();
})


function mudaImagem() {
    // console.log("O status é: " + slide1.hasAttribute("checked"));
    // console.log("O status é: " + slide2.hasAttribute("checked"));
    // console.log("O status é: " + slide3.hasAttribute("checked"));
    // console.log(slide1);
    // console.log(slide2);
    // console.log(slide3);

    if (slide1.hasAttribute("checked")) {
        slide1.removeAttribute("checked");
        slide2.setAttribute("checked", true)

    } else if (slide2.hasAttribute("checked")) {
        slide2.removeAttribute("checked");
        slide3.setAttribute("checked", true)

    } else if (slide3.hasAttribute("checked")) {
        slide3.removeAttribute("checked");
        slide1.setAttribute("checked", true)
    }

}
setInterval(mudaImagem, 5000);

var livros = [
    { titulo: "A Garota do Lago", desc: "Charlie Donlea", url: "./img/img1.jpg" },
    { titulo: "Essa Gente", desc: "Chico Buarque", url: "./img/img2.jpg" },
    { titulo: "O Conta da Aia", desc: "Margaret Atwood", url: "./img/img3.jpg" },
    { titulo: "O Homem de Giz", desc: "C.J. Tudor", url: "./img/img4.jpg" },
    { titulo: "Anne de Green Gables", desc: "Montgomery Lucy Maud", url: "./img/img5.jpg" },
    { titulo: "As Aventuras de Mike", desc: "Gabriel Dearo e Manu Digillio", url: "./img/img6.jpg" },
];

searchBar.getAttribute("value");
busca.addEventListener("click", function() {
    limpaPesquisa();
    var textoBusca = searchBar.value.toUpperCase();
    console.log("busca: " + textoBusca);

    if (textoBusca.length == 0) {
        resultadoBusca = livros;
    } else {

        var resultadoBusca = livros.filter(function(livros) {
            return (livros.titulo.toUpperCase() == textoBusca);
        });

    }

    console.log(resultadoBusca);

    listarLivros(resultadoBusca);



})

function limpaPesquisa() {
    var Cards = document.getElementsByClassName("card");
    console.log(Cards.length)
    while (Cards.length > 0) {
        Cards[0].parentNode.removeChild(Cards[0]);
    }
}

function listarLivros(arrayLivros) {



    arrayLivros.forEach(livro => {

        var livroBox = document.createElement("div");
        livroBox.setAttribute("class", "card");
        livroBox.innerHTML =
            `<img width=300 height=400 src=${livro.url} >
                    <div class="overlay">
                        <h2 class="formatoTitulo">${livro.titulo}</h2>
                        <p class="formatoAutor">${livro.desc}</p>
                    </div>`
        bookCase.appendChild(livroBox);


    })


}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    listarLivros(livros);
});