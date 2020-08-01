// Open or close the side menu
btnMenu.onclick = function () {
    let btnMenu = document.getElementById("dh_menu_btn");
    // Check the status of side menu through your class name 
    (btnMenu.className == 'side-menu-off') ? openNav() : closeNav();

    // Set the css attributtes when the side menu is opened
    function openNav() {
        btnMenu.className = 'side-menu-on';
        btnMenu.style.position = "fixed";
        btnMenu.style.top = "15px";
        btnMenu.style.right = "20px";

        verifyIcon();

        document.getElementById("mySidenav").style.width = "250px"; //not responsive
    }

    // Set the css attributtes when the side menu is closed
    function closeNav() {
        btnMenu.className = 'side-menu-off';
        btnMenu.removeAttribute('style', 'position');

        verifyIcon();

        document.getElementById("mySidenav").style.width = "0";
    }

    // Change the icon bars to "X" or the reverse
    function verifyIcon() {
        let btnMenuIcon = document.getElementById("btnMenu");
        (btnMenuIcon.className == "fa fa-bars") ?
            btnMenuIcon.className = "fa fa-times" : btnMenuIcon.className = "fa fa-bars";
    }
};

// Making a carousel
let imgCarousel = function () {
    let srcCaroulselImg = document.getElementById("dh_carousel_img");

    let arrayCarouselImages = [
        'https://scalingupnutrition.org/wp-content/uploads/2018/09/berkman-library-banner.jpg',
        'https://en.ricest.ac.ir/wp-content/uploads/2018/02/library-banner.jpg',
        'https://faculdade.uneouro.edu.br/wp-content/uploads/2019/09/library-banner.jpg',
        'https://www.wenhammuseum.org/wp-content/uploads/2014/08/library-banner-1024x450.jpg'
    ];

    let i = 0;

    // Change the image of carousel only when the interval() pass the counter "i"
    let changeImg = function (array, i) {
        srcCaroulselImg.setAttribute('src', `${arrayCarouselImages[i]}`);
    };

    // Call the function changeImg() every 5 seconds
    let interval = setInterval(function () {
        // When the changeImg() shows the image, the counter is incremented
        changeImg(arrayCarouselImages, i);
        i++;

        // If the counter is greater than arrayCarouselImages.lenght, clears the interval and restart
        if (i == arrayCarouselImages.length) {
            clearInterval(interval);
            imgCarousel();
        }
    }, 5000);

};

// Show the carousel only when the page finishes loading
// window.onload = imgCarousel();
imgCarousel();

// Filling the books
let fillCards = function () {

    let divCard = document.querySelectorAll("div.card");
    let cardImg = document.querySelectorAll("div.card img");
    let titleCard = document.querySelectorAll("div.overlay h2");
    let pResume = document.querySelectorAll("div.overlay p.resume");
    let pCategory = document.querySelectorAll("div.overlay p.category");
    let pPrice = document.querySelectorAll("div.overlay p.price");
    
    let books = [
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Clean Code',
            abstract: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.',
            category: 'Auto Ajuda',
            price: '40.0'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg',
            title: 'Domain-Driven Design',
            abstract: 'Domain-Driven Design fills that need. This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains.',
            category: 'Fantasia',
            price: '20.0'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/516tg-5b2ZL._SX380_BO1,204,203,200_.jpg',
            title: 'Clean Architecture',
            abstract: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.',
            category: 'Auto Ajuda',
            price: '60.0'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Clean Code',
            abstract: 'Robert C. Martin (“Uncle Bob”) has been a programmer since 1970. He is founder of Uncle Bob Consulting, LLC, and cofounder with his son Micah Martin of The Clean Coders LLC. Martin has published dozens of articles in various trade journals and is a regular speaker at international conferences and trade shows.',
            category: 'Romance',
            price: '10.0'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Cracking the Coding Interview',
            abstract: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup and the author of Cracking the PM Interview and Cracking the Tech Career. Her background is in software development. She has worked as a software engineer at Google, Microsoft, and Apple.',
            category: 'Ficção Científica',
            price: '150.0'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41vEGoXo1sL._SX323_BO1,204,203,200_.jpg',
            title: 'Javascript e Jquery',
            abstract: 'Jon Duckett projeta e desenvolve websites há mais de quinze anos. Trabalhou em pequenas startups e empresas internacionais e escreveu mais de uma dúzia de livros sobre web design e programação.',
            category: 'Romance',
            price: '200.0'
        }
    ];

    // Setting the attributes according to the books array
    for (let i = 0; i < divCard.length; i++) {
        cardImg[i].setAttribute('src', books[i].img);
        titleCard[i].textContent = books[i].title;
        pResume[i].textContent = books[i].abstract;
        pCategory[i].textContent = books[i].category;
        pPrice[i].textContent = books[i].price;
    }

};

fillCards();

// Making a book filter
let searchingBooks = function () {
    let btnSearch = document.getElementById('search_button');
    let inputSearch = document.getElementById('search_bar');

    // Catch and pass the text when the button is clicked if isn't empty
    btnSearch.onclick = function () {
        if (inputSearch.value != '') {
            searchingBooks(inputSearch.value);
        }
    };

    // Catch and pass the text when the enter is pressed if isn't empty
    inputSearch.addEventListener('keyup', function (event) {
        if ((event.keyCode === 13) && (inputSearch.value != '')) {
            searchingBooks(inputSearch.value);
        }
    });

    // Receive the property and does the search
    searchingBooks = function (input) {
        let getCards = document.querySelectorAll('.card');

        // Scrolls through the cards and changes their display
        for (let i = 0; i < getCards.length; i++) {
            let getTitle = getCards[i].querySelector('h2').textContent || getCards[i].querySelector('h2').innerText;

            let getCategory = getCards[i].querySelector('.category').textContent || getCards[i].querySelector('.category').innerText;

            if ((getTitle.toUpperCase() == input.toUpperCase())
             || (getCategory == input )) {
                getCards[i].style.display = '';
            } else getCards[i].style.display = 'none';

        }

        // If the user clears the input label, shows all cards again
        inputSearch.addEventListener('keyup', function (event) {
            if (event.keyCode === 8) {
                let timePressed = 0;

                if (timePressed >= inputSearch.value.length) {
                    for (let i = 0; i < getCards.length; i++) {
                        getCards[i].style.display = '';
                    }
                }
            }
        });

    };


    let searchingByCategory = function () {
        let categoryField = document.getElementById("category");
        categoryField.onclick = function () {
            if(categoryField.value != '') {
                searchingBooks(categoryField.value);
            }
        }
    };
    searchingByCategory();


    // NOTE: parei aqui
    let searchingByPrice = function () {
        let priceField = document.getElementById("price_range");
        priceField.onclick = function () {
            if(priceField.value != '') {
                searchingBooks(priceField.value);
            }
        }
    };
    searchingByPrice();
}

searchingBooks();





/*
 TODO:
- Verificar side menu em mobile;
- Baixar as imagens pro projeto;
- Ao clicar no card, mostra as informações do livro;
- REAPROVEITAR OS CÓDIGOSSSSSS
- SAIR DA PROCURA POR CATEGORIA/PREÇO
.
*/