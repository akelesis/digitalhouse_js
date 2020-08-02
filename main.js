dropDownMenu();

// DropDown Menu (dh_menu)
function dropDownMenu(){
    let dhMenu = document.getElementById("dh_menu");
    let dhMenuList = document.getElementById("dh_menu_list");
    let dhMenuBtn = document.getElementsByClassName("dh_menu_btn");
    for(let element of dhMenuBtn){
        element.addEventListener("click",function(){
            if(dhMenuList.classList.contains("dh-show-fixed")){
                dhMenuList.classList.remove("dh-show-fixed");
            }else{
                dhMenuList.classList.add("dh-show-fixed");
            }
        });
    }
    document.addEventListener("click",function(){
        dhMenuList.classList.remove("dh-show-fixed");
    });
    dhMenu.addEventListener("mouseover",function(){
        dhMenuList.classList.add("dh-show");
    });
    dhMenu.addEventListener("mouseout",function(){
        dhMenuList.classList.remove("dh-show");
    });
}

