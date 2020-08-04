
btnMenu.onclick = function () {
    let btnMenu = document.getElementById("dh_menu_btn");
    (btnMenu.className == 'side-menu-off') ? openNav() : closeNav();

    
    function openNav() {

        btnMenu.className = 'side-menu-on';
        btnMenu.style.position = "fixed";
        btnMenu.style.top = "15px";
        btnMenu.style.right = "20px";

        verifyIcon();

        document.getElementById("acao").style.width = "250px";
    }

 
    function closeNav() {

        btnMenu.className = 'side-menu-off';
        btnMenu.removeAttribute('style', 'position');

        verifyIcon();

        document.getElementById("acao").style.width = "0";
    }

  
    function verifyIcon() {
        let btnMenuIcon = document.getElementById("btnMenu");
        (btnMenuIcon.className == "fa fa-bars") ?
            btnMenuIcon.className = "fa fa-times" : btnMenuIcon.className = "fa fa-bars";
    }
};

var intervalo = 6000;

function slide1(){

    document.getElementById("banner").src ="./img/banner1.jpg";
    setTimeout("slide2()", intervalo);

}


function slide2(){

    document.getElementById("banner").src ="./img/banner2.jpg"
    setTimeout("slide3()", intervalo);

}

function slide3(){

    document.getElementById("banner").src ="./img/banner3.jpg"
    setTimeout("slide1()", intervalo);

}


function teste ()
{
    const filter = {
        title:      document.getElementById("search_bar").value.toLowerCase(),
        category:   document.getElementById("category").value,
        price_range:document.getElementById("price_range").value
    };

    const result= books.filter(function(item) {
        if (filter.title != "")
        {
            return item.title.toLowerCase().indexOf(filter.title) > -1;
        }
        else
        {
            for (var key in filter) {
                if (filter[key] != "" && key !="title"){
                    if (item[key] != filter[key])
                    return false;         
                }  
            }
            return true;
        }
    });
    
    console.log(result) 

 
    addBooks(result);

}


const books = [
    {
        image: "./img/livro6.jpg",
        title: "Chefs da TV",
        author: "Ana Maria Braga",
        description: "",
        category: "Auto Ajuda",
        price: "36,90",
        price_range: "medio"
    },
    {
        image: "./img/livro5.jpg",
        title: "The Secret",
        author: "Rhonda Byrne",
        description: "",
        category: "Fantasia",
        price: "60,00",
        price_range: "caro"
    },
    {
        image: "./img/livro3.jpg",
        title: "A batalha do Labirinto",
        author: "Rick Riordan",
        description: "",
        category: "Ficção Científica",
        price: "23,90",
        price_range: "medio"
    },
    {
        image: "./img/livro4.jpg",
        title: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        description: "Considerado um novo clássico, o livro foi lançado no Brasil em fevereiro de 2007. A história da menina Liesel, que em meio à terrível Alemanha nazista encontra conforto no mundo dos livros, conquistou milhões de leitores, somando mais de 3 milhões de exemplares vendidos. Em 2014, a obra foi adaptada para os cinemas e deu vida aos personagens que há quase uma década já encantavam pessoas por todo o mundo. ",
        category: "Romance",
        price: "31,41",
        price_range: "medio"
    },
    {
        image: "./img/livro2.jpg",
        title: "Bora Varejo",
        author: "Alfredo Soares",
        description:  "",
        category: "Auto Ajuda",
        price: "29,18",
        price_range: "medio"
    },
    {
        image: "./img/livro1.jpg",
        title: "Bora Vender",
        author: "Alfredo Soares",
        description: "No livro podemos encontrar dicas para que voce consiga melhor em seu negócio",
        category: "Auto Ajuda",
        price: "66,93",
        price_range: "mais caro"
    }
    
];


function addBooks(books) {
    const showcase = document.querySelector('.showcase');
    if (books.length == 0){
        showcase.textContent = "Infelizmente não temos esse produto ainda";
        showcase.classList.add("no_results");
    } 
    else {
        showcase.hasAttribute("class", "no_results") ? showcase.classList.remove("no_results") : "";
        
        let divs = "";
        books.forEach(book => {
            divs += 
            "<div class='card'>" +
                "<img class='imagebook' src='" + book.image + "' title = '" + book.description + "'>" +
                "<div class='overlay'>" +
                    "<h2 class='titlebook' >" + book.title + "</h2>" +
                    "<p class='authorbook'>" + book.author + "</p>" +
                    "<p class='pricebook'> Preço R$" + book.price + "</p>" +
                "</div>" +
            "</div>";
        });
        showcase.innerHTML = divs;
    }
}

function start() {
    slide1();
    addBooks(books);
}



/*Caro Professor, por estar começando a programar do 0 tive muitas dificuldades
principalmente na parte do filtro, se voce pode me indicar um livro que eu possa
entender mais como funciona ele no JavaScript iria ser muito bom !!

Pedi muita ajuda dos colegas, então, TALVEZ , você veja algo paredico com o deles

Muito Obrigado */