//Clique Menu
const menuArea = document.getElementById("dh_menu_btn");
menuArea.addEventListener("click", showHideMenu, false);

//Função mostrar/esconder menu
function showHideMenu(){
    let menuOpened = document.getElementById("menu");
    if(menuOpened.style.display == 'block'){
        menuOpened.style.display = 'none';
    }else{
        menuOpened.style.display = 'block';
    }
}

