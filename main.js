const btnOpen = document.getElementById("dh_menu_btn");
const btnClose = document.getElementById("btnclose");
const list = document.getElementById("menu-opt");
const sectionBook = document.getElementById("books");
const filterAdv = document.getElementById("category");
const filterPrice = document.getElementById("price_range");
const searchFilter = document.getElementById("search_bar");
const img = document.getElementById("img_carrousel");
const img_carrousel = ['./img/carousel-1.jpg', './img/carousel-2.jpg', './img/carousel-3.png'];
var contador = 1;

const listBooks = [
    {
        "id": 0,
        "name": "O Corvo",
        "author": "Edgar Allan Poe",
        "genrer": "Terror",
        "descript": '"O Corvo" é um poema narrativo do escritor norte-americano Edgar Allan Poe. Publicado pela primeira vez em janeiro de 1845, é conhecido principalmente por sua musicalidade, linguagem estilizada e atmosfera sobrenatural.',
        "price": 45.00,
        "cape": "./img/allanpoe.jpeg"
    },
    {
        "id": 1,
        "name": "O melhor de Lovecraft",
        "author": "HP Lovecraft",
        "genrer": "Terror",
        "descript": "Se você também é um adorador do lado mais sombrio da literatura, junte-se ao culto a H.P. Lovecraft.Hoje em dia fica difícil imaginar a cultura pop sem a presença de Howard Phillips Lovecraft.",
        "price": 60.00,
        "cape": "./img/lovecraft.jpeg"
    },
    {
        "id": 2,
        "name": "Harry Potter",
        "author": "J. K. Rowling",
        "genrer": "Fantasia",
        "descript": "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa.",
        "price": 35.00,
        "cape": "./img/harrypotter.jpeg"
    },
    {
        "id": 3,
        "name": "Senhor dos anéis",
        "author": "J. R. R. Tolkien",
        "genrer": "Fantasia",
        "descript": "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros.",
        "price": 40.00,
        "cape": "./img/senhordosaneis.jpeg"
    },
    {
        "id": 4,
        "name": "1 página de cada vez",
        "author": "Adam J. Kurtz",
        "genrer": "Romance",
        "descript": 'No seu primeiro livro, o artista gráfico americano Adam J. Kurtz usa provocações divertidas como esta para fazer o leitor refletir sobre sua vida ao mesmo tempo em que testa a própria criatividade. Como o título diz, cada página traz uma brincadeira diferente.',
        "price": 25.00,
        "cape": "./img/1pagina.jpeg"
    },
    {
        "id": 5,
        "name": "Seja o amor da sua vida",
        "author": "Guilherme Pintto",
        "genrer": "Romance",
        "descript": 'EU SEI QUE VOCÊ PROCURA O AMOR Eu sei por que você está aqui lendo este livro e levantando os olhos enquanto se pergunta mentalmente: "como ele sabe?". Eu sei por que, de alguma maneira, as pessoas se atraem.',
        "price": 10.00,
        "cape": "./img/sejaoamor.jpeg"
    }];

btnOpen.addEventListener("click", () => {
    list.style.width = "250px";
})

btnClose.addEventListener("click", () => {
    list.style.width = "0";
})

filterAdv.addEventListener("change", () => {
    var category = filterAdv.options[filterAdv.selectedIndex].value;
    var priceRang = filterPrice.options[filterPrice.selectedIndex].value;

    verifyCategory(category, priceRang);
})

filterPrice.addEventListener("change", () => {
    var category = filterAdv.options[filterAdv.selectedIndex].value;
    var priceRang = filterPrice.options[filterPrice.selectedIndex].value;

    verifyPrice(category, priceRang);
})

searchFilter.addEventListener("keyup", () => {
    var name = searchFilter.value;

    verifyName(name);
})

const populateBooks = (books) => {
    var card = document.createElement('div');
    card.setAttribute("id", books.id);
    card.setAttribute("class", "card");

    var img = document.createElement('img');
    img.setAttribute("class", "cape-book")
    img.src = books.cape;
    card.appendChild(img)

    var overlay = document.createElement('div');
    overlay.setAttribute("class", "overlay");

    var bookTitle = document.createElement('h2');
    bookTitle.textContent = books.name;
    overlay.appendChild(bookTitle);

    var bookAuthor = document.createElement('p');
    bookAuthor.textContent = 'Autor: ' + books.author;
    overlay.appendChild(bookAuthor);

    var bookDescript = document.createElement('p');
    bookDescript.textContent = 'Descrição: ' + books.descript;
    overlay.appendChild(bookDescript);

    var bookGenrer = document.createElement('p');
    bookGenrer.textContent = 'Genero: ' + books.genrer;
    overlay.appendChild(bookGenrer);

    var bookPrice = document.createElement('p');
    bookPrice.textContent = 'Preço: R$ ' + books.price;
    overlay.appendChild(bookPrice);

    card.appendChild(overlay);
    sectionBook.appendChild(card);
}

const upgradeBooks = (books) => {
    listBooks.forEach(() => {
        var delBooks = document.getElementById(books.id);

        if (delBooks != null)
            delBooks.remove();
    })
}

const verifyName = (name) => {
    listBooks.forEach((books) => {

        upgradeBooks(books);

        if (books.name.toLowerCase().indexOf(name.toLowerCase()) != -1)
            populateBooks(books);
    })
}

const verifyPrice = (category, range) => {
    listBooks.forEach((books) => {

        upgradeBooks(books);

        if (range === "todos" && category === books.genrer) {
            populateBooks(books);
        }
        if (range === "barato" && (books.price >= 1 && books.price <= 20)) {
            populateBooks(books);
        }
        if (range === "medio" && (books.price >= 21 && books.price <= 40)) {
            populateBooks(books);
        }
        if (range === "caro" && (books.price >= 41 && books.price <= 60)) {
            populateBooks(books);
        }
        if (range === "mais caro" && (books.price >= 61)) {
            populateBooks(books);
        }
    })
}

const verifyCategory = (category, range) => {
    listBooks.forEach((books) => {

        upgradeBooks(books);

        if (category === "Todos") {
            populateBooks(books);
        }
        if (category === books.genrer) {
            populateBooks(books);
        }
    })
}

const carrosel = () => {

    img.setAttribute("src", img_carrousel[0]);

    setInterval(() => {
        img.setAttribute("src", img_carrousel[contador]);
        contador < img_carrousel.length - 1 ? contador++ : contador = 0;
    }, 5000)
}

const init = () => {
    listBooks.forEach((books) => {
        populateBooks(books);
    })
    
    carrosel();
}

init()
