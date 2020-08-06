// Livros
const books = [
    {
        "id": 0,
        "name": "Irmãos Karamazov, Os",
        "author": "Fiodor Dostoievski",
        "genre": "Romance",
        "description": "Último romance de Dostoiévski, Os irmãos Karamázov representa uma síntese de toda sua produção e é tido por muitos como sua obra-prima. Um marco da literatura universal, influenciou pensadores como Nietzsche e Freud - que o considerava 'o maior romance já escrito' - e sucessivas gerações de escritores em todo o mundo.",
        "price": 129.00,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/16955705/13003049.jpg"
    },
    {
        "id": 1,
        "name": "Morro dos Ventos Uivantes, O",
        "author": "Emily Bronte",
        "genre": "Romance",
        "description": "Único romance da escritora inglesa Emily Bronte, O morro dos ventos uivantes retrata uma trágica historia de amor e obsessão em que os personagens principais são a obstinada e geniosa Catherine Earnshaw e seu irmão adotivo, Heathcliff. Grosseiro, humilhado e rejeitado, ele guarda apenas rancor no coração, mas tem com Catherine um relaciona- mento marcado por amor e, ao mesmo tempo, ódio. Essa ligação perdura mesmo com o casamento de Catherine com Edgar Linton.        ",
        "price": 24.90,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/16201461/2112103539.jpg"
    },
    {
        "id": 2,
        "name": "Trilogia da Fundação",
        "author": "Isaac Asimov",
        "genre": "Ficção Científica",
        "description": "A trilogia conta a história da humanidade, em um ponto distante no futuro, no qual o visionário cientista Hari Seldon prevê a destruição total do império humano e de todo o conhecimento acumulado por milênios. Incapaz de impedir a tragédia, ele arquiteta um plano ousado, no qual é possível reconstruir a glória dos homens",
        "price": 139.90,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/16971088/11027212.jpg"
    },
    {
        "id": 3,
        "name": "12 Regras para a Vida",
        "author": "Jordan B. Peterson",
        "genre": "Auto Ajuda",
        "description": "Best-seller International A proeminente “Figura Paterna” do YouTube é a voz da razão que uma geração inteira ansiava ouvir. Aclamado psicólogo clínico, Jordan Peterson tem influenciado a compreensão moderna sobre a personalidade e, agora, se transformou em um dos pensadores públicos mais populares do mundo, com suas palestras sobre tópicos que variam da bíblia, às relações amorosas e à mitologia, atraindo dezenas de milhões de espectadores.",
        "price": 59.90,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/16712409/2000063362.jpg"
    },
    {
        "id": 4,
        "name": "Mindsets",
        "author": "Mike George",
        "genre": "Auto Ajuda",
        "description": "Somente uma MENTALIDADE nova ou diferente pode mudar permanentemente sua maneira de pensar, sentir, decidir e criar sua vida. A proposta dessa obra é ajudar você a alcançar uma nova forma de ver o mundo e reconfigurar a dinâmica mental que rege suas ações e determina a forma como você vive.",
        "price": 15.90,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/14241872/46683724.jpg"
    },
    {
        "id": 5,
        "name": "Beren e Lúthien",
        "author": "J. R. R. Tolkien",
        "genre": "Fantasia",
        "description": "Citada em O Senhor dos Anéis, a principal história contada em O Silmarillion narra o romance e a jornada épica de Beren, um homem mortal, e Lúthien, uma princesa élfica. O pai dela, um grande senhor élfico, opõe-se à união e, para permitir o casamento com Lúthien, impõe a Beren uma tarefa impossível de ser realizada.",
        "price": 59.90,
        "image": "https://livrariacultura.vteximg.com.br/arquivos/ids/16374527/2111519275.jpg"
    }
];

