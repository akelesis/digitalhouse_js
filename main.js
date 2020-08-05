let body = document.querySelector("body");
let btn_side_bar = document.getElementById("dh_menu_btn");
const btn_book_add_menu = document.getElementById("book_add_menu_button");
const book_add_menu = document.querySelector(".book_add");
const btn_book_add = document.getElementById("book_confirm_add");
const btn_book_cancel = document.getElementById("book_confirm_cancel");
const book_add_inputs = document.querySelectorAll(".book_input");
const book_title_add = document.getElementById("book_title_add");
const book_img_add = document.getElementById("book_img_add");
const book_description_add = document.getElementById("book_description_add");
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


let book_titles = document.querySelectorAll(".book_title");

function CheckCopies(book){
    for(let i=0; i < book_titles.length; i++){
        console.log(book_titles[i].innerText);
        console.log(book.title)
        if(book.title == book_titles[i].innerText){
            return true;
        }
    }
    return false;
}

function LoadBooks(){
    books_list.forEach(book => {
        if(!CheckCopies(book)){
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
        }
    });
}

LoadBooks();
console.log(book_titles[0]);


let card = document.querySelectorAll(".card");
let overlay = document.querySelectorAll(".overlay");
book_titles = document.querySelectorAll(".book_title");

function carouselRoll(){
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

function RefreshCards(){
    card = document.querySelectorAll(".card");
    overlay = document.querySelectorAll(".overlay");
    book_titles = document.querySelectorAll(".book_title");
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
        book_add_menu.style.height = "0%";
    }
    else{
        side_bar.style.height = "0%";
    }
})
btn_book_add_menu.addEventListener("click",function(){
        book_add_menu.style.height = "300px";
        side_bar.style.height = "0%";
})
btn_book_cancel.addEventListener("click",function(){
    book_add_menu.style.height = "0%";
    EmptyInputs()
})

function IsNotEmpty(){
    for(let i=0; i < book_add_inputs.length; i++){
        if(book_add_inputs[i].value.length == 0){
            return false
        }
    }
    return true
}

function EmptyInputs(){
    for(let i=0; i < book_add_inputs.length; i++){
        book_add_inputs[i].value = "";
    }
}

btn_book_add.addEventListener("click",function(){
    if(!IsNotEmpty()){
        alert("Preencha todos os campos!")
    }
    else{
        const book = {
            title: book_title_add.value,
            image: book_img_add.value,
            description: book_description_add.value,
            category: [
                "Auto Ajuda"
            ],
            price: 25
        }
        books_list.push(book);
        LoadBooks();
        RefreshCards();
        book_add_menu.style.height = "0%";
        alert("Livro adicionado!")
        EmptyInputs()
    }
})

