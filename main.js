var intervalo = 1000;

function slide1(){
    document.getElementById("banner").src="img/livro1.jpg";
    setTimeout("slide2()",intervalo);
}
function slide2(){
    document.getElementById("banner").src="img/livro2.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src="img/livro3.jpg";
    setTimeout("slide1()",intervalo);
}
