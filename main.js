/* ----- Menu Lateral -----*/
var nav = document.getElementById("nav");
var btn = document.getElementById("dh_menu_btn");

function menu (){
    let show = nav.classList.contains("show");

        if(show == false){
            nav.classList.add("show");
        }else{
            nav.classList.remove("show");
        }
}

btn.addEventListener("click", menu) 
