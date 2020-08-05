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
const carrossel = document.querySelector("#dh_carousel");

let imgN = 2;
function trocaImagem() {
    if (imgN === 4) { imgN = 1 }
    carrossel.innerHTML = `<img src="img/livros${imgN}.jpeg" class="img-livros">`
    imgN++
}
setInterval(trocaImagem, 5000)

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

function mostrarResultado (arrayResultado) {

    let pesquisaAnterior = document.querySelectorAll(".cartao-livro")
    pesquisaAnterior.forEach(cartao => {
        boxResultado.removeChild(cartao)
    })

    arrayResultado.forEach(livro => {
        let cartaoLivro = document.createElement("div");
        cartaoLivro.setAttribute("class", "cartao-livro")
        cartaoLivro.innerHTML += `<p><b>Nome:</b> ${livro.Nome}</p>`
        cartaoLivro.innerHTML += `<p><b>Autor:</b> ${livro.Autor}</p>`
        cartaoLivro.innerHTML += `<p><b>Categoria:</b> ${livro.Categoria}</p>`
        cartaoLivro.innerHTML += `<p><b>Preço:</b> R$ ${livro.Preco}0</p>`
        cartaoLivro.innerHTML += `<p><b>Sipnose:</b> ${livro.Sipnose}</p>`

        boxResultado.appendChild(cartaoLivro)
    });
}

/*Filtro por nome*/
const campoBuscaNome = document.querySelector("#search_bar");

campoBuscaNome.addEventListener("input", () => {
    let NomeBuscado = (String((campoBuscaNome.value))).toLowerCase();

    function obterResultadoNome (callback) {
        resultadoBusca.forEach((resultado) => {
            resultadoBusca.pop(resultado)
        })
    
        livros.forEach(livro => {
            let nomeLivro = (String(livro.Nome)).toLowerCase();
            if (NomeBuscado.length > 2) {
                if (nomeLivro.indexOf(NomeBuscado) !== -1) {
                    resultadoBusca.push(livro)
                }
            }
        })
        callback(resultadoBusca)
    }

    obterResultadoNome(mostrarResultado)
})
