dropDownMenu();
carousel();
books();


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

function books(){
    var books = [
        {bookId:1, title:"Como Dormir Melhor", description:"Não é exagero afirmar que o sono é tão vital para nossa qualidade de vida quanto comer, beber, exercitar-se. Dormir bem contribui para um melhor funcionamento do corpo e da mente, tornando-nos mais ativos.", link:"#", imgSrc:"./img/001.jpeg", categoryId:1, price:19.90},
        {bookId:2, title:"KIT Gay", description:"guia completo para lhe ensinar e estimular o homossexualismo e a promiscuidade.", link:"#", imgSrc:"./img/002.jpg", categoryId:1, price:35.49},
        {bookId:3, title:"Ódio: Como posso superar isso?", description:"Computador travou? rodou compilação 832699 vezes e não funciona? Mudança de requisitos no dia da Publicação? Encomenda presa em Curitiba? NÃO SE PREOCUPE MAIS! Este livro vai lhe ensinar como controlar seu ódio nos momentos mais delicados.", link:"#", imgSrc:"./img/003.jpg", categoryId:1, price:35.49},
        
        {bookId:4, title:"Mimimi for mimimi users", description:"Comunicação obejetiva, clara e coerente. Saiba os melhores jargões técnicos para se expressar com seu cliente.", link:"#", imgSrc:"./img/004.jpg", categoryId:2, price:105.00},
        {bookId:5, title:"Exiting VIM", description:"Muito mais do que pressionar 'q'+'!'. Aprenda esta filosofia de vida!", link:"#", imgSrc:"./img/005.jpeg", categoryId:2, price:5.99},
        {bookId:6, title:"Useless Git Commit Messages", description:"Divitar-se! Aprenda a expressar seus sentimento ao fazer 'git commit'.", link:"#", imgSrc:"./img/006.jpeg", categoryId:2, price:52.00},
        
        {bookId:7, title:"Deadline Drive Development", description:"Temos nosso próprio tempo...", link:"#", imgSrc:"./img/007.jpg", categoryId:3, price:74.10},
        {bookId:8, title:"Accepting the Risk", description:"Não se atenha a burocrácias. Acredite na sua capacidade! Se o projeto já foi aprovado não há necessidade de se preocupar com essa feature simples. IMPLEMENTE JÁ! 'git push master -f' ", link:"#", imgSrc:"./img/008.jpg", categoryId:3, price:32.00},
        {bookId:9, title:"Rumo ao GoHorse", description:"A Bliblía do Progamador!", link:"#", imgSrc:"./img/009.png", categoryId:3, price:32.00},
        {bookId:10, title:"Works on my machine", description:"Se os usuários não limparam o Cache ou não atualizaram o sistema a culpa não é sua!", link:"#", imgSrc:"./img/010.jpg", categoryId:3, price:99.30},
        {bookId:11, title:"Gambi Design Patterns", description:"Desenvolvimento rápido, com qualidade, 100% orientado ao paradigma GAMBI. Leitura obrigatória para todo desenvolvedor que se preze.", link:"#", imgSrc:"./img/011.png", categoryId:3, price:99.30},
        
        {bookId:12, title:"Variable Naming", description:"'x', 'i', 'coffe_Requentado', 'rWFZX', 'f1', 'varForUsoDoDataBaseDuranteConnection'.", link:"#", imgSrc:"./img/012.png", categoryId:4, price:66.80},
        {bookId:13, title:"Develping in Production", description:"Credenciais de procdução: se você tem, é porque você pode! Acredite no seu potêncial.", link:"#", imgSrc:"./img/013.jpg", categoryId:4, price:20.00},
        {bookId:14, title:"Regex by Trial and Error", description:"", link:"#", imgSrc:"./img/014.jpeg", categoryId:4, price:9.99},
        {bookId:15, title:"Web Development With Assembly", description:"Sempre atual", link:"#", imgSrc:"./img/015.png", categoryId:4, price:29.99}
    ];



    let showCase = document.querySelector(".dh_showcase");
    showCase.innerHTML = ` `;
        for(let i of books){
            let card = document.createElement("div");
            card.setAttribute("class","dh_card");
            card.setAttribute("bookId",i.bookId);
            let img = document.createElement("img");
            img.setAttribute("src",i.imgSrc);
            img.setAttribute("bookId",i.bookId);
            card.append(img);
            let overlay = document.createElement("div");
            overlay.setAttribute("class","dh_overlay");
            overlay.setAttribute("bookId",i.bookId);
            let overlayTitle = document.createElement("h2");
            overlayTitle.innerText = i.title;
            let overlayText = document.createElement("p");
            overlayText.innerText = i.description;

            overlay.append(overlayTitle);
            overlay.append(overlayText);

            card.append(overlay);
            
            showCase.append(card);
        }
        
        let cards = document.querySelectorAll(".dh_showcase .dh_card");
        for(let i of cards){
            i.addEventListener("mouseover",function(event){
                let id = event.target.getAttribute("bookId");
                let overlay = document.querySelector(`.dh_showcase .dh_overlay[bookId="${id}"]`);
                console.log(overlay.classList);
                overlay.classList.add("dh_show");
                overlay.addEventListener("mouseout", function(){
                    overlay.classList.remove("dh_show");
                });
            });
        }
        
        //dhMenu.addEventListener("mouseout",function(){
            //dhMenuList.classList.remove("dh-show");
        //});

    /*<div class="dh_card">
                <img src="./img/300x400.png">
                <div class="dh_overlay">
                    <h2>Texto Exemplo</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.
                        Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste
                        corrupti error perspiciatis repellat!</p>
                </div>
            </div>
    */
}