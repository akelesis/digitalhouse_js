/**
    ___________________________

      CONSTANTES E VARIAVEIS
    ___________________________
 
*/

const livros = [
    {
        nome:"Livro 1",
        sobre:"Sobre 1",
        autor:"Autor 1",
        categoria:"Categoria 1",
        preco:{
            categoriaPrice:"caro",
            valor:22.00
        }
    },
    {
        nome:"Livro 2",
        sobre:"Sobre 2",
        autor:"Autor 2",
        categoria:"Categoria 2",
        preco:{
            categoriaPrice:"caro",
            valor:20.00
        }    
    },
    {
        nome:"Livro 3",
        sobre:"Sobre 3",
        autor:"Autor 2",
        categoria:"Categoria 2",
        preco:{
            categoriaPrice:"medio",
            valor:21.00
        }
    },
];

const showcase = document.querySelector('.showcase');
const categoria = document.querySelector("#category");
const preco = document.querySelector("#price_range");
const carousel = document.querySelector("#img_carousel");
const searchButton = document.querySelector("#search_button");
const menuBotao = document.querySelector("#dh_menu_btn");
const menu = document.querySelector("#dh_menu");
const time = 2000;

let buscanome = document.querySelector("#search_bar");
let livrosPorCategoria = livros;
let livrosPorCategoriaPreco = [];
let livroPrices = [];
let livroCategorias = [];
let arrayLivros = [];
let clicks = 0;

/**
    ___________________________

        EVENTS LISTNERS
    ___________________________
 
*/

categoria.addEventListener('change', () => {
    limparTela();
    filtroCategoria();
});

preco.addEventListener('change', () => {
    limparTela();
    filtroPreco();
});

searchButton.addEventListener('click', () =>{
    filtroNome();
});

buscanome.addEventListener('keydown', (key) =>{
    if (key.keyCode === 13) {
        filtroNome();
    }
});

menuBotao.addEventListener('click', () =>{
    clicksMenu();
});

/**
    _____________________________

    FUNCTIONS RENDERIZAR ARRAY
    _____________________________
 
*/

function onLoad(){
    montaListaCategoria(livros);
    renderizarArrayNaPagina(livros);
    fechaMenu();
    sliderConfiguracao();
    slider();
}

function limparTela(){
    showcase.innerHTML = "";
}

function renderizarArrayNaPagina(livrosfiltrados) {
    livrosfiltrados.forEach(livro => {

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const tituloLivro = document.createElement("h2");
        tituloLivro.innerHTML = livro.nome;

        const precoLivro = document.createElement("h3");
        precoLivro.innerHTML = livro.preco.valor;

        card.appendChild(tituloLivro);
        card.appendChild(precoLivro);
        showcase.appendChild(card);
    });
}

/**
    _____________________________

    FILTROS CATEGORIA, PRECO E
            BUSCA NOME
    _____________________________
 
*/

function filtroCategoria(){
    if(categoria.value === 'todos'){
        livrosPorCategoria = [];
        livrosPorCategoria = livros;
    }else{
        livrosPorCategoria = [];
        livros.forEach(livro => {
            if(categoria.value === livro.categoria){
                livrosPorCategoria.push(livro);
            }
        });
    }
    renderizarArrayNaPagina(livrosPorCategoria);
    montaListaPreco(livrosPorCategoria);
}

function filtroPreco(){
    if(preco.value === 'todos'){
        livrosPorCategoriaPreco = [];
        livrosPorCategoriaPreco = livrosPorCategoria;
    }else{
        livrosPorCategoriaPreco = [];
        livrosPorCategoria.forEach(livro => {
            if(preco.value === livro.preco.categoriaPrice){
                livrosPorCategoriaPreco.push(livro);
            }
        });
    }
    renderizarArrayNaPagina(livrosPorCategoriaPreco);
}

function filtroNome(){
    populaFiltro();
    if (buscanome.value != ""){ 
        arrayLivros = arrayLivros.filter(livro => {
            return livro.nome.toUpperCase().indexOf(buscanome.value.toUpperCase()) != -1;
        });

        limparTela();

        if(arrayLivros.length == 0){
            var erroRetorno = "Nenhum livro encontrado!";
            alert(erroRetorno);
            populaFiltro();
        }
        renderizarArrayNaPagina(arrayLivros);
    }
}

/**
    _____________________________

       FUNCTIONS SELECT INPUT 
       RENDERIZADO PELO ARRAY
        PRECO E CATEGORIA
    _____________________________
 
*/

function montaListaPreco(lista){
    while (preco.options.length) {
        preco.remove(0);
    }

    lista.forEach(livro =>{ 
        var precoParaOption = livro.preco.categoriaPrice;
        if(!(livroPrices.includes(precoParaOption))){  
            livroPrices.push(precoParaOption); 
        };
    });

    var defaults = new Option("Todos", "todos"); 
    preco.options.add(defaults);

    livroPrices.forEach(livroPrice => { 
        var option = new Option(primeiraLetraUpperCase(livroPrice), livroPrice); 
        preco.options.add(option);
    });

}

function montaListaCategoria(lista){
    lista.forEach(livro =>{
        var categoriaParaOption = livro.categoria; 
        if(!(livroCategorias.includes(categoriaParaOption))){ 
            livroCategorias.push(categoriaParaOption); 
        }
    });

    livroCategorias.forEach(livroCategoria => { 
        var option = new Option(primeiraLetraUpperCase(livroCategoria), livroCategoria); 
        categoria.options.add(option);
    });

}

/**
    _____________________________

       FUNCTIONS ADICIONAIS 
        IMPLEMENTAM FUNCTIONS
            ANTERIORES
    _____________________________
 
*/

function populaFiltro(){
    if(livrosPorCategoriaPreco.length > 0){
        arrayLivros = livrosPorCategoriaPreco;
    }else{
        arrayLivros = livrosPorCategoria;
    }
}

function primeiraLetraUpperCase(palavra){
    return palavra
            .charAt(0)
            .toUpperCase() + palavra.slice(1);
}

/**
    _____________________________

        FUNCTIONS CAROUSEL
    _____________________________
 
*/

function slider(){
    carousel.src="https://image.freepik.com/vetores-gratis/fundo-retangular-embacado-de-rosa-claro-vector-azul_6869-86.jpg";
    setTimeout("sliderOne()", time)
}
    
function sliderOne(){
    carousel.src="https://image.freepik.com/vetores-gratis/design-de-fundo-embacado-triangulo-rosa-vetor-azul_6869-2192.jpg";
    setTimeout("slider()", time)
}

function sliderConfiguracao() {
    carousel.style.height = "60vh";
    carousel.style.width = "100%";
}

/**
    _____________________________

        FUNCTIONS NAVBAR
    _____________________________
 
*/

function clicksMenu(){
    clicks += 1;

    if((clicks % 2) != 0){
        abreMenu();
    }else{
        fechaMenu();
    }
}

function abreMenu(){
    console.log("abriu");
    menu.style.visibility = "visible";
}

function fechaMenu(){
    console.log("fechou");
    menu.style.visibility = "hidden";
}

