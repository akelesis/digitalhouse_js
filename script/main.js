//Aplicando evento para menu lateral
const body = document.querySelector("body");
const navbar = document.getElementById("menu");
let menuBTN = document.getElementById("dh_menu_btn");
let iconBTN = document.getElementById("iconBTN");

menuBTN.addEventListener("click", function () {
    if (navbar.style.display == "none"){
        navbar.style.display = "block";
        iconBTN.classList.remove("fa-bars");
        iconBTN.classList.add("fa-window-close");
    } else {
        navbar.style.display = "none";
        iconBTN.classList.add("fa-bars");
        iconBTN.classList.remove("fa-window-close");
    }
})

//Carrossel
const imagensCarroussel = document.querySelectorAll(".imagensCaroussel");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");

/*mostra cada imagem uma só vez com um intervalo entre elas, 
responsavel por baixar a primeira imagem do carrossel e termina com ultima imagem da lista
***AJUSTAR: Problema se o usuário apertar os botões enquanto ele estiver funcionando*/
function carrossel () {
for (let i = 0; i <= imagensCarroussel.length-1; i++){
    (function (i) {
        setTimeout(function () {
            if (i > 0){
                imagensCarroussel[i-1].classList.remove("imagensCaroussel-active");
                }
                imagensCarroussel[i].classList.add("imagensCaroussel-active");
        }, 2000*i);
      })(i);
}
} carrossel();

//Se não houver o loop inicial das imagens, é preciso carregar a primeira imagem
// imagens[0].classList.add("imagensCaroussel-active");


let imagemAtual = document.querySelectorAll(".imagensCaroussel-active") != null; 
//identifica imagem que está aparecendo na tela

//Botões do carrossel
btnProximo.addEventListener("click", function () {
    let imagemAtual = document.querySelector(".imagensCaroussel-active");
    for (let i = 0; i < imagensCarroussel.length; i++){
        if (imagensCarroussel[i] == imagemAtual){
            if (i == 3){
                imagensCarroussel[3].classList.remove("imagensCaroussel-active");
                imagensCarroussel[0].classList.add("imagensCaroussel-active");
            } else {
                imagensCarroussel[i].classList.remove("imagensCaroussel-active");
                imagensCarroussel[i+1].classList.add("imagensCaroussel-active");
            }
        }
    }
})

btnAnterior.addEventListener("click", function () {
    let imagemAtual = document.querySelector(".imagensCaroussel-active");
    for (let i = 0; i < imagensCarroussel.length; i++){
        if (imagensCarroussel[i] == imagemAtual){
            if (i == 0){
                imagensCarroussel[0].classList.remove("imagensCaroussel-active");
                imagensCarroussel[3].classList.add("imagensCaroussel-active");
            } else {
                imagensCarroussel[i].classList.remove("imagensCaroussel-active");
                imagensCarroussel[i-1].classList.add("imagensCaroussel-active");
            }
        }
    }
})

