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


/* só consegui fazer o carrossel, não tive tempo de iniciar os outros exercicios :/ */