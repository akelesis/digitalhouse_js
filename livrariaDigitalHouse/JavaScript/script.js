/*menu lateral*/
var atual = 1;
var botao = document.getElementById("botaomenu").addEventListener("click", function(){
var menu = document.getElementById("options");
if (atual == 1){
    menu.style.right = "0px";
    atual = 0;
    } else{
        menu.style.right = "-100%";
        atual = 1;
    }   
})

