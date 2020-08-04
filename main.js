const btnOpen = document.getElementById("dh_menu_btn");
const lista = document.getElementById("menu-opt");

btnOpen.addEventListener("mouseover", () => {
    lista.style.width = "250px";
})

lista.addEventListener("mouseleave", () => {
    lista.style.width = "0px";
})

function slide1(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/senhor_dos_aneis.png')";
    setTimeout("slide2()", 5000)
    }
    
function slide2(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/harry_potter.jpg')";
    setTimeout("slide3()", 5000)
    }
    
function slide3(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/jogos_vorazes.jpg')";
    setTimeout("slide1()", 5000)
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

 //-------------------------- Insert Books --------------------------
const books = [
    {
        image: "./img/image001.jpg",
        title: "A Sutil Arte De Ligar O Foda-Se",
        author: "Mark Manson e Joana Faro",
        description: "Com uma linguagem bem-humorada e ácida, A sutil arte de ligar o f*da-se propõe um novo olhar para a vida, mais coerente com a realidade uma oposição à pressão social para sempre demonstrar otimismo.",
        category: "Auto Ajuda",
        price: "36,90",
        price_range: "medio"
    },
    {
        image: "./img/image002.jpg",
        title: "As Crônicas de Nárnia",
        author: "C. S. Lewis",
        description: "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis.",
        category: "Fantasia",
        price: "60,00",
        price_range: "caro"
    },
    {
        image: "./img/image003.jpg",
        title: "Harry Potter e a pedra filosofal",
        author: "J.K. Rowling",
        description: "Harry é um bruxo, filho único de James Potter e Lílian Evans Potter, considerado um dos mais famosos feiticeiros dos tempos modernos. Ele também foi um dos alunos mais famosos da Escola de Magia e Bruxaria de Hogwarts de seu tempo.",
        category: "Fantasia",
        price: "23,90",
        price_range: "medio"
    },
    {
        image: "./img/image004.jpg",
        title: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        description: "Considerado um novo clássico, o livro foi lançado no Brasil em fevereiro de 2007. A história da menina Liesel, que em meio à terrível Alemanha nazista encontra conforto no mundo dos livros, conquistou milhões de leitores, somando mais de 3 milhões de exemplares vendidos. Em 2014, a obra foi adaptada para os cinemas e deu vida aos personagens que há quase uma década já encantavam pessoas por todo o mundo. ",
        category: "Romance",
        price: "31,41",
        price_range: "medio"
    },
    {
        image: "./img/image005.jpg",
        title: "A cinco passos de você",
        author: "Rachael Lippincott, Amanda Moura, e outros",
        description:  "E se você se apaixonasse mas não pudesse tocar seu amado? A cinco passos de você estreou na lista de mais vendidos do New York Times apenas uma semana após seu lançamento.",
        category: "Romance",
        price: "29,18",
        price_range: "medio"
    },
    {
        image: "./img/image006.jpg",
        title: "Star Wars - A Resistência Renasce",
        author: "Rebecca Roanhorse e Guilherme Summa",
        description: "Nesta história que se passa entre os filmes Star Wars: Os Últimos Jedi, de 2017, e o aguardado Star Wars: A Ascensão Skywalker, acompanharemos a General Leia Organa, Poe Dameron, Rey e Finn lutarem em prol da reconstrução da Resistência após sua grande perda nas mãos da Primeira Ordem.",
        category: "Ficção Científica",
        price: "56,93",
        price_range: "mais caro"
    }
    
];


function addBooks(books) {
    const showcase = document.querySelector('.showcase');
    if (books.length == 0){
        showcase.textContent = "Nenhum resultado.";
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