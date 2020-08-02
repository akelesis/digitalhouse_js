const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const botao = document.getElementById("dh_menu_btn");
const busca = document.getElementById("search_button");
const searchBar = document.getElementById("search_bar");



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
    { "titulo": "David", "desc": "7a", "url": "./img/300x400.png" },
    { "titulo": "Jose", "desc": "8a", "url": "./img/300x400.png" },
    { "titulo": "Mariana", "desc": "7a", "url": "./img/300x400.png" },
    { "titulo": "David", "desc": "8a", "url": "./img/300x400.png" },
    { "titulo": "Lucas", "desc": "9a", "url": "./img/300x400.png" },
];

searchBar.getAttribute("value");
busca.addEventListener("click", function() {
    var textoBusca = searchBar.value.toUpperCase();
    console.log("busca: " + textoBusca);


    var resultadoBusca = livros.filter(function(livros) {
        return (livros.titulo.toUpperCase() == textoBusca);
    });
    console.log(resultadoBusca);
})