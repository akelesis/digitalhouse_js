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
window.onload = imgCarousel();

let cardsFill = function () {

    let divCard = document.querySelectorAll("div.card");
    let cardImg = document.querySelectorAll("div.card img");
    let titleCard = document.querySelectorAll("div.overlay h2");
    let pCard = document.querySelectorAll("div.overlay p");

    let books = [
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Clean Code',
            abstract: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/51sZW87slRL._SX375_BO1,204,203,200_.jpg',
            title: 'Domain-Driven Design',
            abstract: 'Domain-Driven Design fills that need. This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques, and fundamental principles that facilitate the development of software projects facing complex domains.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/516tg-5b2ZL._SX380_BO1,204,203,200_.jpg',
            title: 'Clean Architecture',
            abstract: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Clean Code 44444',
            abstract: 'Robert C. Martin (“Uncle Bob”) has been a programmer since 1970. He is founder of Uncle Bob Consulting, LLC, and cofounder with his son Micah Martin of The Clean Coders LLC. Martin has published dozens of articles in various trade journals and is a regular speaker at international conferences and trade shows.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L.jpg',
            title: 'Cracking the Coding Interview',
            abstract: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup and the author of Cracking the PM Interview and Cracking the Tech Career. Her background is in software development. She has worked as a software engineer at Google, Microsoft, and Apple. At Google, she interviewed hundreds of software engineers and evaluated thousands of hiring packets on the hiring committee. She holds a B.S.E. and M.S.E. in computer science from the University of Pennsylvania and an MBA from the Wharton School.'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41vEGoXo1sL._SX323_BO1,204,203,200_.jpg',
            title: 'Javascript e Jquery',
            abstract: 'Jon Duckett projeta e desenvolve websites há mais de quinze anos. Trabalhou em pequenas startups e empresas internacionais e escreveu mais de uma dúzia de livros sobre web design e programação.'
        }
    ];
    
    for(let i = 0; i < divCard.length; i++) {
        cardImg[i].setAttribute('src', books[i].img);
        titleCard[i].textContent = books[i].title;
        pCard[i].textContent = books[i].abstract;
    }
    
};

window.onload = cardsFill();

