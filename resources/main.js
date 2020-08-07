/*Aparece/Desaparece o Menu*/
const ul_menu = document.createElement("ul");
const btn_menu = document.querySelector("#dh_menu_btn");
const header = document.querySelector("header");

ul_menu.setAttribute("id", "ul_menu");
ul_menu.innerHTML += '<li><a href="index.html">Home</a></li>';
ul_menu.innerHTML += '<li><a href="https://www.digitalhouse.com/br">Quem somos</a></li>';
ul_menu.innerHTML += '<li><a href="https://www.digitalhouse.com/br/contato">Fale conosco</a></li>';

let menuIsOpen = false;
btn_menu.addEventListener("click", () => {

    if (menuIsOpen) {
        header.removeChild(ul_menu)
        menuIsOpen = false;
    } else if (!menuIsOpen) {
        header.appendChild(ul_menu)
        menuIsOpen = true;
    }
})

/* Carrossel de imagens */
const carrossel = document.querySelector("#dh_carousel")
let margin = -300;

setInterval(() => { 
    if (margin > 0) {
        margin = -300;
    }

    carrossel.style.marginLeft = `${margin}%`
    margin+=0.1
}, 10);

/*livros*/
let livros = [];
fetch("resources/livros.json")
    .then(res => res.json())
    .then(data => {
        for (livro of data) {
            livros.push(livro)
        }
    }).catch((err) => console.log(err));

/*FILTROS*/
let resultadoBusca = [];
const boxResultado = document.getElementById("respesquisa")

function limparResultadoPesquisa () {
    let pesquisaAnterior = document.querySelectorAll(".cartao-livro")
    pesquisaAnterior.forEach(cartao => {
        boxResultado.removeChild(cartao)
    })
}

function limparArrayResultado () {
    resultadoBusca = [];
}

function mostrarResultado (arrayResultado) {
    limparResultadoPesquisa()

    arrayResultado.forEach(livro => {
        let cartaoLivro = document.createElement("div");
        cartaoLivro.setAttribute("class", "cartao-livro")
        cartaoLivro.innerHTML += `<p><b>Nome:</b> ${livro.Nome}</p>`
        cartaoLivro.innerHTML += `<p><b>Autor:</b> ${livro.Autor}</p>`
        cartaoLivro.innerHTML += `<p><b>Categoria:</b> ${livro.Categoria}</p>`
        cartaoLivro.innerHTML += `<p><b>Preço:</b> R$ ${livro.Preco}0</p>`
        cartaoLivro.innerHTML += `<p><b>Sipnose:</b> ${livro.Sipnose}</p>`
        /*{...livro}*/
        boxResultado.appendChild(cartaoLivro)
    });
}

/*Filtro por nome*/
const campoBuscaNome = document.querySelector("#search_bar");
const btn_pesquisa = document.querySelector("#search_button");

campoBuscaNome.addEventListener("input", () => {
    let NomeBuscado = (String((campoBuscaNome.value))).toLowerCase();

    function obterResultadoPorNome (callback) {
    
        livros.forEach(livro => {
            let nomeLivro = (String(livro.Nome)).toLowerCase();
            if (NomeBuscado.length > 2 && nomeLivro.indexOf(NomeBuscado) !== -1) {
                resultadoBusca.push(livro)
            }
        })
        callback(resultadoBusca)
    }

    obterResultadoPorNome(mostrarResultado)
    limparArrayResultado()
})

btn_pesquisa.addEventListener("click", () => {
    if(resultadoBusca.length === 0) {
        alert("Livro não encontrado.")
    }
})

/* Filtro por Categoria */
const categoria = document.querySelector("#category")

categoria.addEventListener("change", () => {

    function obterResultadoPorCategoria (callback) {
        let categoriaSelecionada = categoria.options[categoria.selectedIndex].value;
    
        livros.forEach((livro) => {
            if(livro.Categoria == categoriaSelecionada) {
                resultadoBusca.push(livro)
            }
        })
    
        callback(resultadoBusca)
    }
    obterResultadoPorCategoria(mostrarResultado)
    limparArrayResultado()
})

/* Filtro por Preço */
const preco = document.querySelector("#price_range")

preco.addEventListener("change", () => {

    function obterResultadoPorPreco (callback) {
        let precoSelecionado = preco.options[preco.selectedIndex].value;
    
        livros.forEach((livro) => {
            switch(precoSelecionado) {
                case "barato": if(livro.Preco <= 20) {
                    resultadoBusca.push(livro);
                }
                break;
                case "medio": if(livro.Preco > 20 && livro.Preco <= 40) {
                    resultadoBusca.push(livro)
                };
                break
                case "caro": if(livro.Preco > 40 && livro.Preco <= 60) {
                    resultadoBusca.push(livro)
                };
                break
                case "mais caro": if(livro.Preco > 60) {
                    resultadoBusca.push(livro)
                };
                break
            }
        })
    
        callback(resultadoBusca)
    }
    obterResultadoPorPreco(mostrarResultado)
    limparArrayResultado()
})