// UI Controller
var uiController = (() => {

    const DOMStrings = {
        categorySelect: document.getElementById('category'),
        priceRangeSelect: document.getElementById('price_range'),
        searchButton: document.getElementById('search_button'),
        searchText: document.getElementById('search_bar'),
        showcaseSection: document.querySelector('.showcase'),
        carouselSection: document.getElementById('dh_carousel')
    }

    // Formata o preço do livro para R$0.00
    const formatPrice = (value) => {
        return "R$ " + value.toFixed(2);
    }

    // Limita o tamanho do texto garantindo que
    // palavras fiquem inteiras.
    const truncateText = (text, limit) => {
        const newText = [];

        if (text.length > limit) {
            text.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newText.push(cur);
                }
                return acc + cur.length;
            }, 0);
        }
        return newText.join(' ') + '...';
    }

    // Adiciona um livro no carousel
    const addCarouselItem = (book) => {
        let title = document.createElement('h2');
        title.textContent = book.name;

        let details = document.createElement('div');
        details.className = 'overlay';
        details.appendChild(title);

        let image = document.createElement('img');
        image.setAttribute('src', book.image);

        let item = document.createElement('div');
        item.className = 'carousel_item';
        item.appendChild(image);
        item.appendChild(details);
        item.style.display = 'none';
        
        DOMStrings.carouselSection.appendChild(item); 
    };

    // Executa o carousel
    const runCarousel = (itemIndex) => {
        carouselItems = document.querySelectorAll('.carousel_item');
        
        if (itemIndex >= carouselItems.length) {
            itemIndex = 0;
            carouselItems[carouselItems.length - 1].style.display = 'none';
        }

        if (itemIndex > 0) {
            index = itemIndex - 1
            carouselItems[index].style.display = 'none';
        } 
         
        carouselItems[itemIndex].style.display = 'block';
        setTimeout(runCarousel, 2500, ++itemIndex);
    }

    // Adiciona um livro no showcase
    var addShowcaseItem = (book) => {
        let title = document.createElement('h2');
        title.textContent = book.name;

        let author = document.createElement('p');
        author.className = 'book-author';
        author.textContent = book.author;

        let description = document.createElement('p');
        description.className = 'book-description';
        description.textContent = truncateText(book.description, 120);

        let price = document.createElement('p');
        price.className = 'book-price';
        price.textContent = formatPrice(book.price);

        let details = document.createElement('div');
        details.className = 'book-details';
        details.appendChild(title);
        details.appendChild(author);
        details.appendChild(description);
        details.appendChild(price);
        
        let image = document.createElement('img');
        image.setAttribute('src', book.image);

        let card = document.createElement('div');
        card.className = 'card';
        card.appendChild(image);
        card.appendChild(details);

        DOMStrings.showcaseSection.appendChild(card); 
    };

    return {
        getDOMStrings: () => {
            return DOMStrings;
        },

        // Atualiza o showcase
        updateShowcase: (books) => {
            DOMStrings.showcaseSection.innerHTML = '';

            books.forEach((book) => {
                addShowcaseItem(book);
            });
        },
        startCarousel: (book) => {
            books.forEach((book) => {
                addCarouselItem(book);
            });
            runCarousel(0);
        }
    }
})();

// App Controller
var controller = ((UICtrl, booklist) => {

    var loadUI = (books) => {
        UICtrl.updateShowcase(books);
        UICtrl.startCarousel(books);
    };

    var setupEventListeners = () => {
        var DOM = UICtrl.getDOMStrings();

        DOM.searchButton.addEventListener('click', () => {
            let query = DOM.searchText.value.toLowerCase();
            let books = booklist.filter((book) => {
                return book.name.toLowerCase().indexOf(query) > -1;
            });
            UICtrl.updateShowcase(books);
        });

        DOM.categorySelect.addEventListener('change', () => {
            let category = DOM.categorySelect.value;
            let books = booklist.filter((book) => {
                return book.genre === category;
            });
            UICtrl.updateShowcase(books);
        });

        DOM.priceRangeSelect.addEventListener('change', () => {
            let priceRange = DOM.priceRangeSelect.value;
            let books = booklist.filter((book) => {
                switch(priceRange) {
                    case "barato": 
                        return book.price <= 20.0;
                    case "medio": 
                        return book.price > 20.0 && book.price <= 40.0;
                    case "caro":
                        return book.price > 40.0 && book.price <= 60.0;
                    case "mais caro":
                        return book.price > 60.0;
                    default:
                        return true;
                }
            });
            UICtrl.updateShowcase(books);
        });
    }

    return {
        init: () => {
            loadUI(booklist)
            setupEventListeners();
        }
    }
})(uiController, books);

controller.init();
