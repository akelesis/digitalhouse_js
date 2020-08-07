document.getElementById('search_bar').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        pesquisa();
    }
});

//Agrupa os autores e insere na combo
let group = books.reduce((r, a) => {
    r[a.author] = [...r[a.author] || [], a];
    return r;
   }, {});

for (autor in group){
    let opt = document.createElement('option');
    opt.value = autor;
    opt.textContent = autor;
    document.getElementById('category').appendChild(opt);
}


//insere as imagens no carousel
books.forEach(function(livro) {
    let imgC = document.createElement('img');
    imgC.className = 'imgCarousel';
    imgC.src = livro.image

    document.getElementById('dh_carousel').appendChild(imgC);
});

duplicCarousel();
insereLivros(books);


function duplicCarousel(){
    const imgsCarousel = document.getElementById('dh_carousel').children;
    Array.prototype.slice.call(imgsCarousel).forEach(function(a) {
        let b = a.cloneNode(true);
        document.getElementById('dh_carousel').appendChild(b);
    });
}

function insereLivros(books){

        books.forEach(function(livro) {

        let div = document.createElement('div');
        div.className = 'card';

        let img = document.createElement('img');
        img.src = livro.image;

        let divov = document.createElement('div');
        divov.className='overlay';

        let titulo = document.createElement('h2');
        titulo.textContent = livro.title;

        let texto = document.createElement('p');
        texto.textContent = livro.author;

        let preco = document.createElement('p')
        preco.textContent = "R$ " + (livro.price.value * 4).toFixed(2);
        preco.style.fontStyle= "italic"
        divov.appendChild(titulo);
        divov.appendChild(texto);
        divov.appendChild(preco);
        div.appendChild(img);
        div.appendChild(divov);

        document.querySelector(".showcase").appendChild(div);

    })
}

function limpaLista(){
    let livrosAtuais = document.getElementsByClassName('card');
    Array.prototype.slice.call(livrosAtuais).forEach(a => document.querySelector(".showcase").removeChild(a));
}

function pesquisa(){

    limpaLista()
    let pBooks = books;

    //filtra preco
    const e = document.getElementById("price_range").selectedIndex;
    if (e > 1) { pBooks = filtraPreco(e) };

     //filtra autor
    if (document.getElementById('category').selectedIndex > 1) {
        pBooks = pBooks.filter(livro => livro.author == document.getElementById('category').value);
    }

     //filtra usuario
    let procura = document.getElementById("search_bar").value.toUpperCase();
    if  (procura.length > 0 ){ pBooks = pBooks.filter(livro => livro.title.toUpperCase().indexOf(procura) != -1);}

    insereLivros(pBooks);

}

 function filtraPreco(e){

    var result;
    switch (e) {

        case 1:
            result = books;
        break;

        case 2:
            result = books.filter(livro => livro.price.value * 4 < 21);//*4 Eur para Real
        break;

        case 3:
            result = books.filter(livro => livro.price.value * 4 >= 21 && livro.price.value * 4 < 41 );
        break;

        case 4:
            result = books.filter(livro => livro.price.value * 4 >= 41 && livro.price.value * 4 < 61 );
        break;

        case 5:
            result = books.filter(livro => livro.price.value * 4 >= 61);
        break;
    }

    return result
}

 function abreNav() { document.getElementById("mySidenav").style.width = "250px" };
 function fechaNav() { document.getElementById("mySidenav").style.width = "0" };