//Inserindo os livros atraves do array de objetos
const livros = [
    {
        titulo: 'A menina que não sabia ler',
        imagem: "img/a-menina-que-nao-sabia-ler.jpg",
        preco: 19.99,
        genero: "Fantasia",
        descricao: "Em uma distante e escura mansão, onde nada é o que parece, a pequena Florence é negligenciada pelo seu tutor e tio. Guardada como um brinquedo, a menina passa seus dias perambulando pelos corredores e inventando histórias que conta a si mesma, em uma rotina tediosa e desinteressante."
    },
    {
        titulo: 'O caderno de Maya',
        imagem: "img/o-caderno-de-maya.jpg",
        preco: 35,
        genero: "Fantasia",
        descricao: "O novo romance de Isabel Allende, O caderno de Maya, diferentemente de seus tradicionais romances, é passado nos dias atuais. Apresenta a trama de uma garota americana de 19 anos que encontrou refúgio em uma ilha remota da costa do Chile, depois de cair em uma vida de drogas, crime e prostituição."
    }, 
    {
        titulo: "Capitães da Areia",
        imagem: "img/capitaes-da-areia.jpg",
        preco: 70,
        genero: "Romance",
        descricao: "Capitães da Areia é um romance de autoria do escritor brasileiro Jorge Amado, escrito em 1937. A obra retrata a vida de um grupo de menores abandonados, que crescem nas ruas da cidade de Salvador, Bahia, vivendo em um trapiche, roubando para sobreviver, chamados de \"Capitães da Areia\"."
    },    
    {
        titulo: "A fábrica da violência",
        imagem: "img/fabrica-de-violencia.jpg",
        preco: 29,
        genero: "Auto Ajuda",
        descricao: "A Fábrica da Violência é um romance do escritor sueco Jan Guillou, publicado em 1981. É uma obra de ficção, na qual é contada a história de um jovem chamado Erik. Este romance perpassa questões de violência, hierarquia e educação."
    },    
    {
        titulo: "A droga da obediência",
        imagem: "img/droga-da-obediencia.jpg",
        preco: 14,
        genero: "Auto Ajuda",
        descricao: "A Droga da Obediência” é o primeiro livro da série “os Karas”. Escrito em 1984 por Pedro Bandeira, a obra narra as aventuras de um grupo secreto de adolescentes que decidem desvendar os mistérios em torno do sumiço de algumas alunos nas escolas paulistas."
    },    
    {
        titulo: "A hospedeira",
        imagem: "img/a-hospedeira.jpg",
        preco: 60,
        genero: "Ficção Científica",
        descricao: "A Terra foi colonizada por uma raça alienígena que controla a mente dos humanos e usa seus corpos como hospedeiros. A maioria da humanidade foi erradicada, mas quando Melanie se recusa a aceitar sua nova alma, uma caçada se inicia."
    }
]

const showcase = document.querySelectorAll(".showcase")
livros.forEach(livro => {
    let resultado = document.createElement("div");
    let overlay = document.createElement("div");
    let tagGenero = document.createElement("div")
    tagGenero.setAttribute("class", "tagGenero")
    overlay.setAttribute("class", "overlay");
    resultado.setAttribute("class", "card");

    resultado.innerHTML =
    `<img src="${livro.imagem}"></img>`;

    overlay.innerHTML = 
    `<h2>${livro.titulo}</h2>
    <span>R$${livro.preco}</span>
    <p>${livro.descricao}</p>`;

    tagGenero.innerHTML = 
    `<span>${livro.genero}</span>`;

    showcase[0].appendChild(resultado);
    resultado.appendChild(overlay);
    overlay.appendChild(tagGenero)
})


//Filtro de busca
const btnBusca = document.getElementById("search_button");
const barraDePesquisa = document.getElementById("search_bar");

//Definindo genero e precos
const generos = document.getElementById("category");
const precos = document.getElementById("price_range");

btnBusca.onclick = function teste() {

    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++){
        cards[i].style.display = "none";
    }

    const livrosFiltrados = livros.filter (livro => {
        function removerAcentos(s) {
            return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        }
        
        let listaFiltradaPorTitulo;
        if (barraDePesquisa.value != 0){
            let livroProcurado = barraDePesquisa.value.toLowerCase();
            let tituloLivro = livro.titulo.toLowerCase();
            let tituloLivroSemAcento = removerAcentos(tituloLivro)
            let livroAchado = tituloLivroSemAcento.indexOf(livroProcurado) > -1 ? true : false;
            listaFiltradaPorTitulo = livroAchado;
        }
        return listaFiltradaPorTitulo
    })    
    
    livrosFiltrados.forEach (livro => {
        let resultado = document.createElement("div");
        let overlay = document.createElement("div");
        let tagGenero = document.createElement("div")
        tagGenero.setAttribute("class", "tagGenero")
        overlay.setAttribute("class", "overlay");
        resultado.setAttribute("class", "card");
    
        resultado.innerHTML =
        `<img src="${livro.imagem}"></img>`;
    
        overlay.innerHTML = 
        `<h2>${livro.titulo}</h2>
        <span>R$${livro.preco}</span>
        <p>${livro.descricao}</p>`;
    
        tagGenero.innerHTML = 
        `<span>${livro.genero}</span>`;
    
        showcase[0].appendChild(resultado);
        resultado.appendChild(overlay);
        overlay.appendChild(tagGenero)
    })

}


//Filtro pelas caixas de seleção
var optionsGeneros = generos.options[generos.selectedIndex].value;

