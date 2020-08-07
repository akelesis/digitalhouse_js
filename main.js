/*eslint-env browser*/


/* -------------------- Menu lateral -------------------- */
document.querySelector(".btn-open-menu").onclick = function () {
    document.getElementById("side-menu").style.width = "250px";
}

document.querySelector(".btn-close-menu").onclick = function () {
    document.getElementById("side-menu").style.width = "0";
}


/* -------------------- Carrosel -------------------- */
const carrossel = document.querySelector(".carousel");
const slides = Array.from(carrossel.children);
const larguraSlide = 100;

slides.forEach((slide, index) => {
    slide.style.left = larguraSlide * index + 'vw';
});

document.querySelector(".btn-carousel-right").onclick = function () {
    let slideAtual = carrossel.querySelector(".current-slide");    
    let proximoSlide = slideAtual.nextElementSibling;
    
    const mover = proximoSlide.style.left;

    carrossel.style.transform = 'translateX(-' + mover + ')';
    slideAtual.classList.remove("current-slide");
    proximoSlide.classList.add("current-slide");
}

document.querySelector(".btn-carousel-left").onclick = function () {
    const slideAtual = carrossel.querySelector(".current-slide");
    const slideAnterior = slideAtual.previousElementSibling;
    
    const mover = slideAnterior.style.left;

    carrossel.style.transform = 'translateX(-' + mover + ')';
    slideAtual.classList.remove("current-slide");
    slideAnterior.classList.add("current-slide");
}

/* -------------------- Showcase -------------------- */

/* Array de livros */
const livros = [
    {
        titulo: 'A Revolução dos Bichos',
        autor: 'George Orwell',
        genero: 'Ficção distópica',
        imagem: "./img/livro-revolução-dos-bichos.png",
        descricao: 'Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século 20, "A Revolução dos Bichos" é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos.',
        preco: '29,90'
    },
    {
        titulo: 'Lugar Nenhum',
        autor: 'Neil Gaiman',
        genero: 'Fantasia',
        imagem: "./img/livro-lugar-nenhum.png",
        descricao: 'Em Lugar Nenhum, Richard Mayhew é um homem simples de coração bom que tem a vida transformada quando ajuda uma jovem que encontra ferida numa calçada.',
        preco: '49,90' 
    },
    {
        titulo: 'Clube da Luta',
        autor: 'Chuck Palahniuk',
        genero: 'Humor negro',
        imagem: "./img/livro-clube-da-luta.png",
        descricao: 'O clube da luta é idealizado por Tyler Durden, que acredita ter encontrado uma maneira de viver fora dos limites da sociedade e das regras sem sentido.',
        preco: '29,90' 
    },
    {
        titulo: 'O Perfume',
        autor: 'Patrick Süskind',
        genero: 'Romance',
        imagem: "./img/livro-perfume.png",
        descricao: 'O livro conta a história de Jean-Baptiste Grenouille, um homem que ainda jovem descobre ser dotado de imensa sensibilidade olfativa e parte em busca da essência perfeita, do perfume que lhe falta para seduzir e dominar qualquer pessoa.',
        preco: '19,99' 
    },
    {
        titulo: 'Laranja Mecânica',
        autor: 'Anthony Burgess',
        genero: 'Ficção',
        imagem: "./img/livro-laranja-mecanica.png",
        descricao: 'Mais de cinquenta anos depois de seu lançamento, a perturbadora história de Alex, membro de uma gangue de adolescentes, que é capturado pelo Estado e submetido a uma terapia de condicionamento social, continua fascinando e desconcertando leitores mundo afora.',
        preco: '32,30' 
    },
    {
        titulo: 'Os Sofrimentos do Jovem Werther',
        autor: 'Goethe',
        genero: 'Romance',
        imagem: "./img/livro-werther.png",
        descricao: 'O livro é narrado numa estrutura epistolar: conhecemos as danações de Werther por meio de cartas que ele regularmente escreve ao amigo Wilhelm.',
        preco: '39,90' 
    }
]

/* Adicionando ao HTML */
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    /* Alterando as tags já existentes */

    /*cardfilhos[0] - img / cardfilhos[1] - div */
    const cardFilhos = cards[index].children;

    const imagemLivro = cardFilhos[0];
    imagemLivro.setAttribute("src", livros[index].imagem);

    const overlay = cardFilhos[1];
    const overlayFilhos = overlay.children;

    /*overlayFilhos[0] - h2 / overlayFilhos[1] - p */
    const h2 = overlayFilhos[0];
    const p = overlayFilhos[1];

    h2.innerHTML = livros[index].titulo;
    p.innerHTML = livros[index].descricao;

    /* Criando novas tags */
    
    const autor = document.createElement("h4");
    autor.innerHTML = livros[index].autor;
    const genero = document.createElement("p");
    genero.innerHTML = livros[index].genero;
    const preco = document.createElement("h3");
    preco.innerHTML = livros[index].preco;

    overlay.insertBefore(autor, p);
    overlay.insertBefore(genero, p);
    //adicionando na posição depois de p
    p.parentNode.insertBefore(preco, p.nextSibling);
});


/* -------------------- Filtros -------------------- */

document.querySelector("#search_button").onclick = function () {

    /* Pegando o valor do que foi digitado no  */
    const inputNome = document.querySelector("#search_bar").value.toLowerCase();

    /* Pegando os valores dos títulos cadastrados no site */
    const overlay = document.querySelectorAll(".overlay");
    let titulos = [];

    overlay.forEach((div, index) => {
        titulos.push(overlay[index].firstElementChild.textContent.toLocaleLowerCase());
        if (inputNome !== titulos[index]) {
            overlay[index].parentElement.style.display = "none"; 
        } 
        
        if (inputNome === titulos[index] || inputNome === "") {
            overlay[index].parentElement.style.display = "block";
        } 
    })
}








