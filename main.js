//-------------------------- Carousel -------------------------- 
const carouselImages = document.querySelector('.carousel_images');
const carouselButtons = document.querySelectorAll('.carousel_button');
const nmbrImages =  document.querySelectorAll('.carousel_images img').length;

//Initializing Variables
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener("click", event => {
        //Getting Image Width Value for Translation
        let imageWidth = getComputedStyle(carouselImages).width.split("px");
        let imageWidthValue = parseInt(imageWidth[0]);

        if (event.target.id === "previous") {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += imageWidthValue;
            } else {
                imageIndex = nmbrImages;
                translateX -= imageWidthValue * (nmbrImages - 1);
            }
        } else {
            if (imageIndex !== nmbrImages) {
                imageIndex++;
                translateX -= imageWidthValue;
            } else {
                imageIndex = 1;
                translateX = 0;
            }
        }

        carouselImages.style.transform = "translateX(" + translateX + "px)";
    })
});

//------------------------- Hamburger Menu ------------------------- 
const dhMenuBtn = document.getElementById('dh_menu_btn');
const sidebar = document.getElementById('sidebar');

dhMenuBtn.addEventListener("click", event => {
    if(sidebar.getAttribute("class") === "inactive"){
        sidebar.classList.remove("inactive");
    } else {
        sidebar.classList.add("inactive");
    }
})

//-------------------------- Insert Books --------------------------
const books = [
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/41FKKyqw8xL._SX348_BO1,204,203,200_.jpg",
        title: "O universo autoconsciente: Como a consciência cria o mundo material",
        description: "Lançado originalmente em 1993, este livro abalou a comunidade ao apresentar uma teoria revolucionária. A partir dos princípios da física quântica, o autor demonstra que é a consciência, e não a matéria, a base de tudo que existe, resgatando a herança filosófica das grandes tradições religiosas e unindo mente e corpo num novo paradigma científico.",
        category: "Auto Ajuda",
        price: 47.92
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg",
        title: "As Crônicas de Nárnia",
        description: "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como 'As crônicas de Nárnia'.",
        category: "Fantasia",
        price: 60
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/51BG+Wr5KDL._SX322_BO1,204,203,200_.jpg",
        title: "O Ladrão de Raios - Volume 1",
        description: "Os cinco livros da série que se tornou fenômeno mundial, em edição limitada e com design exclusivo: as cinco lombadas dos livros compõem, juntas, uma ilustração especial de John Rocco. Em O ladrão de raios, Percy Jackson, o menino que aos doze anos descobre que é um semideus, filho de Poseidon, precisa impedir uma guerra entre os deuses que destruiria a civilização ocidental.",
        category: "Fantasia",
        price: 23.9
    },
    {
        cover: "https://m.media-amazon.com/images/I/512ERYcB18L.jpg",
        title: "O guia do mochileiro das galáxias",
        description: "Considerado um dos maiores clássicos da literatura de ficção científica, O Guia do Mochileiro das Galáxias vem encantando gerações de leitores ao redor do mundo com seu humor afiado. Este é o primeiro título da famosa série escrita por Douglas Adams, que conta as aventuras espaciais do inglês Arthur Dent e de seu amigo Ford Prefect.",
        category: "Ficção Científica",
        price: 27.9
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/511c2+CJ30L._SX326_BO1,204,203,200_.jpg",
        title: "Orgulho e preconceito",
        description: "Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo.",
        category: "Romance",
        price: 41.93
    },
    {
        cover: "https://images-na.ssl-images-amazon.com/images/I/51GuGBwKeTL._SX340_BO1,204,203,200_.jpg",
        title: "Forrest Gump",
        description: "Publicado pela primeira vez em 1986, Forrest Gump não só está entre os clássicos da literatura e do cinema mundial, como representa um marco na cultura pop do século 20. Trinta anos depois de seu lançamento, a encantadora trajetória do jovem que só queria fazer as coisas certas – e acabou sendo um dos homens mais notáveis da história – continua fascinando e comovendo leitores em todo o mundo.",
        category: "Ficção Científica",
        price: 56.93
    }
    
];

function addBooks(books) {
    const showcase = document.querySelector('.showcase');
    if(books.length == 0){
        showcase.textContent = "Nenhum resultado.";
        showcase.classList.add("no_results");
    } else {
        showcase.hasAttribute("class", "no_results") ? showcase.classList.remove("no_results") : "";
        
        let divs = "";
        books.forEach(book => {
            divs += 
            "<div class='card'>" +
                "<img class='book_cover' src='" + book.cover + "'>" +
                "<div class='overlay'>" +
                    "<h2>" + book.title + "</h2>" +
                    "<p>" + book.description + "</p>" +
                "</div>" +
            "</div>";
        });

        showcase.innerHTML = divs;
    }
}

function listBooks() {
    addBooks(books);
}

//-------------------------- Filters -------------------------- 
//Title
const divBooks = document.querySelectorAll('.card');
function searchTitle () {
    let titleFilter = document.getElementById('search_bar').value;

    const filterList = books.filter(book =>{
        return book.title.includes(titleFilter);
    });

    addBooks(filterList);

    document.getElementById('category').value = "";
    document.getElementById('price_range').value = "";
}

//Category
function searchCategory () {
    const categoryFilter = document.getElementById('category');
    let selectedCategory = categoryFilter.options[categoryFilter.selectedIndex].value;
    
    const filterList = books.filter(book =>{
        return book.category === selectedCategory;
    })

    addBooks(filterList);

    document.getElementById('search_bar').value = "";
    document.getElementById('price_range').value = "";
};

//Price
function searchPrice () {
    const priceFilter = document.getElementById('price_range');
    let selectedPrice = priceFilter.options[priceFilter.selectedIndex].value;
    
    const filterList = books.filter(book =>{
        switch (selectedPrice) {
            case "barato":
                return book.price >= 1 && book.price <= 20;
                break;
            case "medio":
                return book.price >= 21 && book.price <= 40;
                break;
            case "caro":
                return book.price >= 41 && book.price <= 60;
                break;
            case "mais caro":
                return book.price > 60;
                break;
            default:
                break;
        }
    });
    
    addBooks(filterList);

    document.getElementById('search_bar').value = "";
    document.getElementById('category').value = "";
};