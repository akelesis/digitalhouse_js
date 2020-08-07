// ------------------------ Insert books -------------------------
let books = [
    {   
        title: "O poder do hábito",
        img: "img/opoderdohabito.png",
        description: "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa.",
        author: "Charles Duhigg",
        category: "Auto Ajuda",
        price: "44.90",
        priceRange: "caro"
    },
    {
        title: "Do Mil ao Milhão. Sem Cortar o Cafezinho.",
        img: "img/do_mil_ao_milhao.png",
        description: "Em seu primeiro livro, Thiago Nigro, criador da plataforma O Primo Rico, ensina aos leitores os três pilares para atingir a independência financeira: gastar bem, investir melhor e ganhar mais. Por meio de dados e de sua própria experiência como investidor e assessor, Nigro mostra que a riqueza é possível para todos – basta estar disposto a aprender e se dedicar.",
        author: "Thiago Nigro",
        category: "Auto Ajuda",
        price: "23.73",
        priceRange: "medio"
    },
    {
        title:"A cinco passos de você",
        img: "img/a_cinco_passos_de_vc.png",
        description:"Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não existe sem a outra.",
        author: "Rachael Lippincott",
        category:"Romance",
        price:"23.84",
        priceRange: "medio"
    },
    {
        title: "A casa da praia",
        img: "img/a_casa_da_praia.png",
        description: "Quem disse que a história de Elle e Noah acabou? Para a sorte de todos nós, que amamos A Barraca do Beijo, Beth Reeckles decidiu contar mais um pouco da história deles. Namorar o maior bad boy da escola jamais esteve nos planos de ELLE EVANS, mas aconteceu. Porém, isso teve um preço. Sua amizade com LEE FLYNN foi colocada à prova e ela teve que rever suas prioridades e abrir o jogo de uma vez por todas sobre o seu relacionamento secreto com NOAH FLYNN. Pode parecer um sonho finalmente conquistar o crush eterno de uma vida, mas uma hora o ensino médio vai acabar e Noah começará a faculdade.",
        author: "Beth Reekles",
        category: "Ficção Científica",
        price: "19.44",
        priceRange: "barato"
    },
    {
        title: "Duna",
        img: "img/duna.png",
        description: "Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2.",
        author: "Frank Herbert",
        category: "Fantasia",
        price: "51.99",
        priceRange: "mais caro",
    },
    {
        title: "As Crônicas de Nárnia",
        img: "img/as_cronicas_de_narnia.png",
        description: "Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como 'As crônicas de Nárnia'. Nos últimos cinqüenta anos, 'As crônicas de Nárnia' transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações.",
        author: "C. S. Lewis",
        category: "Ficção Científica",
        price: "19.90",
        priceRange: "barato"
        
    }
]
function addBooks() {
    let showcase = document.querySelector(".showcase");
    
    

    books.forEach(book=> {
        let card = document.createElement("div");
        card.className = "card";

        //Cover 
        let img = document.createElement("img");
        
        let overlay = document.createElement("div");
        overlay.className = "overlay";

        //Title
        let h2 = document.createElement("h2");

        //Description
        let p = document.createElement("p");

        img.src = book.img;
        h2.textContent = book.title;
        p.textContent = book.description;

        //Inserting 
        showcase.appendChild(card);
        card.appendChild(img);
        card.appendChild(overlay);
        overlay.appendChild(h2);
        overlay.appendChild(p);
    })
}
function listBooks(){
    addBooks(books);
}

//------------------------ Filters ---------------------
