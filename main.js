let body = document.querySelector("body");
let btn_side_bar = document.getElementById("dh_menu_btn");
let side_bar = document.querySelector(".navigation");
let search_button = document.getElementById("search_button");
let search_bar = document.getElementById("search_bar");
let items = document.querySelector(".items");
const showcase = document.querySelector(".showcase");



const books_list = [
    {
        title: "O Poder do Hábito",
        image: "./img/OPoderdoHabito1-300x400.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Auto Ajuda"
        ],
        price: 25
    },
    {
        title: "Harry Potter e o Prisioneiro de Askaban",
        image: "./img/Harry-Potter.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Fantasia"
        ],
        price: 50
    },
    {
        title: "O Hobbit",
        image: "./img/O-Hobbit.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Fantasia"
        ],
        price: 75
    },
    {
        title: "Percy Jackson e os Olimpianos",
        image: "./img/Percy-Jackson.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Fantasia"
        ],
        price: 15
    },
    {
        title: "O Morro dos Ventos Uivantes",
        image: "./img/O-morro-dos-ventos-uivantes.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Ficção Científica"
        ],
        price: 30
    },
    {
        title: "Don Quixote",
        image: "./img/Don-Quixote.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: [
            "Fantasia"
        ],
        price: 42
    }
]

books_list.forEach(book => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    const link = document.createElement("a");
    link.setAttribute("href","#");

    const img = document.createElement("img");
    img.setAttribute("src", book.image);
    
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    
    const title = document.createElement("h2");
    title.setAttribute("class", "book_title");
    title.textContent = book.title;
    
    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = book.description;
    
    overlay.appendChild(title);
    overlay.appendChild(description);
    link.appendChild(img);
    link.appendChild(overlay);
    card.appendChild(link);
    showcase.appendChild(card);
});

let card = document.querySelectorAll(".card");
let overlay = document.querySelectorAll(".overlay");
let book_titles = document.querySelectorAll(".book_title");

items.addEventListener("wheel", function(event){
    if(event.deltaY > 0){
        items.scrollBy(1920, 0);
    }
    else{
        items.scrollBy(-1920, 0);
    }
})

function carouselRoll(){
    console.log(items.scrollLeft);
    if(items.scrollLeft > 3000){
        items.scrollBy(-3840,0);
    }
    else{
        items.scrollBy(1920,0)
    }
}

setInterval(carouselRoll, 3000);

function HaveInTitle(title, search){
    if(title.indexOf(search) == -1){
        return false;
    }
    return true;
}

function SearchInTitlesAndHide(search){ // Verifica em todos os títulos de livros se tem a palavra, se não tiver, esconde
    for(let i=0; i < card.length; i++){
        if(!HaveInTitle(book_titles[i].innerText.toLowerCase(),search.toLowerCase())){
            card[i].style.display = "none";
        }
        else{
            card[i].style.display = "flex";
        }
    }
}


search_button.addEventListener("click",function(){
    SearchInTitlesAndHide(search_bar.value);
})
search_bar.addEventListener("keyup", function(event){
    SearchInTitlesAndHide(search_bar.value);
})

btn_side_bar.addEventListener("click",function(){
    if(side_bar.style.height != "300px"){
        side_bar.style.height = "300px";
    }
    else{
        side_bar.style.height = "0%";
    }
})
for(let i=0; i < card.length; i++){
    card[i].addEventListener("mouseover", function(){
        overlay[i].style.color = "#EEE0CB";
        overlay[i].style.backgroundColor = "#f71735e8";
        overlay[i].style.top = "0";
    })
    card[i].addEventListener("mouseout", function(){
        overlay[i].style.color = "transparent";
        overlay[i].style.backgroundColor = "transparent";
        overlay[i].style.top = "20px";
    })
}