let livro1 = document.getElementById("livro1");
let livro2 = document.getElementById("livro2");
let livro3 = document.getElementById("livro3");
let livro4 = document.getElementById("livro4");
let livro5 = document.getElementById("livro5");
let livro6 = document.getElementById("livro6");

document.addEventListener("DOMContentLoaded", transition1);
document.addEventListener("DOMContentLoaded", transition3);
document.addEventListener("DOMContentLoaded", transition5);
document.addEventListener("DOMContentLoaded", transition7);
document.addEventListener("DOMContentLoaded", transition9);
document.addEventListener("DOMContentLoaded", transition11);


//livro1.style.backgroundImage = "url('http://imagens.lelivros.love/2016/08/Baixar-Livro-O-Negociador-Frederick-Forsyth-em-PDF-ePub-e-Mobi-ou-ler-online.jpg')";

//livro2.style.backgroundImage = "url('http://imagens.lelivros.love/2019/12/Baixar-Livro-Don-Quixote-de-La-Mancha-Miguel-de-Cervantes-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')";

//livro3.style.backgroundImage = "url('http://imagens.lelivros.love/2016/07/Baixar-Livro-O-Plano-Perfeito-Sidney-Sheldon-em-PDF-ePub-e-Mobi-ou-ler-online-370x555.jpg')";

//livro4.style.backgroundImage = "url('http://imagens.lelivros.love/2020/05/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online-370x564.jpg')";

//livro5.style.backgroundImage = "url('http://imagens.lelivros.love/2018/05/Baixar-Harry-Potter-A-Colecao-Completa-J-K-Rowling-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')";

//livro6.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-A-Sociedade-do-Anel-O-Senhor-dos-An%C3%A9is-Vol-1-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x551.jpg')";

function transition1(){
    livro1.style.backgroundImage = "url('http://imagens.lelivros.love/2019/12/Baixar-Livro-Don-Quixote-de-La-Mancha-Miguel-de-Cervantes-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')";
    setTimeout("transition2()", 4000)
}
    
function transition2(){
    livro1.style.backgroundImage = "url('http://imagens.lelivros.love/2016/08/Baixar-Livro-O-Negociador-Frederick-Forsyth-em-PDF-ePub-e-Mobi-ou-ler-online.jpg')";
    setTimeout("transition1()", 4000)
}

function transition3(){
    livro2.style.backgroundImage = "url('http://imagens.lelivros.love/2016/07/Baixar-Livro-O-Plano-Perfeito-Sidney-Sheldon-em-PDF-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    setTimeout("transition4()", 4000)
}
        
function transition4(){
    livro2.style.backgroundImage = "url('http://imagens.lelivros.love/2020/05/baixar-livro-o-tatuador-de-auschwitz-heather-morris-em-pdf-epub-mobi-ou-ler-online-370x564.jpg')";
    setTimeout("transition3()", 4000)
}

function transition5(){
    livro3.style.backgroundImage = "url('http://imagens.lelivros.love/2018/05/Baixar-Harry-Potter-A-Colecao-Completa-J-K-Rowling-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    setTimeout("transition6()", 4000)
}
            
function transition6(){
    livro3.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-A-Sociedade-do-Anel-O-Senhor-dos-An%C3%A9is-Vol-1-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x551.jpg')";
    setTimeout("transition5()", 4000)
}

function transition7(){
    livro4.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-As-Duas-Torres-O-Senhor-dos-Aneis-Vol-2-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf-370x550.jpg')";
    setTimeout("transition8()", 4000)
}
    
function transition8(){
    livro4.style.backgroundImage = "url('http://imagens.lelivros.love/2020/01/Baixar-Livro-Sherlock-Holmes-Obra-Completa-Arthur-Conan-Doyle-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg')";
    setTimeout("transition7()", 4000)
}

function transition9(){
    livro5.style.backgroundImage = "url('http://imagens.lelivros.love/2013/04/Download-O-Lado-Bom-da-Vida-Matthew-Quick.jpg')";
    setTimeout("transition10()", 4000)
}
    
function transition10(){
    livro5.style.backgroundImage = "url('http://imagens.lelivros.love/2014/05/Download-O-Retorno-do-Rei-O-Senhor-dos-An%C3%A9is-Vol-3-J.R.R.-Tolkien-em-ePUB-mobi-e-pdf.jpg')";
    setTimeout("transition9()", 4000)
}

function transition11(){
    livro6.style.backgroundImage = "url('http://imagens.lelivros.love/2018/05/Baixar-Otelo-William-Shakespeare-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg')";
    setTimeout("transition12()", 4000)
}
    
function transition12(){
    livro6.style.backgroundImage = "url('http://imagens.lelivros.love/2017/11/Baixar-Guerra-e-Paz-Edicao-Completa-Liev-Tolsti-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg')";
    setTimeout("transition11()", 4000)
}