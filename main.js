const dhCarrousel = document.getElementById("dh_carousel");
const crNext = document.getElementById("cr_next");
const crPrevious = document.getElementById("cr_previous");
const dhMenuBtn = document.getElementById("dh_menu_btn");
const dhMenuNavegacao = document.querySelector(".menu");

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

function addBooks(){

    

}

let books = {
    book0: {
        title: "Livro 1",
        subtitle: "Descrição do Livro 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l0.png"
    },
    book1: {
        title: "Livro 2",
        subtitle: "Descrição do Livro 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l1.png"
    },
    book2: {
        title: "Livro 3",
        subtitle: "Descrição do Livro 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l2.png"
    },
    book3: {
        title: "Livro 4",
        subtitle: "Descrição do Livro 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l3.png"
    },
    book4: {
        title: "Livro 5",
        subtitle: "Descrição do Livro 5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l4.png"
    },
    book5: {
        title: "Livro 6",
        subtitle: "Descrição do Livro 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste corrupti error perspiciatis repellat!",
        src: "./img/l5.png"
    }
}

const cards = document.getElementsByClassName("card");

    for(let i=0; i < cards.length; i++){
        let imgCards = cards[i].children[0];
        let divCards = cards[i].children[1];
        let titleBook = divCards.getElementsByTagName("h2")
        let subtitleBook = divCards.getElementsByTagName("p")

        let imgCardsSrc = books["book"+[i]].src;

        imgCards.setAttribute("src", imgCardsSrc);
        titleBook[0].textContent = books["book"+[i]].title;
        subtitleBook[0].textContent = books["book"+[i]].subtitle;

    }

