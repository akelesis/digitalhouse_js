const listOfbooks = {
    books: [
        {
            title: "Capitães da Areia",
            description: "Capitães da Areia é um romance de autoria do escritor brasileiro Jorge Amado, escrito em 1937.",
            img: "./img/book1.jpg",
            category: "Romance",
            price: "20.89",
            priceRange: "medio"
        },
        {
            title: "Memórias Póstumas de Brás Cubas",
            description: "Memórias Póstumas de Brás Cubas é um romance escrito por Machado de Assis.",
            img: "./img/book2.jpg",
            category: "Romance",
            price: "15.92",
            priceRange: "barato"
        },
        {
            title: "Vidas Secas",
            description: "Vidas secas é o título do romance do escritor brasileiro Graciliano Ramos, publicado em 1938, considerado por muitos como a maior obra do autor.",
            img: "./img/book3.jpg",
            category: "Romance",
            price: "26.99",
            priceRange: "medio"
        },
        {
            title: "O Poder do Hábito",
            description: "O Poder do Hábito: por que fazemos o que fazemos na vida e nos negócios é um livro de Charles Duhigg, ex-repórter do New York Times, publicado em Fevereiro de 2012 pela Random House.",
            img: "./img/book4.jpg",
            category: "Auto Ajuda",
            price: "43.99",
            priceRange: "caro"
        },
        {
            title: "Pense e Enriqueça",
            description: "Pense e Enriqueça, também traduzido como Quem pensa enriquece, foi escrito em 1937 por Napoleon Hill e vendido como um livro de realização pessoal e auto-aperfeiçoamento. Hill escreveu que foi inspirado por uma sugestão de Andrew Carnegie, influente magnata de negócios e filantropista.",
            img: "./img/book5.jpg",
            category: "Auto Ajuda",
            price: "32.20",
            priceRange: "medio"
        },
        {
            title: "Frankenstein",
            description: "Frankenstein ou o Prometeu Moderno, mais conhecido simplesmente por Frankenstein, é um romance de terror gótico com inspirações do movimento romântico, de autoria de Mary Shelley, escritora britânica nascida em Londres. É considerada a primeira obra de ficção científica da história.",
            img: "./img/book6.jpg",
            category: "Ficção Científica",
            price: "59.90",
            priceRange: "caro"
        },
        {
            title: "The Martian",
            description: "The Martian é uma obra de ficção científica estadunidense escrita por Andy Weir e publicada em 2011 como edição de autor e em 2014 pela Crown Publishing Group.",
            img: "./img/book7.jpg",
            category: "Ficção Científica",
            price: "25.30",
            priceRange: "medio"
        },
        {
            title: "As Brumas de Avalon",
            description: "As Brumas de Avalon é uma obra de 1979 da escritora Norte Americana Marion Zimmer Bradley feita em quatro volumes. É ambientada durante a vida do lendário Rei Artur e seus cavaleiros e tem por escopo narrar a já conhecida lenda arturiana a partir de uma outra perspectiva.",
            img: "./img/book8.jpg",
            category: "Fantasia",
            price: "61.90",
            priceRange: "mais caro"
        },
        {
            title: "The Subtle Knife",
            description: "The Subtle Knife é um romance inglês de fantasia escrito por Philip Pullman, originalmente publicado em 1997, e o segundo volume da série His Dark Materials.",
            img: "./img/book9.jpg",
            category: "Fantasia",
            price: "59.80",
            priceRange: "caro"
        },
    ],
};

// inserindo os livros
let showCase = document.querySelector(".showcase");
window.location = "#wall-1";



let insertShowCase = (booksArray) => {
    showCase.innerHTML = "";

    for(let book of booksArray){
        let card = document.createElement("div");
        let bookImage = document.createElement("img");
        let bookOverlay = document.createElement("div");
        let bookTitle = document.createElement("h2");
        let bookDescripton = document.createElement("p");

        card.className = "card";
        bookOverlay.className = "overlay";

        bookImage.src = book.img;
        bookTitle.textContent = book.title;
        bookDescripton.textContent = book.description;

        bookOverlay.appendChild(bookTitle);
        bookOverlay.appendChild(bookDescripton);

        card.appendChild(bookImage);
        card.appendChild(bookOverlay);

        showCase.appendChild(card);
    }
}

insertShowCase(listOfbooks.books);