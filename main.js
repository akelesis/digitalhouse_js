dropDownMenu();
carousel();


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

// Carousel
function carousel(){
    const items = document.querySelectorAll("#dh_carousel img");
    let dots;
    let timerCarousel;
    let itemIndex = 0; //start item 0
    
    loadDotsCarousel();
    startAutoRotateCarousel();

    function showItem(index){
        if (index >= items.length) {index = 0}
        if (index < 0) {index = items.length-1}
        for (let i of items) {i.classList.remove("show");}
        for (let i of dots) {i.classList.remove("active");}
        items[index].classList.add("show");
        dots[index].classList.add("active");
    }
    function manualShowItemCarousel(index){
        clearAutoRotateCarousel();
        itemIndex = index;
        startAutoRotateCarousel();
    }
    function startAutoRotateCarousel(){
        clearAutoRotateCarousel();
        showItem(itemIndex);
        timerCarousel = setInterval(function(){
            itemIndex += 1;
            if (itemIndex >= items.length) {
                itemIndex = 0
            }
            showItem(itemIndex);
        },3000);
    }
    function clearAutoRotateCarousel(){
        clearInterval(timerCarousel);
    }      
    function loadDotsCarousel(){
        let dotContainer = document.querySelector("#dh_carousel .dh_dot_container");
        dotContainer.innerHTML = ` `;
        for(let i=0; i<items.length; i++){
            let newDot = document.createElement("span");
            newDot.setAttribute("class","dot");
            dotContainer.append(newDot);
        }
        dots = document.querySelectorAll("#dh_carousel .dh_dot_container .dot");
        for(let index = 0; index < dots.length; index++){
            dots[index].addEventListener("click",function(){manualShowItemCarousel(index);});
        }
    }
}