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

function adcLivros(livros){
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

adcLivros(livros);

//------------------------FILTROS DE PESQUISA------------------------



function filtroTitulo(){
    const tituloLivro = document.getElementById("search_bar").value;   
    const categoriaLivro = document.getElementById("category");
    const precoLivro = document.getElementById("price_range");

    const listaFiltro = livros.filter(livro=>{
       return (livro.titulo.toUpperCase()).includes(tituloLivro.toUpperCase());
    });
    adcLivros(listaFiltro);
    categoriaLivro.value = "";
    precoLivro.value = "";
}

function filtroCategoria(){
    const tituloLivro = document.getElementById("search_bar");   
    const categoriaLivro = document.getElementById("category").value;
    const precoLivro = document.getElementById("price_range");

    console.log(categoriaLivro);
    const listaFiltro = livros.filter(livro=>{
        return (livro.categoria === categoriaLivro)
    });
    adcLivros(listaFiltro);
    tituloLivro.value = "";
    precoLivro.value = "";
}

function filtroPreco(){
    const tituloLivro = document.getElementById("search_bar");   
    const categoriaLivro = document.getElementById("category");
    const precoLivro = document.getElementById("price_range").value;

    const listaFiltro = livros.filter(livro=>{
        switch(precoLivro){
            case "barato":
                return livro.preco >= 1 && livro.preco <=20;
                break;
            case "medio":
                return livro.preco >= 21 && livro.preco <=40;
                break;
            case "caro":
                return livro.preco >= 41 && livro.preco <=60;
                break;
            case "mais caro":
                return livro.preco >= 61;
                break;
        }
    })
    adcLivros(listaFiltro);
    tituloLivro.value = "";
    categoriaLivro.value = "";
}