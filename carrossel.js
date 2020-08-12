let livro1 = document.getElementById("livro1");
let livro2 = document.getElementById("livro2");
let livro3 = document.getElementById("livro3");
let livro4 = document.getElementById("livro4");
let livro5 = document.getElementById("livro5");
let livro6 = document.getElementById("livro6");

const listMovie = [
    {
        name: "Don Quixote de La Mancha",
        category: "Romance",
        author: "Miguel de Cervantes",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2019/12/Baixar-Livro-Don-Quixote-de-La-Mancha-Miguel-de-Cervantes-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')",
        link: "http://lelivros.love/book/baixar-livro-don-quixote-de-la-mancha-miguel-de-cervantes-em-pdf-epub-mobi-ou-ler-online/"
    },
    {
        name: "O Negociador",
        category: "Policial",
        author: "Frederick Forsyth",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2016/08/Baixar-Livro-O-Negociador-Frederick-Forsyth-em-PDF-ePub-e-Mobi-ou-ler-online.jpg')",
        link: "http://lelivros.love/book/baixar-livro-o-negociador-frederick-forsyth-em-pdf-epub-e-mobi-ou-ler-online/"
    },
    {
        name: "O Plano Perfeito",
        category: "Policial",
        author: "Sidney Sheldon",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2016/07/Baixar-Livro-O-Plano-Perfeito-Sidney-Sheldon-em-PDF-ePub-e-Mobi-ou-ler-online-370x555.jpg')",
        link: "http://lelivros.love/book/baixar-livro-o-plano-perfeito-sidney-sheldon-em-pdf-epub-e-mobi-ou-ler-online/"
    },
    {
        name: "O Tatuador de Auschwitz",
        category: "Policial",
        author: "Heather Morris",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2020/05/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online-370x564.jpg')",
        link: "http://lelivros.love/book/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online/"
    },
    {
        name: "Harry Potter - A Coleção Completa",
        category: "Fantasia",
        author: "J. K. Rowling",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2018/05/Baixar-Harry-Potter-A-Colecao-Completa-J-K-Rowling-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')",
        link: "http://lelivros.love/book/baixar-livro-harry-potter-a-colecao-completa-j-k-rowling-em-pdf-epub-mobi-ou-ler-online/"
    },
    {
        name: "A Sociedade do Anel",
        category: "Fantasia",
        author: "J. R. R. Tolkien",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2014/05/Download-A-Sociedade-do-Anel-O-Senhor-dos-An%C3%A9is-Vol-1-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x551.jpg')",
        link: "http://lelivros.love/book/download-a-sociedade-do-anel-o-senhor-dos-aneis-vol-1-j-r-r-tolkien-em-epub-mobi-e-pdf/"
    },
    {
        name: "As Duas Torres",
        category: "Fantasia",
        author: "J. R. R. Tolkien",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2014/05/Download-As-Duas-Torres-O-Senhor-dos-Aneis-Vol-2-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x550.jpg')",
        link: "http://lelivros.love/book/download-as-duas-torres-o-senhor-dos-aneis-vol-2-j-r-r-tolkien-em-epub-mobi-e-pdf/"
    },
    {
        name: "O Retorno do Rei",
        category: "Fantasia",
        author: "J. R. R. Tolkien",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2014/05/Download-O-Retorno-do-Rei-O-Senhor-dos-An%C3%A9is-Vol-3-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf.jpg')",
        link: "http://lelivros.love/book/o-retorno-do-rei-o-senhor-dos-aneis-vol-3-j-r-r-tolkien/"
    },
    {
        name: "Sherlock Holmes - Obra Completa",
        category: "Romance",
        author: "Arthur Conan Doyle",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2020/01/Baixar-Livro-Sherlock-Holmes-Obra-Completa-Arthur-Conan-Doyle-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')",
        link: "http://lelivros.love/book/baixar-livro-sherlock-holmes-obra-completa-arthur-conan-doyle-em-pdf-epub-mobi-ou-ler-online/"
    },
    {
        name: "O Lado Bom da Vida",
        category: "Romance",
        author: "Matthew Quick",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2013/04/Download-O-Lado-Bom-da-Vida-Matthew-Quick.jpg')",
        link: "http://lelivros.love/book/download-o-lado-bom-da-vida-matthew-quick-em-epub-mobi-pdf/"
    },
    {
        name: "Otelo",
        category: "Clássico",
        author: "William Shakespeare",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2018/05/Baixar-Otelo-William-Shakespeare-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg')",
        link: "http://lelivros.love/book/baixar-livro-otelo-william-shakespeare-em-pdf-epub-mobi-ou-ler-online/"
    },
    {
        name: "Guerra e Paz",
        category: "Clássico",
        author: "Liev Tolstoi",
        type: "Livro",
        img: "url('http://imagens.lelivros.love/2017/11/Baixar-Guerra-e-Paz-Edicao-Completa-Liev-Tolsti-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')",
        link: "http://lelivros.love/book/baixar-livro-guerra-e-paz-edicao-completa-liev-tolstoi-em-pdf-epub-mobi-ou-ler-online/"
    }
]

