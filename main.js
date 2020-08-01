let card = document.querySelectorAll(".card");
let overlay = document.querySelectorAll(".overlay");
for(let i=0; i < card.length; i++){
    card[i].addEventListener("mouseover", function(){
        overlay[i].style.color = "#EEE0CB";
        overlay[i].style.backgroundColor = "#f71735be";
        overlay[i].style.fontSize = "1em"
    })
    card[i].addEventListener("mouseout", function(){
        overlay[i].style.color = "transparent";
        overlay[i].style.backgroundColor = "transparent";
        overlay[i].style.fontSize = "0.98em"
    })
}