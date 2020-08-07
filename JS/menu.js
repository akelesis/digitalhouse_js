var ver = 1;
var btn_menu = document.getElementById('dh_menu_btn').addEventListener("click",function(){
var menu = document.getElementById('menu-hidde');
    if (ver == 1) {
        menu.style.left = "0px";
        ver = 0;
    }else{
        menu.style.left = "-100%";
        ver = 1;
    }
});