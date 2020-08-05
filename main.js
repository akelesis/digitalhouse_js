// Alterações Douglas Reis - Vespertino 

// função de revelar o Menu
function openNav() {
    document.getElementById("sideNav").style.right = "0";
}

// função de ocultar o Menu
function closeNav() {
    document.getElementById("sideNav").style.right = "-266px";
}

// função Showcase livros

const livros = [
    {
        capa:"./img/capas/l1.jpg",
        titulo: "Data Science do Zero - Primeiras regras com Python",
        descricao: "Joel Grus, um engenheiro de software do Google, leva o leitor em uma imersão no universo da Ciência de Dados e das áreas de conhecimento que lhe deram origem: álgebra linear, estatística, Big Data e Inteligência Artificial. O livro, focado em iniciantes, ensina como funcionam as ferramentas e algoritmos mais usados em data science e como implementá-los do zero. De quebra, o livro também acompanha um curso intensivo de Python."
    },
    {
        capa:"./img/capas/l2.jpg",
        titulo: "A lógica do cisne negro",
        descricao: "Um livro divertido e cheio de passagens bem humoradas que traz aplicações matemáticas e estatísticas para a vida real com histórias e anedotas palpáveis e às vezes filosóficas. Apesar da temática do livro não tratar de forma abrangente Data Science, ele foca nos chamados Outliers, que são dados totalmente fora da curva e que se diferenciam muito dos outros."
    },
    {
        capa:"./img/capas/l3.jpg",
        titulo: "Data Science para Negócios",
        descricao: "Longe de ser um guia somente técnico, este livro escrito pelos especialistas Foster Provost e Tom Fawcett apresenta os fundamentos básicos de Data Science ao mesmo tempo que mostra como distinguir quais dados são comercialmente valiosos e úteis. O guia também ajuda a entender melhor o conceito e algumas técnicas de mineração de dados."
    },
    {
        capa:"./img/capas/l4.jpg",
        titulo: "Big Data - como extrair volume, variedade, velocidade e valor da avalanche de informação cotidiana",
        descricao: "Quais os impactos da grande quantidade de dados que temos hoje na economia, na ciência e na sociedade? O livro traz exemplos de situações reais e simples, como o aumento de passagens de avião, para falar sobre a influência de grandes bancos de dados em nosso comportamento, comparando o Big Data a uma revolução semelhante ao que foi a chegada da internet."
    },
    {
        capa:"./img/capas/l5.jpg",
        titulo: "Introdução à ciência de dados - mineração de dados e big data",
        descricao: "Similar ao livro anterior, este também mergulha nos questionamentos sobre como a ciência de dados influencia nosso cotidiano, mas dedica menos páginas a análises e é mais focado em conceitos, técnicas e prática. O livro é dividido em uma parte teórica e outra prática."
    },
    {
        capa:"./img/capas/l6.jpg",
        titulo: "Androides Sonham com Ovelhas Elétricas?",
        descricao: "Este foi o livro de Philip K. Dick que inspirou o aclamado filme Blade Runner: Caçador de Androides. A história gira em torno de um futuro distópico no qual o planeta Terra é habitado por aqueles que não conseguiram escapar das devastadoras consequências de uma guerra nuclear. A forma de vida orgânica como conhecemos hoje ganha outro sentido e significado, tornando-se extremamente valiosa."
    },
]

const cards = document.getElementsByClassName("card");

function changeCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].querySelector("img").src = livros[i].capa;
        cards[i].querySelector("h2").innerHTML = livros[i].titulo;
        cards[i].querySelector("p").innerHTML = livros[i].descricao;
    }
}

changeCards();

// função Filtragem de pesquisa
