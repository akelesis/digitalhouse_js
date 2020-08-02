let card = document.querySelectorAll(".card");
let overlay = document.querySelectorAll(".overlay");
let body = document.querySelector("body");
let btn_side_bar = document.getElementById("dh_menu_btn");
let side_bar = document.querySelector(".navigation");
let search_button = document.getElementById("search_button");
let search_bar = document.getElementById("search_bar");
let book_titles = document.querySelectorAll(".book_title");

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
    if(side_bar.style.height != "260px"){
        side_bar.style.height = "260px";
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