function filtraPrecos () {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++){
        cards[i].style.display = "none";
    }

    const livrosFiltrados = livros.filter (livro => {
        let precoDoLivro = livro.preco; 
        let faixaDePreco;
        if (precoDoLivro >= 1 && precoDoLivro <= 20) {
            faixaDePreco = "barato";
        } else if  (precoDoLivro >= 21 && precoDoLivro <= 40) {
            faixaDePreco = "medio";
        } else if (precoDoLivro >= 41 && precoDoLivro <= 60){
            faixaDePreco = "caro";
        } else {
            faixaDePreco = "mais caro";
        }

        let listaFiltrada;
        let listaFiltradaPorPreco;
        let listaFiltradaPorGenero;

            if (precos.value == false){
            listaFiltradaPorGenero = livro.genero == generos.value;
        }
        else if (generos.value && precos.value){
            listaFiltrada = livro.genero == generos.value && faixaDePreco == precos.value;
        } 
        else if (generos.value == false) {
            listaFiltradaPorPreco = faixaDePreco == precos.value;
        }
        return listaFiltrada || listaFiltradaPorGenero || listaFiltradaPorPreco
    })    
    
    livrosFiltrados.forEach (livro => {
        let resultado = document.createElement("div");
        let overlay = document.createElement("div");
        let tagGenero = document.createElement("div")
        tagGenero.setAttribute("class", "tagGenero")
        overlay.setAttribute("class", "overlay");
        resultado.setAttribute("class", "card");
    
        resultado.innerHTML =
        `<img src="${livro.imagem}"></img>`;
    
        overlay.innerHTML = 
        `<h2>${livro.titulo}</h2>
        <span>R$${livro.preco}</span>
        <p>${livro.descricao}</p>`;
    
        tagGenero.innerHTML = 
        `<span>${livro.genero}</span>`;
    
        showcase[0].appendChild(resultado);
        resultado.appendChild(overlay);
        overlay.appendChild(tagGenero)
    })

}

function filtraGenero () {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++){
        cards[i].style.display = "none";
    }

    const livrosFiltrados = livros.filter (livro => {
        let precoDoLivro = livro.preco; 
        let faixaDePreco;
        if (precoDoLivro >= 1 && precoDoLivro <= 20) {
            faixaDePreco = "barato";
        } else if  (precoDoLivro >= 21 && precoDoLivro <= 40) {
            faixaDePreco = "medio";
        } else if (precoDoLivro >= 41 && precoDoLivro <= 60){
            faixaDePreco = "caro";
        } else {
            faixaDePreco = "mais caro";
        }

        let listaFiltrada;
        let listaFiltradaPorPreco;
        let listaFiltradaPorGenero;
            if (precos.value == false){
            listaFiltradaPorGenero = livro.genero == generos.value;
        }
        else if (generos.value && precos.value){
            listaFiltrada = livro.genero == generos.value && faixaDePreco == precos.value;
        } 
        else if (generos.value == false) {
            listaFiltradaPorPreco = faixaDePreco == precos.value;
        }
        return listaFiltrada || listaFiltradaPorGenero || listaFiltradaPorPreco;
    })    
    
    livrosFiltrados.forEach (livro => {
        let resultado = document.createElement("div");
        let overlay = document.createElement("div");
        let tagGenero = document.createElement("div")
        tagGenero.setAttribute("class", "tagGenero")
        overlay.setAttribute("class", "overlay");
        resultado.setAttribute("class", "card");
    
        resultado.innerHTML =
        `<img src="${livro.imagem}"></img>`;
    
        overlay.innerHTML = 
        `<h2>${livro.titulo}</h2>
        <span>R$${livro.preco}</span>
        <p>${livro.descricao}</p>`;
    
        tagGenero.innerHTML = 
        `<span>${livro.genero}</span>`;
    
        showcase[0].appendChild(resultado);
        resultado.appendChild(overlay);
        overlay.appendChild(tagGenero)
    })

}

//Habilitando tecla enter no botao de busca
document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
        btnBusca.click();
    }
});


//Evento que mostra sinopse escondida - Por que não aplica quando a função filtro é chamada?
const overlay = document.querySelectorAll(".overlay");
const sinopse = document.getElementsByTagName('p'); 

for (let i = 0; i < overlay.length; i++){
    overlay[i].addEventListener("mouseover", function () {  
            sinopse[i].style.display = "block";
    })
    overlay[i].addEventListener("mouseout", function () {
        sinopse[i].style.display = "none";
    })
}