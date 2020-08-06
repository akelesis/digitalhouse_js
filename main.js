




var intervalo = 2000
//slide
function slide1(){
    document.getElementById('banner').src = 'img/s1.png'
    setTimeout("slide2()",intervalo)
}
function slide2(){
    document.getElementById('banner').src = 'img/s2.png'
    setTimeout("slide3()",intervalo)
}
function slide3(){
    document.getElementById('banner').src = 'img/s3.png'
     setTimeout("slide4()",intervalo)
}
function slide4(){
    document.getElementById('banner').src = 'img/s4.png'
    setTimeout("slide1()",intervalo)
}
//slide fim

$(document).ready(function(){
    $('#dh_menu_btn').click(() =>{
        $('.menu').toggle()
    })
 })






document.getElementById('search_bar').addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        pesquisa();
    }
})
let group = books.reduce((r,a) =>{
    r[a.autor] = [...r[a.autor] || [], a]
    return r;
    },{})

for (autor in group){
    let opt = document.createElement('option')
    opt.value = autor
    opt.textContent = autor;
    document.getElementById('category').appendChild(opt)
}

function inserirLivros(books){
    books.array.forEach(livro)
      let div = document.createElement('div')
      div.className = 'card'

      let img = document.createElement('img')
      img.src =livro.image

      let divov = document.createElement('div')
      divov.className = 'overlay'

      let titulo = document.createElement('h2')
      titulo.className = livro.title

      let texto = document.createElement('p')
      texto.textContent = livro.autor
     
      let preco = document.createElement('p')
        preco.textContent = "R$ " + (livro.price.value * 4).toFixed(2);
        preco.style.fontStyle= "italic"
        divov.appendChild(titulo);
        divov.appendChild(texto);
        divov.appendChild(preco);
        div.appendChild(img);
        div.appendChild(divov);

        document.querySelector(".sectionLivros").appendChild(div);

    }


function limpaLista(){
    let livrosAtuais = document.getElementsByClassName('card');
    Array.prototype.slice.call(livrosAtuais).forEach(a => document.querySelector(".sectionLivros").removeChild(a));
}

function pesquisa(){

    limpaLista()

    //filtra preco
    const e = document.getElementById("price_range").selectedIndex;
    let pBooks = filtraPreco(e);

     //filtra autor
    if (document.getElementById('category').selectedIndex != 0) {
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

        case 0:
            result = books;
        break;

        case 1:
            result = books.filter(livro => livro.price.value * 4 < 21);//*4 Eur para Real
        break;

        case 2:
            result = books.filter(livro => livro.price.value * 4 >= 21 && livro.price.value * 4 < 41 );
        break;

        case 3:
            result = books.filter(livro => livro.price.value * 4 >= 41 && livro.price.value * 4 < 61 );
        break;

        case 4:
            result = books.filter(livro => livro.price.value * 4 >= 61);
        break;
    }

    return result
}

 function abreNav() { document.getElementById("mySidenav").style.width = "250px" };
 function fechaNav() { document.getElementById("mySidenav").style.width = "0" };