const todos = $("#todos");
const fantasia = $("#fantasia");
const policial = $("#policial");
const romance = $("#romance");
const classico = $("#classico");
const container = $("#lista");
const filtro = $("#filtro");
const fixa = $("#fixa");

document.addEventListener("DOMContentLoaded", transition1);
document.addEventListener("DOMContentLoaded", transition3);
document.addEventListener("DOMContentLoaded", transition5);
document.addEventListener("DOMContentLoaded", transition7);
document.addEventListener("DOMContentLoaded", transition9);
document.addEventListener("DOMContentLoaded", transition11);

function transition1(){
    livro1.style.backgroundImage = "url('http://imagens.lelivros.love/2019/12/Baixar-Livro-Don-Quixote-de-La-Mancha-Miguel-de-Cervantes-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')";
    livro1.addEventListener("click", function(){
        livro1.setAttribute("href", "http://lelivros.love/book/baixar-livro-don-quixote-de-la-mancha-miguel-de-cervantes-em-pdf-epub-mobi-ou-ler-online/");
    });

    setTimeout("transition2()", 4000);
}
    
function transition2(){
    livro1.style.backgroundImage = "url('http://imagens.lelivros.love/2016/08/Baixar-Livro-O-Negociador-Frederick-Forsyth-em-PDF-ePub-e-Mobi-ou-ler-online.jpg')";
    livro1.addEventListener("click", function(){
        livro1.setAttribute("href", "http://lelivros.love/book/baixar-livro-o-negociador-frederick-forsyth-em-pdf-epub-e-mobi-ou-ler-online/");
    });

    setTimeout("transition1()", 4000);
}

function transition3(){
    livro2.style.backgroundImage = "url('http://imagens.lelivros.love/2016/07/Baixar-Livro-O-Plano-Perfeito-Sidney-Sheldon-em-PDF-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    livro2.addEventListener("click", function(){
        livro2.setAttribute('href', 'http://lelivros.love/book/baixar-livro-o-plano-perfeito-sidney-sheldon-em-pdf-epub-e-mobi-ou-ler-online/');
    });

    setTimeout("transition4()", 4000);
}
        
function transition4(){
    livro2.style.backgroundImage = "url('http://imagens.lelivros.love/2020/05/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online-370x564.jpg')";
    livro2.addEventListener("click", function(){
        livro2.setAttribute('href', 'http://lelivros.love/book/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online/');
    });

    setTimeout("transition3()", 4000);
}

function transition5(){
    livro3.style.backgroundImage = "url('http://imagens.lelivros.love/2018/05/Baixar-Harry-Potter-A-Colecao-Completa-J-K-Rowling-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    livro3.addEventListener("click", function(){
        livro3.setAttribute('href', 'http://lelivros.love/book/baixar-livro-harry-potter-a-colecao-completa-j-k-rowling-em-pdf-epub-mobi-ou-ler-online/');
    });

    setTimeout("transition6()", 4000);
}
            
function transition6(){
    livro3.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-A-Sociedade-do-Anel-O-Senhor-dos-An%C3%A9is-Vol-1-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x551.jpg')";
    livro3.addEventListener("click", function(){
        livro3.setAttribute('href', 'http://lelivros.love/book/download-a-sociedade-do-anel-o-senhor-dos-aneis-vol-1-j-r-r-tolkien-em-epub-mobi-e-pdf/');
    });

    setTimeout("transition5()", 4000);
}

