/*Aparece/Desaparece o Menu*/
const ul_menu = document.createElement("ul");
const btn_menu = document.querySelector("#dh_menu_btn");
const header = document.querySelector("header");

ul_menu.setAttribute("id", "ul_menu");
ul_menu.innerHTML += '<li><a href="index.html">Home</a></li>';
ul_menu.innerHTML += '<li><a href="https://www.digitalhouse.com/br">Quem somos</a></li>';
ul_menu.innerHTML += '<li><a href="https://www.digitalhouse.com/br/contato">Fale conosco</a></li>';

let menuOpen = false;
btn_menu.addEventListener("click", () => {

    if (menuOpen) {
        header.removeChild(ul_menu)
        menuOpen = false;
    } else if (!menuOpen) {
        header.appendChild(ul_menu)
        menuOpen = true;
    }
})

/*livros*/

let livros = [];
fetch("./resources/livros.json")
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
    let pesquisaAnterior = document.querySelectorAll(".cart-livro")
    pesquisaAnterior.forEach(cartao => {
        boxResultado.removeChild(cartao)
    })
}

function limparArrayResultado () {
    resultadoBusca = [];
}

function mostrarResultado (arrayResultado, callback) {
    limparResultadoPesquisa()

    arrayResultado.forEach(livro => {
        let cartaoLivro = document.createElement("div");
        let precoLivro = livro.Preco.toFixed(2)
        cartaoLivro.setAttribute("class", "cart-livro")
        cartaoLivro.innerHTML += `<p><b>Nome:</b> ${livro.Nome}</p>`
        cartaoLivro.innerHTML += `<p><b>Autor:</b> ${livro.Autor}</p>`
        cartaoLivro.innerHTML += `<p><b>Categoria:</b> ${livro.Categoria}</p>`
        cartaoLivro.innerHTML += `<p><b>Preço:</b> R$ ${precoLivro}</p>`
        cartaoLivro.innerHTML += `<p><b>Sipnose:</b> ${livro.Sipnose}</p>`
        /*{...livro}*/
        boxResultado.appendChild(cartaoLivro)

        callback()
    });
}



/*Filtro por nome*/
const campoBuscaNome = document.querySelector("#search_bar");
const btn_pesquisa = document.querySelector("#search_button");

function obterResultadoPorNome (callback) {
        limparResultadoPesquisa()
        let NomeBuscado = (String((campoBuscaNome.value))).toLowerCase();
        livros.forEach(livro => {
            let nomeLivro = (String(livro.Nome)).toLowerCase();
            if (NomeBuscado.length > 2 && nomeLivro.indexOf(NomeBuscado) !== -1) {
                resultadoBusca.push(livro)
                let cartaoLivro = document.createElement("div");
                let precoLivro = livro.Preco.toFixed(2)
                cartaoLivro.setAttribute("class", "cart-livro")
                cartaoLivro.innerHTML += `<p><b>Nome:</b> ${livro.Nome}</p>`
                cartaoLivro.innerHTML += `<p><b>Autor:</b> ${livro.Autor}</p>`
                cartaoLivro.innerHTML += `<p><b>Categoria:</b> ${livro.Categoria}</p>`
                cartaoLivro.innerHTML += `<p><b>Preço:</b> R$ ${precoLivro}</p>`
                cartaoLivro.innerHTML += `<p><b>Sipnose:</b> ${livro.Sipnose}</p>`
                /*{...livro}*/
                boxResultado.appendChild(cartaoLivro)
            }
        })
}



function fnBuscarLivros(){
    obterResultadoPorNome(mostrarResultado)
}

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
    
        callback(resultadoBusca, limparArrayResultado)
    }
    obterResultadoPorCategoria(mostrarResultado)
})

/* Filtro por Preço */
const preco = document.querySelector("#price_range")

preco.addEventListener("change", () => {

    function obterResultadoPorPreco (callback) {
        let precoSelecionado = preco.options[preco.selectedIndex].value;
    
        livros.forEach((livro) => {
            switch(precoSelecionado) {
                case "barato": if(livro.Preco <= 20.00) {
                    resultadoBusca.push(livro);
                }
                break;
                case "medio": if(livro.Preco > 22.00 && livro.Preco <= 45.00) {
                    resultadoBusca.push(livro)
                };
                break
                case "caro": if(livro.Preco > 46.00 && livro.Preco <= 80.00) {
                    resultadoBusca.push(livro)
                };
                break
                case "mais caro": if(livro.Preco > 100.00) {
                    resultadoBusca.push(livro)
                };
                break
            }
        })
    
        callback(resultadoBusca, limparArrayResultado)
    }
    obterResultadoPorPreco(mostrarResultado)
})