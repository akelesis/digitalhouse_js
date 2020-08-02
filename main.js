// inseting css to dh_menu_nav
let dh_menu_navi = document.getElementById("dh_menu_nav");
dh_menu_navi.display = "flex";
dh_menu_navi.style.flexDirection = "column";

// inseting css to headerNav
let headerNav = document.getElementById("headerNav");
headerNav.style.height= "100vh";
headerNav.style.width= "0"; 
headerNav.style.position= "fixed";
headerNav.style.top= "0";
headerNav.style.right= "0";
headerNav.style.margin= "0"
headerNav.style.transition= "0.8s";
headerNav.style.overflow.x= "hidden";
headerNav.style.listStyle= "none";
headerNav.style.padding= "80px 0px 0px 0px";
headerNav.style.backgroundColor= "#F71735";
headerNav.style.zIndex= "10";
headerNav.style.textAlign= "center";

// inseting css to menuitem

let menuItem = document.getElementsByClassName("dh_menu_item");
for(i = 0; i < menuItem.length; i++) {
    menuItem[i].style.padding= "2% 0%";
}
//Verificar depois. Não consegui passar esses parametros pelo js
    
    /* menuItem[i].style.color= "#eed0cb";  
    menuItem[i].style.font.family= '"Mulish", sans-serif';
    menuItem[i].style.font.size= "1.3em";
    menuItem[i].style.font.weight= "200";
    menuItem[i].style.font.decoration= "none"; */
    

// open/close header menu

let dh_menu_btn = document.getElementById("dh_menu_btn");
dh_menu_btn.style.zIndex = "15";
dh_menu_btn.onclick = function () {
    if (dh_menu_btn.className == 'fa fa-bars'){
        dh_menu_btn.className = 'fa fa-close';
        dh_menu_btn.style.right = "20px";
        dh_menu_btn.style.top = "15px";
        dh_menu_btn.style.position = "fixed";
        document.getElementById("headerNav").style.width = "300px";
    }
    else{
        dh_menu_btn.className = 'fa fa-bars';
        //dh_menu_btn.removeAttribute('style', 'position');
        document.getElementById("headerNav").style.width = "0";
    }
};


// Css to Carousel
let hdCarouselJPG = document.getElementById("dh_carousel_jpg");
hdCarouselJPG.style.height= "60vh";
hdCarouselJPG.style.width= "100vw";
hdCarouselJPG.style.objectFit = "cover";
hdCarouselJPG.setAttribute('src', `https://image.freepik.com/vetores-gratis/interior-de-biblioteca-de-prateleiras-de-livro_48369-5719.jpg`);


// Carousel images
let Carousel = function () {
    let arrayCarouselImages = [
        'https://image.freepik.com/vetores-gratis/conceito-horizontal-do-modelo-da-bandeira-dos-livros-da-biblioteca_96318-5842.jpg',
        'https://image.freepik.com/vetores-gratis/conceito-horizontal-de-leitura-on-line-banner-modelo_96318-5840.jpg',
        'https://image.freepik.com/vetores-gratis/livros-diferentes-banner-modelo-horizontal-conceito_96318-5841.jpg',
        'https://image.freepik.com/vetores-gratis/interior-de-biblioteca-de-prateleiras-de-livro_48369-5719.jpg'
    ];
    let i = 0;
    
    let interval = setInterval(function () {
        hdCarouselJPG.setAttribute('src', `${arrayCarouselImages[i]}`);
        i++;
        if (i == arrayCarouselImages.length) {
            i = 0;
        }
    }, 4000);

}
Carousel();

