/* Inserção de livros por JavaScript */

let cards = document.getElementsByClassName("card")
let imgs = document.querySelectorAll("img")
let tituloSite =document.querySelectorAll("h2")

let imgSrc =["./img/domQuixote.jpg","./img/guerraEPaz.jpg","./img/oMeninoDo.jpg","./img/orgulhoEPreconceito.jpg","./img/senhorDosAneis.jpg","./img/viagemAoCentro.jpg"]
let titulos=["Dom Quixote","Guerra e Paz","O menino do pijama listrado","Orgulho e Preconceito","O Senhor dos Aneis","Viagem ao Centro da Terra"]
for (j=0;j<imgs.length;j++){
    imgs[j].src = imgSrc[j]
    imgs[j].width="300"
    imgs[j].height="400"
    tituloSite[j+1].textContent=titulos[j]
    tituloSite[j+1].style.display = "relative"
    tituloSite[j+1].style.alignSelf = "center"

    console.log(tituloSite[j+1].style)
}

/*  = "./img/domQuixote.jpg"
 */
/* Inserção de livros por JavaScript */


/* Carrossel */

let carousel = document.getElementById("dh_carousel")
carousel.removeChild(document.querySelector(".carrousel_label"))

carousel.appendChild(btnBack = document.createElement("button"))
btnBack.appendChild(document.createTextNode("Back"))

let img = document.createElement("img")
let vetor =["./img/imgCinza.png","./img/imgVerde.png","./img/imgLaranja.png","./img/imgVermelha.png"]
let i=0
img.src = vetor[i]
img.style.height = "60vh"
carousel.appendChild(img)
carousel.appendChild(btnNext = document.createElement("button"))
btnNext.appendChild(document.createTextNode("Next"))

btnBack.addEventListener("click",function(){
    if (i==0){
        i=vetor.length-1
        img.src = vetor[i]
        return
    }
    else{
        i--
        img.src = vetor[i]
        return
    }
})

btnNext.addEventListener("click",function(){
    if (i==vetor.length-1){
        i=0
        img.src = vetor[i]
        return
    }
    else{
        i++
        img.src = vetor[i]
        return
    }
})

/* Carrossel */

