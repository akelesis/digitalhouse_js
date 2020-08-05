const body = document.querySelector("body");
const btn_side_bar = document.getElementById("dh_menu_btn");
const btn_book_add_menu = document.getElementById("book_add_menu_button");
const book_add_menu = document.querySelector(".book_add");
const btn_book_add = document.getElementById("book_confirm_add");
const btn_book_cancel = document.getElementById("book_confirm_cancel");
const book_add_inputs = document.querySelectorAll(".book_input");
const book_title_add = document.getElementById("book_title_add");
const book_img_add = document.getElementById("book_img_add");
const book_description_add = document.getElementById("book_description_add");
const side_bar = document.querySelector(".navigation");
const search_button = document.getElementById("search_button");
const search_bar = document.getElementById("search_bar");
const items = document.querySelector(".items");
const showcase = document.querySelector(".showcase");
const input_content = document.querySelectorAll(".input_content");
const input_label = document.querySelectorAll(".input_label");
const category = document.getElementById("category");
const price_range = document.getElementById("price_range");
const category_options = category.querySelectorAll("option");
const price_options = price_range.querySelectorAll("option");

const books_list = [
    {
        title: "O Poder do Hábito",
        image: "./img/OPoderdoHabito1-300x400.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Auto Ajuda",
        price: 25.00
    },
    {
        title: "Harry Potter e o Prisioneiro de Askaban",
        image: "./img/Harry-Potter.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Fantasia",
        price: 50.00
    },
    {
        title: "O Hobbit",
        image: "./img/O-Hobbit.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Fantasia",
        price: 75.00
    },
    {
        title: "Percy Jackson e os Olimpianos",
        image: "./img/Percy-Jackson.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Fantasia",
        price: 15.00
    },
    {
        title: "O Morro dos Ventos Uivantes",
        image: "./img/O-morro-dos-ventos-uivantes.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Ficção Científica",
        price: 30.00
    },
    {
        title: "Don Quixote",
        image: "./img/Don-Quixote.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque istecorrupti error perspiciatis repellat!",
        category: "Fantasia",
        price: 42.00
    }
]


let book_titles = document.querySelectorAll(".book_title");

function CheckCopies(book){
    for(let i=0; i < book_titles.length; i++){
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

            const price = document.createElement("h3");
            price.setAttribute("class", "price");
            if(book.price%1 == 0){
                price.textContent = "R$" + book.price + ".00";
            }
            else{
                price.textContent = "R$" + book.price;
            }
            
            const description = document.createElement("p");
            description.setAttribute("class", "description");
            description.textContent = book.description;
            
            overlay.appendChild(title);
            overlay.appendChild(price);
            overlay.appendChild(description);
            link.appendChild(img);
            link.appendChild(overlay);
            card.appendChild(link);
            showcase.appendChild(card);
        }
    });
}

LoadBooks();


let card = document.querySelectorAll(".card");
let overlay = document.querySelectorAll(".overlay");
book_titles = document.querySelectorAll(".book_title");

function carouselRoll(){
    if(items.scrollLeft == window.innerWidth*2){
        items.scrollBy(-2*window.innerWidth,0);
    }
    else{
        items.scrollBy(window.innerWidth,0)
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
            overlay[i].style.textShadow = "2px 2px black";
            overlay[i].style.color = "#EEE0CB";
            overlay[i].style.backgroundColor = "#f71735e8";
            overlay[i].style.top = "0";
        })
        card[i].addEventListener("mouseout", function(){
            overlay[i].style.textShadow = "none";
            overlay[i].style.color = "transparent";
            overlay[i].style.backgroundColor = "transparent";
            overlay[i].style.top = "20px";
        })
    }
}

search_button.addEventListener("click",function(){
    SearchInTitlesAndHide(search_bar.value);
})
search_bar.addEventListener("input", function(event){
    SearchInTitlesAndHide(search_bar.value);
})
category.addEventListener("change", function(){
    for(let i=0; i < card.length; i++){
        if(category_options[category.selectedIndex].value == books_list[i].category || category_options[category.selectedIndex].value.length == 0){
            card[i].style.display = "flex";
        }
        else{
            card[i].style.display = "none";
        }
    }
})

function PrecoEntre(i){
    if(price_options[price_range.selectedIndex].value == "mais caro"){
        return books_list[i].price > parseInt(price_options[price_range.selectedIndex].innerText.slice(-2));
    }
    return (books_list[i].price < parseInt(price_options[price_range.selectedIndex].innerText.slice(-2)) &&
    (books_list[i].price > parseInt(price_options[price_range.selectedIndex].innerText.slice(2,4))))
}
price_range.addEventListener("change", function(){
    for(let i=0; i < card.length; i++){
        if( PrecoEntre(i) ||
         price_options[price_range.selectedIndex].value.length == 0){
            card[i].style.display = "flex";
        }
        else{
            card[i].style.display = "none";
        }
    }
})

btn_side_bar.addEventListener("click",function(){
    if(side_bar.style.height != "300px"){
        side_bar.style.height = "300px";
        book_add_menu.style.height = "0%";
        book_add_menu.style.border = "none";
    }
    else{
        side_bar.style.height = "0%";
    }
})
btn_book_add_menu.addEventListener("click",function(){
        book_add_menu.style.height = "300px";
        book_add_menu.style.border = "2px solid black";
        side_bar.style.height = "0%";
})
btn_book_cancel.addEventListener("click",function(){
    book_add_menu.style.height = "0%";
    book_add_menu.style.border = "none";
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
        input_content[i].style.bottom = "0px";
        input_content[i].style.color = "black";
        input_label[i].style.borderBottom = "1px solid black"
    }
}

for(let i=0; i < book_add_inputs.length; i++){

    book_add_inputs[i].addEventListener("focus",function(){
        input_content[i].style.bottom = "22%";
        input_content[i].style.color = "#EEE0CB"
        input_label[i].style.borderBottom = "3px solid #EEE0CB"
    })
    book_add_inputs[i].addEventListener("focusout",function(){
        if(book_add_inputs[i].value.length == 0){
            input_content[i].style.bottom = "0px";
            input_content[i].style.color = "black";
            input_label[i].style.borderBottom = "1px solid black"
        }
    })
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


RefreshCards()
