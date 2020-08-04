
let i = 1;
const slide = document.getElementById('slide');
const frase = document.getElementById('frase');

const alt = ["O livro é um mudo que fala, um surdo que responde, um cego que guia, um morto que vive.",
            "Sempre imaginei que o paraíso fosse uma espécie de biblioteca.", 
            //"Alguém dissera um dia que se podia viver sem tudo, menos água e comida, mas que viver sem livros e sem música não seria o mesmo que viver.", 
            "Bendito aquele que semeia livros e faz o povo pensar.",
            "Um livro é um brinquedo feito com letras. Ler é brincar.", 
            "Há livros escritos para evitar espaços vazios...", 
            "Livros não mudam o mundo, quem muda o mundo são as pessoas. Os livros só mudam as pessoas.", 
            "Cresci no meio de livros, fazendo amigos invisíveis em páginas que se desfaziam em pó cujo cheiro ainda conservo nas mãos.", 
            "Da letra à palavra e daqui a pouco um livro.", 
            "Livro que não é lido é conhecimento adormecido.", 
            "O livro é um mestre que fala mas que não responde.", 
            "Não é livro que negocio, mas um pedaço do meu sonho.",
            "Cada livro tem uma alma, a alma de quem o tinha escrito e a alma de quem o tinha lido e sonhado com ele."]

function slideShow () {

    setInterval(() => {
        if (i < 12) {
            slide.style.opacity = 0;
            slide.setAttribute("src", `img/carrossel/Carrossel_${i}.png`);
            frase.innerHTML = `${alt[i]}`;
            slide.style.opacity = 1;
            i++;
        } else {
            i = 1;
        }
    }, 5000);

}

function cardBook () {

    document.getElementById('container-card').innerHTML = "";
    
    const card = livraria.results.map(livro => {
        return(
            `
            <div class="card" >
                <img src=${livro.capa} id="card-img">
                <div class="overlay">
                    <div class="overlay_into">
                        <h2>${livro.titulo}</h2>
                        <h3>${livro.autor}</h3>
                        <p>${livro.descricao}</p>
                        <p>R$ ${(livro.preco).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            `
        );
    });

    for (let i = 0; i < card.length; i++) {
        document.getElementById('container-card').innerHTML += card[i];
    }

}

function filtro () {

    document.getElementById('container-card').innerHTML = "";

    const acharName = document.getElementById("search_bar").value;

    const categoria = document.getElementById("category");
    const acharCategoria = categoria.options[categoria.selectedIndex].value;

    const precoRange = document.getElementById("price_range");
    const acharPreco = precoRange.options[precoRange.selectedIndex].value;
    
    const bookName = livraria.results.filter(livro => livro.titulo === acharName || livro.editora === acharName || livro.autor === acharName || livro.categoria === acharCategoria || livro.precoR === acharPreco)
    
    for (let i = 0; i < bookName.length; i++) {
        document.getElementById('container-card').innerHTML += `
            <div class="card" >
                <img src=${bookName[i].capa} id="card-img">
                <div class="overlay">
                    <div class="overlay_into">
                        <h2>${bookName[i].titulo}</h2>
                        <h3>${bookName[i].autor}</h3>
                        <p>${bookName[i].descricao}</p>
                        <p>R$ ${(bookName[i].preco).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
    }

}


slideShow();
cardBook();