// Inserting the book images
let booksf = function () {
    let Card = document.querySelectorAll("div.card");
    let IMG = document.querySelectorAll("div.card img");
    let Title = document.querySelectorAll("div.overlay h2");
    let Text = document.querySelectorAll("div.overlay p");
    let books = [
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/51o4wPueW6L._SX346_BO1,204,203,200_.jpg',
            title: 'Copywriting',
            text: 'Este é um livro sobre O Método de Escrita Centenário Mais Cobiçado do Mercado Americano. E a proposta dele é essa: Mostrar como aumentar o poder de comunicação e ensinar a desenvolver discursos altamente persuasivos e vendedores.',
            category: 'Auto Ajuda',
            price: '26.32'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/61F-RDvlMqL._SX398_BO1,204,203,200_.jpg',
            title: 'Aprenda a programar em 10 lições fáceis',
            text: 'Então você quer aprender a fazer programação, mas não sabe por onde começar? Este livro ensina a desenvolver instruções simples de programação usando o software Scratch, a dominar as habilidades de codificação para criar seu próprio jogo de computador e até seu próprio website. Seguindo as 10 lições aqui apresentadas, você poderá se tornar um gênio da programação!',
            category: 'Auto Ajuda',
            price: '38.42'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/41C0YKDaFwL._SX331_BO1,204,203,200_.jpg',
            title: 'A Verdadeira História da Ficção Científica',
            text: 'Numa linguagem acessível e abrangendo uma grande variedade de obras, o crítico e escritor Adam Roberts traça o desenvolvimento da ficção científica desde suas origens até sua atual disseminação na cultura popular, com seus desdobramentos no cinema, música e TV',
            category: 'Ficção Científica',
            price: '49.33'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/71nygThi5FL.jpg',
            title: 'O Labirinto Do Fauno',
            text: 'Quando estreou nos cinemas, O Labirinto do Fauno encantou público e crítica com sua história que mesclava sonho e realidade, trazendo para o universo da fantasia o cruel cotidiano da Espanha fascista de Franco. Mais de dez anos depois, a produção permanece conquistando fãs e mostrando que boas histórias são atemporais.',
            category: 'Fantasia',
            price: '35.91'
        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/413XcyZzPQL._SX339_BO1,204,203,200_.jpg',
            title: 'Mr. Romance',
            text: 'Max Riley pode fazer com que as fantasias mais incríveis ganhem vida: sob o alterego de Mr. Romance, ele pode ser um bilionário dominador, um bad boy inocente, um geek sexy ou qualquer outro homem que satisfaça os desejos das mulheres solitárias da alta sociedade de Nova York. No entanto, nada disso envolve sexo: são apenas encontros inesquecíveis. Intrigada com a lenda urbana de Mr. Romance, a jornalista Eden Tate está determinada a publicar uma matéria revelando sua identidade e suas artimanhas',
            category: 'Romance',
            price: '15.06'
        },
        {
            img: 'https://m.media-amazon.com/images/I/516chlklVXL.jpg',
            title: 'A pequena livraria dos sonhos',
            text: 'Nina Redmond é uma bibliotecária que passa os dias unindo alegremente livros e pessoas – ela sempre sabe as histórias ideais para cada leitor. Mas, quando a biblioteca pública em que trabalha fecha as portas, Nina não tem ideia do que fazer.',
            category: 'Romance',
            price: '22.41'
        }
    ];
    for (let i = 0; i < Card.length; i++) {
        IMG[i].setAttribute('src', books[i].img);
        Title[i].textContent = books[i].title;
        Text[i].textContent = books[i].text;
    }
};
booksf();


// Filtring the books
let bookSearch = function() {
    let searchBar = document.getElementById('search_bar');
    let searchButton = document.getElementById('search_button');
    let Books = document.getElementsByClassName('card');

    searchButton.onclick = function () {
        if (searchBar.value != '') {
            bookSearchok(searchBar.value);
        }
    };

    searchBar.addEventListener('keyup', function(event) {
        if (searchBar.value != '') {
            bookSearchok(searchBar.value);
        }
        else{
            for (let i = 0; i < Books.length; i++) {
                Books[i].style.display = '';
            }
        }
    });
    
    bookSearchok = function (input) {
        for (let i = 0; i < Books.length; i++) {
            let Title = Books[i].querySelector('h2').textContent;
    
            if (Title.toUpperCase().includes(input.toUpperCase())) {
                Books[i].style.display = '';
            } else  Books[i].style.display = 'none';
        }
    };
}
bookSearch();

