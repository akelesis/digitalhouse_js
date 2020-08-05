//----------------------------CAROUSEL---------------------------------

const carousel = document.getElementById('carousel_item');

function slide1(){
carousel.src="./img/banner1.jpg";
setTimeout("slide2()", 3000);
}

function slide2(){
carousel.src="./img/banner2.jpg";
setTimeout("slide3()", 3000);
}

function slide3(){
carousel.src="./img/banner3.jpg";
setTimeout("slide1()", 3000);
}



//-------------------------MENU HAMBURGUER-----------------------------

function toogle(){
    let menu = document.getElementById("dh_menu");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}



//----------------------POPULAR PÁGINA COM LIVROS-----------------------

function adcLivros(){
    const showcase = document.querySelector(".showcase");
    showcase.innerHTML = "";
    livros.forEach(livro=>{
        let card = document.createElement("div");
        card.className = "card";
        let imgLivro = document.createElement("img");
        imgLivro.className = "img-card";
        let overlay = document.createElement("div");
        overlay.className="overlay";
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        imgLivro.src = livro.capa;
        h2.textContent = livro.titulo;
        p.textContent = livro.descricao;
        showcase.appendChild(card);
        card.appendChild(imgLivro);
        card.appendChild(overlay);
        overlay.appendChild(h2);
        overlay.appendChild(p);
    });
}

adcLivros();