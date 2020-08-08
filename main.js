
//Carrosel
function slide1() {
    document.getElementById("imagens-carousel").src = "img/img-01.jpg";
    setTimeout("slide2()", 5000);
}

function slide2() {
    document.getElementById("imagens-carousel").src = "img/img-02.jpg";
    setTimeout("slide3()", 5000);
}

function slide3() {
    document.getElementById("imagens-carousel").src = "img/img-03.jpg";
    setTimeout("slide1()", 5000);
}


//Menu
let menu = document.getElementById("menu");
let btnMenu = document.getElementById("dh_menu_btn");

let menuIsOpen = false;
btnMenu.addEventListener("click", () => {

    if (menuIsOpen) {
        menu.removeAttribute("class");
        menuIsOpen = false;
    }
    else if (!menuIsOpen) {
        menu.setAttribute("class", "hidden");
        menuIsOpen = true;
    }
});

let livros = [
    {
        titulo: "Percy Jackson O Ladrão de Raios",
        idCategoria: "3",
        categoria: "Fantasia",
        preco: "barato",
        imagem: "./img/pj-ladrao.png"
    },
    {
        titulo: "Percy Jackson O Mar de Monstros",
        idCategoria: "3",
        categoria: "Fantasia",
        preco: "barato",
        imagem: "./img/pj-mar-de-monstros.png"

    },
    {
        titulo: "Um dia",
        idCategoria: "4",
        categoria: "Romance",
        preco: "caro",
        imagem: "./img/um-dia.png"
    },
    {
        titulo: "Pare de se Odiar",
        idCategoria: "1",
        categoria: "Auto Ajuda",
        preco: "medio",
        imagem: "./img/pare-odiar.png"
    },
    {
        titulo: "2001: Uma Odisséia no Espaço",
        idCategoria: "2",
        categoria: "Ficção Científica",
        preco: "caro",
        imagem: "./img/2001.png"
    },
    {
        titulo: "Escuridão Total Sem Estrelas",
        idCategoria: "5",
        categoria: "Terror",
        preco: "mais caro",
        imagem: "./img/escuridao-total.png"
    }
];

//Filtros
let cardPesquisados = document.getElementById("card-pesquisados");
function limpaPesquisa() {
    let livro = document.getElementById("livro");
    cardPesquisados.removeChild(livro);
}

function exibeLivro(valorPesquisa) {
    let livroPesquisado = document.createElement("div");
    livroPesquisado.setAttribute("id", "livro");
    livroPesquisado.innerHTML = `<h3>${valorPesquisa.titulo}</h3>`;
    livroPesquisado.innerHTML += `<p> Categoria: ${valorPesquisa.categoria}</p>`;
    livroPesquisado.innerHTML += `<img src=${valorPesquisa.imagem}>`;

    cardPesquisados.appendChild(livroPesquisado);



};

//Filtro por Nome
let botaoPesquisa = document.getElementById("search_button");
let inputPesquisa = document.getElementById("search_bar");
inputPesquisa.addEventListener("input", function (input) {
    let nomeLivro = input.target.value.toLowerCase();
    livros.forEach(livro => {
        if (nomeLivro == livro.titulo.toLowerCase()) {
            exibeLivro(livro);
        }
        if (inputPesquisa.value == "") {
            limpaPesquisa();
        }
    });
});

//Filtro por categoria
let selectCategoria = document.getElementById("category");
selectCategoria.addEventListener("click", () => {
    livros.forEach(livro => {
        if (selectCategoria.options[selectCategoria.selectedIndex].value == livro.categoria) {
            exibeLivro(livro);
        }
    });
});

//Filtro por preço
let selectPreco = document.getElementById("price_range");
selectPreco.addEventListener("click", () => {
    livros.forEach(livro => {
        if(selectPreco.options[selectPreco.selectedIndex].value == livro.preco) {
            exibeLivro(livro);
        }
    });
});



