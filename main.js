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

let livrosPorCategoria = [];
let livrosPorCategoriaPreco = [];
let livroPrices = [];
let livroCategorias = [];

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
};

categoria.addEventListener('change', () => {
    limparTela();
    filtroCategoria();
});

preco.addEventListener('change', () => {
    limparTela();
    filtroPreco();
});

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
    };
    renderizarArrayNaPagina(livrosPorCategoria);
    montaListaPreco(livrosPorCategoria);
};

function limparTela(){
    showcase.innerHTML = "";
};

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
        var option = new Option(livroPrice); 
        preco.options.add(option);
    });

};

function montaListaCategoria(lista){
    lista.forEach(livro =>{
        var precoParaOption = livro.categoria; 
        if(!(livroCategorias.includes(precoParaOption))){ 
            livroCategorias.push(precoParaOption); 
        };
    });

    livroCategorias.forEach(livroCategoria => { 
        var option = new Option(livroCategoria); 
        categoria.options.add(option);
    });

};

function onLoad(){
    montaListaCategoria(livros);
    renderizarArrayNaPagina(livros);
};

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
    };
    renderizarArrayNaPagina(livrosPorCategoriaPreco);
};