function transition7(){
    livro4.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-As-Duas-Torres-O-Senhor-dos-Aneis-Vol-2-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x550.jpg')";
    livro4.addEventListener("click", function(){
        livro4.setAttribute('href', 'http://lelivros.love/book/download-as-duas-torres-o-senhor-dos-aneis-vol-2-j-r-r-tolkien-em-epub-mobi-e-pdf/');
    });

    setTimeout("transition8()", 4000);
}
    
function transition8(){
    livro4.style.backgroundImage = "url('http://imagens.lelivros.love/2020/01/Baixar-Livro-Sherlock-Holmes-Obra-Completa-Arthur-Conan-Doyle-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')";
    livro4.addEventListener("click", function(){
        livro4.setAttribute('href', 'http://lelivros.love/book/baixar-livro-sherlock-holmes-obra-completa-arthur-conan-doyle-em-pdf-epub-mobi-ou-ler-online/');
    });

    setTimeout("transition7()", 4000);
}

function transition9(){
    livro5.style.backgroundImage = "url('http://imagens.lelivros.love/2013/04/Download-O-Lado-Bom-da-Vida-Matthew-Quick.jpg')";
    livro5.addEventListener("click", function(){
        livro5.setAttribute('href', 'http://lelivros.love/book/download-o-lado-bom-da-vida-matthew-quick-em-epub-mobi-pdf/');
    });

    setTimeout("transition10()", 4000);
}
    
function transition10(){
    livro5.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-O-Retorno-do-Rei-O-Senhor-dos-An%C3%A9is-Vol-3-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf.jpg')";
    livro5.addEventListener("click", function(){
        livro5.setAttribute('href', 'http://lelivros.love/book/o-retorno-do-rei-o-senhor-dos-aneis-vol-3-j-r-r-tolkien/');
    });

    setTimeout("transition9()", 4000);
}

function transition11(){
    livro6.style.backgroundImage = "url('http://imagens.lelivros.love/2018/05/Baixar-Otelo-William-Shakespeare-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg')";
    livro6.addEventListener("click", function(){
        livro6.setAttribute('href', 'http://lelivros.love/book/baixar-livro-otelo-william-shakespeare-em-pdf-epub-mobi-ou-ler-online/');
    });

    setTimeout("transition12()", 4000);
}
    
function transition12(){
    livro6.style.backgroundImage = "url('http://imagens.lelivros.love/2017/11/Baixar-Guerra-e-Paz-Edicao-Completa-Liev-Tolsti-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    livro6.addEventListener("click", function(){
        livro6.setAttribute('href', 'http://lelivros.love/book/baixar-livro-guerra-e-paz-edicao-completa-liev-tolstoi-em-pdf-epub-mobi-ou-ler-online/');
    });

    setTimeout("transition11()", 4000);
}

filtro.on("change", function() {
    var valor = filtro.val();
    if (valor == "Todas") {
        window.location.reload();
    } else {
        container.remove();
        const comFiltro = listMovie.filter(livros => {
            return livros.category === valor;
        })

        console.log(comFiltro);
        console.log(comFiltro[0]);
        console.log(comFiltro[0].name);

        var element = document.createElement("DIV");
        var a = document.createElement("A");
        document.body.appendChild(element);
        element.appendChild(a);

        element.setAttribute("class", "interface");
        a.setAttribute("class", "largura img");
        
        a.style.backgroundImage = comFiltro[0].img;
        console.log(element);
        console.log(a);
        

/*         var di = document.createElement("DIV");
        console.log(di);
        //fixa.appendChild(di);
        var a = document.createElement("A");
        for (var i=0; i<comFiltro.length; i++) {
            a.setAttribute("class", "largura img");
            a.setAttribute("id", ""+i+"");
            a.style.backgroundImage = "comFiltro[i].img";
            di.appendChild(a);
            console.log(a);
            //fixa.appendChild(di);
        }
        //fixa.appendChild(di);
 */    }    
  })
//<a class="largura img" target="_blank"></a>