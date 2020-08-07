/* Inserção de livros por JavaScript */

let cards = document.getElementsByClassName("card")
let imgs = document.querySelectorAll("img")
let tituloSite = document.querySelectorAll(".overlay h2")
let textos = document.querySelectorAll(".overlay p")

let imgSrc =["./img/domQuixote.jpg","./img/guerraEPaz.jpg","./img/oMeninoDo.jpg","./img/orgulhoEPreconceito.jpg","./img/senhorDosAneis.jpg","./img/viagemAoCentro.jpg"]
let titulos=["Dom Quixote","Guerra e Paz","O menino do pijama listrado","Orgulho e Preconceito","O Senhor dos Aneis","Viagem ao Centro da Terra"]
let sinopse = ["É uma obra escrita pelo escritor espanhol Miguel de Cervantes e Saavedra (1547-1616). Trata-se de uma sátira às antigas novelas de cavalaria, considerada uma das maiores obras da literatura espanhola e um clássico da literatura universal. O livro, lançado em 1605, inaugurou o romance moderno e hoje conta com muitas versões traduzidas para inúmeras línguas","É um romance histórico escrito pelo autor russo Liev Tolstói e publicado entre 1865 e 1869 no Russkii Vestnik, um periódico da época. É uma das obras mais volumosas da história da literatura universal. O livro narra a história da Rússia à época de Napoleão Bonaparte. A riqueza e realismo de seus detalhes assim como suas numerosas descrições psicológicas fazem com que seja considerado um dos maiores livros da História da Literatura. Tolstói desenvolve no livro uma teoria fatalista da História, onde o livre-arbítrio não teria mais que uma importância menor e onde todos os acontecimentos só obedeceriam a um determinismo histórico irrelutável.","A obra apresenta uma amizade improvável entre dois garotos em tempos de guerra. Conectados por um fato em comum, pois ambos nasceram no mesmo dia, suas vidas são completamente distintas e separadas por um elemento, a cerca. A curiosidade, inocência e confiança são os principais elementos dessa história, que transcorre durante um dos períodos mais tristes que a humanidade já viveu.","É a obra-prima da escritora britânica Jane Austen que tem como pano de fundo a burguesia inglesa do início do século XIX. Vemos no romance como as relações movidas por amor e dinheiro podem ser promíscuas e mesquinhas, encobertas pelo véu da sociedade burguesa. O clássico inglês foi adaptado para o cinema quatro vezes, a versão mais consagrada ganhou as telas em 2005 sob a direção de Joe Wright.","É um romance de fantasia criado pelo escritor, professor e filólogo britânico J.R.R. Tolkien. A história começa como seqüência de um livro anterior de Tolkien, O Hobbit (The Hobbit), e logo se desenvolve numa história muito maior. Foi escrito entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial. Embora Tolkien tenha planejado realizá-lo em volume único, foi originalmente publicado em três volumes entre 1954 e 1955, e foi assim, em três volumes, que se tornou popular. Desde então foi reimpresso várias vezes e foi traduzido para mais de 40 línguas, tornando-se um dos trabalhos mais populares da literatura do século XX.","Precursor do gênero ficção científica no século XIX, Viagem ao Centro da Terra (no original Voyage au Centre de la Terre) é um clássico da literatura universal lançado no ano de 1864. Viagem ao Centro da Terra trata-se de uma aventura protagonizada por Otto Lidenbrock, pelo sobrinho Axel e pelo guia Hans Bjelke. Acredita-se que a história tenha sido inspirada em uma viagem que o próprio Verne teria feito para a Noruega e para outros países escandinavos."]

for (j=0;j<imgs.length;j++){
    imgs[j].src = imgSrc[j]
    imgs[j].width="300"
    imgs[j].height="400"
    tituloSite[j].textContent=titulos[j]
    tituloSite[j].style.textAlign = "center"
    textos[j].textContent = sinopse[j]
}

/* Inserção de livros por JavaScript */

/* =================== */

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

/* =================== */

/* Menu Hamburguer */



/* Menu Hamburguer */

/* =================== */

/* Ferramenta de pesquisa */

let domQuixote = {nome:"Dom Quixote", categoria: "fantasia", preco:"40"}
let guerraEPaz = {nome:"Guerra e Paz",categoria: "romance", preco:"70"}
let oMeninoDo = {nome:"O Menino do Pijama Listrado",categoria: "autoAjuda", preco: "47"}
let orgulhoEPreconceito = {nome:"Orgulho e Preconceito",categoria: "romance", preco:"25"}
let senhorDosAneis = {nome:"O Senhor dos Aneis",categoria: "fantasia", preco: "50"}
let viagemAoCentro = {nome:"Viagem ao Centro da Terra",categoria: "ficcao", preco: "15"}
let bancoDeDados = [domQuixote,guerraEPaz,oMeninoDo,orgulhoEPreconceito,senhorDosAneis,viagemAoCentro]

function ate20(valor) {
    return valor <= 20;
  }
function de21a40(valor) {
    return (valor <= 40 && valor > 20)
}
function de41a60(valor) {
    return (valor <=60 && valor > 40)
}
function acima60(valor) {
    return valor > 60
}

/* let teste =[2,5,12,533,23,54,34,21,20,61,60]
console.log(teste.filter(ate20)) 
console.log(teste.filter(de21a40))
console.log(teste.filter(de41a60))
console.log(teste.filter(acima60)) */

function buscaPreco(dados,funcao) {
    let selecao1=[]
    for (k=0; k < dados.length; k++) {
        if (funcao(dados[k].preco) == true) {
            selecao1.push(dados[k].nome)
        }
    }
    return selecao1
}

/* console.log(buscaPreco(bancoDeDados,ate20))
console.log(buscaPreco(bancoDeDados,de21a40))
console.log(buscaPreco(bancoDeDados,de41a60))
console.log(buscaPreco(bancoDeDados,acima60)) */

function buscaGenero(dados,genero) {
    let selecao2=[]
    for (i2=0; i2 < dados.length; i2++) {
        if (dados[i2].categoria == genero) {
            selecao2.push(dados[i2].nome)
        }
    }
    return selecao2   
}

/* console.log(buscaGenero(bancoDeDados,"romance"))
console.log(buscaGenero(bancoDeDados,"ficcao"))
console.log(buscaGenero(bancoDeDados,"fantasia"))
console.log(buscaGenero(bancoDeDados,"autoAjuda")) */

let infPreco = document.querySelector(".advanced_filters select#price_range")
let infCat = document.querySelector(".advanced_filters select#category")
console.log(infPreco)
console.log(infCat)

/* function busca(){
    livros=[]
    if (infPreco=="barato"){
        livros=buscaPreco(bancoDeDados,ate20)
    } else if(infPreco=="medio"{
        livros=buscaPreco(bancoDeDados,de21a40)        
    } else if (infPreco=="caro"{
        livros=buscaPreco(bancoDeDados,de41a60)        
    }
} */

/* Ferramenta de pesquisa */