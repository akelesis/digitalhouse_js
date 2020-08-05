const dhCarrousel = document.getElementById("dh_carousel");
const crNext = document.getElementById("cr_next");
const crPrevious = document.getElementById("cr_previous");
const dhMenuBtn = document.getElementById("dh_menu_btn");
const dhMenuNavegacao = document.querySelector(".menu");
const showcase = document.getElementsByClassName("showcase");


var menuNavegacao = false;
dhMenuBtn.onclick = menuSidebar;


crPrevious.onclick = carrouselPrevious;
crNext.onclick = carrouselNext;


function carrouselPrevious(){
    dhCarrousel.style.backgroundImage = "url(./img/c1.jpg)";
}

function carrouselNext(){
    dhCarrousel.style.backgroundImage = "url(./img/c2.jpg)";
}

function menuSidebar(){
    if(menuNavegacao == false){
        dhMenuNavegacao.style.visibility = "visible";
        menuNavegacao = true;
    }else{
        dhMenuNavegacao.style.visibility = "hidden";
        menuNavegacao = false
    }

}



const books = [
    {
        title: "Livro 1",
        subtitle: "Descrição do Livro 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l0.png",
        price: 18.50, // if (books.price >= 0 && books.price < 20) {faz alguma coisa}
        priceRange: "barato" // if (books.priceRange === "barato") {faz outra coisa}
    },
    {
        title: "Livro 2",
        subtitle: "Descrição do Livro 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l1.png"
    },
    {
        title: "Livro 3",
        subtitle: "Descrição do Livro 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l2.png"
    },
    {
        title: "Livro 4",
        subtitle: "Descrição do Livro 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l3.png"
    },
    {
        title: "Livro 5",
        subtitle: "Descrição do Livro 5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l4.png"
    },
    {
        title: "Livro 6",
        subtitle: "Descrição do Livro 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l5.png"
    }
]

function addBooks(books){
    // Capturando a classe que receberá os livros

    // Limpa os livros 
    showcase[0].innerHTML = ""
    
    books.forEach(book => {
        //Criando a div do livro (pai) e colocando a classe card
        let divCard = document.createElement("div");
        divCard.setAttribute("class","card")

        // Criando a img que irá receber a capa do livro e inserindo o link do arquivo
        let imgCard = document.createElement("img");
        imgCard.setAttribute("src", book.src)

        // Criando a div que reunirá o título e a descrição do livro
        let divInfoCard = document.createElement("div");
        divInfoCard.setAttribute("class", "overlay");

        // Criando o título e a descrição do livro
        let titleCard = document.createElement("h2");
        titleCard.textContent = book.title;
        let subtitleCard = document.createElement("p");
        subtitleCard.textContent = book.subtitle;

        showcase[0].appendChild(divCard);
        divCard.appendChild(imgCard);
        divCard.appendChild(divInfoCard);
        divInfoCard.appendChild(titleCard);
        divInfoCard.appendChild(subtitleCard);

    })
}

function filterBooks(){
const search_bar = document.getElementById("search_bar")

const listaFiltrada = books.filter(book =>{
    return book.title === search_bar.value;
})

console.log(search_bar.length)

if(search_bar.value === ""){
    addBooks(books)
}else{
    if(!listaFiltrada.length){
        showcase[0].innerHTML = ""
        const textNotFound = document.createElement("p");
        textNotFound.textContent = "Nenhum resultado encontrado."
        showcase[0].appendChild(textNotFound);

    }else{
    addBooks(listaFiltrada); 
    }
}



}

window.onload = addBooks(books);
