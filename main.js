//API Livros
var objLivros = [
    {
        nome: "A menina que roubava livros",
        ano: 2014,
        autor: "Markus Zusak",
        capa: "img/meninaroubava.jpg",
        categoria: "Romance",
        preco: 55
    },
    {
        nome: "Teorema de Katherine",
        ano: 2018,
        autor: "John Green",
        capa: "img/teorema.jpg",
        categoria: "Fantasia",
        preco: 20
    },
    {
        nome: "A culpa é das estrelas",
        ano: 207,
        autor: "John Green",
        capa: "img/culpa.jpg",
        categoria: "Auto ajuda",
        preco: 30
    },
    {
        nome: "Anne Frank",
        ano: 2009,
        autor: "Orro H. Frank",
        capa: "img/anne.jpg",
        categoria: "Romance",
        preco: 50
    },
    {
        nome: "Revolução dos bichos",
        ano: 2007,
        autor: "George Orwell",
        capa: "img/revolucao.jpg",
        categoria: "Ficção Científica",
        preco: 90
    },
    {
        nome: "A Cabana",
        ano: 2007,
        autor: "William P. Young",
        capa: "img/cabana.jpg",
        categoria: "Fantasia",
        preco: 60
    }
]

//Imprimir livros - OK
var blocoLivros = document.querySelector(".showcase");

objLivros.forEach(livro => {
    var card = document.createElement('div');
    card.setAttribute("class", "card");
    var img = document.createElement('img');
    img.setAttribute("src", livro.capa);
    img.setAttribute("width", 300);
    img.setAttribute("height", 400);
    var divtexto = document.createElement('div');
    divtexto.setAttribute("class", "overlay")
    divtexto.innerHTML = `<h3>${livro.nome}</h3><p>${livro.autor}</p>`
    card.appendChild(img);
    card.appendChild(divtexto);
    blocoLivros.appendChild(card);
})

//Carrossel - OK

// var imglivros = ["img/livros1.jpg", "img/livros2.jpg", "img/livros3.jpg"];
var imgLivros = ['1', '2', '3'];
var carrosel = document.getElementById("dh_carousel");

// // carrosel.innerHTML = "<div id='divimg'><img id='imagemlivro' src='img/livros1.jpg' alt='capa de livros'></div>"

// imgLivros.forEach(imagem => {
    var i = 0;
    setInterval(function(){
        carrosel.innerHTML = "<div id='divimg' style='background-image: url(img/livros"+imgLivros[i]+".jpg)'></div>"
        // console.log(imgLivros[i]);
        i++;
        if(i>2){
            i=0;
        }
    }, 3000);
// });

// for(var i=0; i<imglivros.length; i++){
//     setInterval(function(){
//     //     carrosel.innerHTML = "<div id='divimg' style='background-image: url(img/livros"+imglivros[i]+".jpg)'></div>"
//         console.log(imglivros[i]);
//     }, 3000)
// }

// for(var i=0; i<imglivros.length; i++){
//     console.log(imglivros[i]);
// }

//filtro
var inputs = document.getElementById('search_bar');
var btnFiltro = document.getElementById('search_button');
var blocoLivros = document.querySelector(".showcase");
var cat = document.querySelector("#category");
var price = document.querySelector("#price_range");

for (var i=0; i < objLivros.length; i++){
    if(objLivros[i].preco>60){
        objLivros[i].priceStr = "mais caro";
    } else if (objLivros[i].preco>40){
        objLivros[i].priceStr = "caro";
        } else if (objLivros[i].preco>20){
            objLivros[i].priceStr = "medio";
            } else {
                objLivros[i].priceStr = "barato";
        }
}

// console.log(objLivros);
// console.log(cat.value);

btnFiltro.addEventListener('click', function(){
    var blocos = document.querySelectorAll(".card");
    var nomeLivro = inputs.value;
    // console.log(nomeLivro);
    // console.log(cat.value);
    if (cat.value === "" && price.value === "" && nomeLivro.nome != ""){
        var resultFilter = objLivros.filter(function(book){
            return book.nome === nomeLivro && book.categoria
        })}else if (nomeLivro === "" && price.value === "" && cat.value != ""){
            var resultFilter = objLivros.filter(function(book){
                return book.categoria === cat.value 
        })}else if (nomeLivro === ""  && cat.value === "" && price.value != ""){
            var resultFilter = objLivros.filter(function(book){
                return book.priceStr === price.value
        })}else if (nomeLivro === ""  && cat.value != "" && price.value != ""){
            var resultFilter = objLivros.filter(function(book){
                return book.priceStr === price.value && book.categoria === cat.value
        })}else if (nomeLivro != ""  && cat.value === "" && price.value != ""){
            var resultFilter = objLivros.filter(function(book){
                return book.priceStr === price.value && book.nome === nomeLivro
            })}else if (nomeLivro != ""  && cat.value != "" && price.value === ""){
                var resultFilter = objLivros.filter(function(book){
                    return book.categoria === cat.value && book.nome === nomeLivro
                })} else{
                    var resultFilter = objLivros.filter(function(book){
                        return book.nome === nomeLivro && book.categoria === cat.value && book.priceStr === price.value
                })}
    // console.log(resultFilter);
    // console.log(cat.value);
    // console.log(price.value);
    // console.log(nomeLivro);
    // console.log(blocos);
    if (resultFilter.length==0){
        alert(`O livro ${nomeLivro} não foi encontrado com os parametros passados!`);
    }

    for (var i=0; i<blocos.length; i++){
        blocoLivros.removeChild(blocos[i]);
    };

    resultFilter.forEach(livroResult => {
            var card = document.createElement('div');
            card.setAttribute("class", "card");
            var img = document.createElement('img');
            img.setAttribute("src", livroResult.capa);
            img.setAttribute("width", 300);
            img.setAttribute("height", 400);
            var divtexto = document.createElement('div');
            divtexto.setAttribute("class", "overlay")
            divtexto.innerHTML = `<h3>${livroResult.nome}</h3><p>${livroResult.autor}</p>`
            card.appendChild(img);
            card.appendChild(divtexto);
            blocoLivros.appendChild(card);
        });
})

//botao hamburguer - OK
var btnMenu = document.getElementById("dh_menu_btn");
var cabecalho = document.querySelector('header')
var statusBtn = true;
var menuH = document.createElement('div');
menuH.setAttribute("class","menuSusp");

btnMenu.addEventListener('click', function(){
    if (statusBtn){
        btnMenu.appendChild(menuH);
        menuH.innerHTML = '<ul type="none"><li><a href="index.html">Home</></li><li><a href="https://www.google.com">Pesquisar</></li><li><a href="https://www.facebook.com">Compartilhar</></li></ul>'
        statusBtn = false;
        console.log(statusBtn);
    }else{
        btnMenu.removeChild(menuH);
        statusBtn = true;
        console.log(statusBtn);
    }
})

