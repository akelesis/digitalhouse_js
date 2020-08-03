
let i = 1;
const slide = document.getElementById('slide');


function slideShow () {

    setInterval(() => {
        if (i < 12) {
            slide.style.opacity = 0;
            slide.setAttribute("src", `img/carrossel/Carrossel_${i}.png`);
            slide.style.opacity = 1;
            i++;
        } else {
            i = 1;
        }
    }, 3000);

}

function cardBook () {
    
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



