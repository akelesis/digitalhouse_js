//Clique Menu
const menuArea = document.getElementById("dh_menu_btn");
//menuArea.addEventListener("click", showHideMenu);
document.addEventListener("click", showHideMenu);
const menuOpened = document.getElementById("menu");

//Função mostrar/esconder menu
function showHideMenu(event){
    if(event.target.id != 'dh_menu_btn' && event.target.id != 'menu_bars')
        menuOpened.style.display = 'none';
    else{
        if(menuOpened.style.display == 'block')
            menuOpened.style.display = 'none';
        else
            menuOpened.style.display = 'block';
    }        
}