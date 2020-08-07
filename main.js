const button = document.getElementById("dh_menu_btn");
const menu = document.querySelector(".menu");
const carrossel_img = document.getElementById("carrossel_img");

// evento botão abrir/ fechar
button.addEventListener("click", function () {
    menu.classList.toggle("menu_open");
})

//carrossel de imagens
const carrosselImgs = [
    'https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/10/10/13/03/prague-980732_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/03/08/11/shelf-3195135_960_720.jpg'
];
let i = 0;
const intervalo = setInterval(function () {
        carrossel_img.setAttribute("src", `${carrosselImgs[i]}`);
        i++;
        if(i > 3) {
            i = 0;
        }
}, 2000);


const listaLivros = [
    {
        titulo: "A Sutil Arte De Ligar O Foda-Se",
        autor: "Mark Manson",
        imagem: "http://lojasaraiva.vteximg.com.br/arquivos/ids/3241025/1008449071.jpg?v=637034105101630000",
        descricao: "Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom de estar no fundo do poço. Coaching, autoajuda, desenvolvimento pessoal, mentalização positiva — sem querer desprezar o valor de nada disso, a grande verdade é que às vezes nos sentimos quase sufocados diante da pressão infinita por parecermos otimistas o tempo todo. ",
        categoria: "Auto Ajuda"
    },
    {
        titulo: "Nunca Foi Sorte",
        autor: "Adriana Sant'anna",
        imagem: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12115159/1007686183.jpg?v=637142270453600000",
        descricao: "A partir de sua história de vida, Adriana Sant’Anna traz ferramentas que ela mesma testou em sua rotina e fizeram com que deixasse para trás uma vida de derrotas e amargura para conquistar sucesso em todos os níveis. Se você quer transformar sua vida, desfrutar de saúde, bem-estar, relações amorosas sadias e prosperidade e não sabe de que maneira, ou, ainda, se você estiver enfrentando desafios, inspire-se e tenha coragem de mudar sua rota. ",
        categoria: "Auto Ajuda"
    },
    {
        titulo: "Star Wars - A Resistência Renasce",
        autor: "Rebecca Roanhorse",
        imagem: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12117902/1009199683.jpg?v=637142280337700000",
        descricao: "Batalhas serão travadas, alianças serão forjadas e a Resistência renascerá. Nesta história que se passa entre os filmes Star Wars: Os Últimos Jedi (2017) e o aguardado Star Wars: A Ascensão Skywalker, acompanharemos a General Leia Organa, Poe Dameron, Rey e Finn lutarem em prol da reconstrução da Resistência após sua grande perda nas mãos da Primeira Ordem.",
        categoria: "Ficção Científica"
    },
    {
        titulo: "A Queda De Gondolin",
        autor: "J. R. R. Tolkien",
        imagem: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12113416/1006831004.jpg?v=637142264514430000",
        descricao: "O último dos três Grandes Contos Perdidos do legendário de J.R.R.Tolkien narra a jornada de Tuor rumo à cidade secreta de Gondolin, refúgio élfico do povo do Rei Turgon. Contra a bela cidade, levanta-se Morgoth, o Inimigo Sombrio, com seu exército de seres malévolos.",
        categoria: "Ficção Cientifíca"
    },
    {
        titulo: "A Torre Negra",
        autor: "C. S. Lewis",
        imagem: "https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9376106&qld=90&l=830&a=-1=1007943217",
        descricao: "Continuação memorável das fantasias de C. S. Lewis, estas seis histórias revelam mais uma vez o poder e a visão deste importante contador de histórias, um dos nomes centrais da literatura de fantasia universal. A Torre Negra é um esboço de um quarto volume que daria continuidade à aclamada série de ficção científica de Lewis conhecida como Trilogia cósmica.",
        categoria: "Fantasia"
    },
    {
        titulo: "O nome do vento",
        autor: "Patrick Rothfuss",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51CumRhePVL._SX346_BO1,204,203,200_.jpg",
        descricao: "Ninguém sabe ao certo quem é o herói ou o vilão desse fascinante universo criado por Patrick Rothfuss. Na realidade, essas duas figuras se concentram em Kote, um homem enigmático que se esconde sob a identidade de proprietário da hospedaria Marco do Percurso.",
        categoria: "Fantasia"
    },
    {
        titulo: "Romance com o Duque",
        autor: "Tessa Dare",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51CmTX70BQL._SX345_BO1,204,203,200_.jpg",
        descricao: "“Izzy sempre sonhou em viver um conto de fadas. Mas, por ora, ela teria que se contentar com aquela história dramática.”A doce Isolde Ophelia Goodnight, filha de um escritor famoso, cresceu cercada por contos de fadas e histórias com finais felizes. Ela acreditava em destino, em sonhos e, principalmente, no amor verdadeiro.",
        categoria: "Romance"
    },
    {
        titulo: "Ao seu lado",
        autor: "Kasie West ",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51he3wIEopL._SX335_BO1,204,203,200_.jpg",
        descricao: "O que fazer quando você se apaixona pela pessoa que menos esperaria? Depois de se ver trancada acidentalmente na biblioteca pelo fim de semana inteiro, Autumn Collins não acha que as coisas podem piorar. Mas ela percebe que não está sozinha. Dax Miller está trancado com ela. ",
        categoria: "Romance"
    },
    {
        titulo: "Harry Potter e a pedra filosofal",
        autor: "J.K. Rowling",
        imagem: "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UY218_.jpg",
        descricao: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural.",
        categoria: "Fantasia"
    }
]

const container = document.querySelector(".showcase");
const filtrar = document.getElementById("search_button");
const searchBar = document.getElementById("search_bar");

listaLivros.forEach(livro => {
    card = document.createElement("div");
    card.setAttribute("class", "card");
    
    card.innerHTML = `
        <img src=${livro.imagem} id="card-img" />
        <div class="overlay">
            <h2>${livro.titulo}</h2>
            <h3>${livro.autor}</h3>
            <p>${livro.descricao}</p>
        </div>
    `
    container.appendChild(card);
});

filtrar.addEventListener("click", function() {
    container.innerHTML = "";
    const listaFiltrada = listaLivros.filter(livro => {
        return livro.titulo === searchBar.value;
    })
    listaFiltrada.forEach(livro => {
        card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `
        <img src=${livro.imagem} id="card-img" />
        <div class="overlay">
            <h2>${livro.titulo}</h2>
            <h3>${livro.autor}</h3>
            <p>${livro.descricao}</p>
        </div>
    `
    container.appendChild(card);
    })
})































// function inserirLivros() {
//     for (let i = divCard.length; i < livros.length; i++) {
//         showCase.innerHTML += `
//             <div class="card">
//                 <img src=${livros[i].imagem} id="card-img">
//                 <div class="overlay">
//                     <h2>${livros[i].titulo}</h2>
//                     <h3>${livros[i].autor}</h2
//                     <p>${livros[i].descricao}</p>
//                 </div>
//             </div>
//         `
//     }
// }
// inserirLivros();

// // pesquisa por título
// const input = document.getElementById("search_bar");
// const search_button = document.getElementById("search_button");

// const erro = "Pesquisa inválida";

// function pesquisa() {
//     livros.filter(function(livro) {
//         if(input.value === livro.titulo) {
//             return livros;
//         } else {
//             return erro;
//         };
//     });
// };

// search_button.addEventListener("click", pesquisa);















































