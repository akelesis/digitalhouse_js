/* Declaração dos livros */

const dados = [{
    nome:"Dom Quixote",
    categoria: "Fantasia",
    preco:40,
    valor: "medio",
    sinopse: "É uma obra escrita pelo escritor espanhol Miguel de Cervantes e Saavedra (1547-1616). Trata-se de uma sátira às antigas novelas de cavalaria, considerada uma das maiores obras da literatura espanhola e um clássico da literatura universal. O livro, lançado em 1605, inaugurou o romance moderno e hoje conta com muitas versões traduzidas para inúmeras línguas",
    src: "./img/domQuixote.jpg"
}, {
    nome:"Guerra e Paz",
    categoria: "Romance",
    preco:70,
    valor: "mais caro",
    sinopse: "É um romance histórico escrito pelo autor russo Liev Tolstói e publicado entre 1865 e 1869 no Russkii Vestnik, um periódico da época. É uma das obras mais volumosas da história da literatura universal. O livro narra a história da Rússia à época de Napoleão Bonaparte. A riqueza e realismo de seus detalhes assim como suas numerosas descrições psicológicas fazem com que seja considerado um dos maiores livros da História da Literatura.",
    src: "./img/guerraEPaz.jpg"
}, {
    nome:"O Menino do Pijama Listrado",
    categoria: "Auto Ajuda",
    preco: 47,
    valor: "caro",
    sinopse: "A obra apresenta uma amizade improvável entre dois garotos em tempos de guerra. Conectados por um fato em comum, pois ambos nasceram no mesmo dia, suas vidas são completamente distintas e separadas por um elemento, a cerca. A curiosidade, inocência e confiança são os principais elementos dessa história, que transcorre durante um dos períodos mais tristes que a humanidade já viveu.",
    src: "./img/oMeninoDo.jpg"
}, {
    nome:"Orgulho e Preconceito",
    categoria: "Romance",
    preco:25,
    valor: "medio",
    sinopse: "É a obra-prima da escritora britânica Jane Austen que tem como pano de fundo a burguesia inglesa do início do século XIX. Vemos no romance como as relações movidas por amor e dinheiro podem ser promíscuas e mesquinhas, encobertas pelo véu da sociedade burguesa. O clássico inglês foi adaptado para o cinema quatro vezes, a versão mais consagrada ganhou as telas em 2005 sob a direção de Joe Wright.",
    src: "./img/orgulhoEPreconceito.jpg"
}, {
    nome:"O Senhor dos Aneis",
    categoria: "Fantasia",
    preco: 50,
    valor: "caro",
    sinopse: "É um romance de fantasia criado pelo escritor, professor e filólogo britânico J.R.R. Tolkien. A história começa como seqüência de um livro anterior de Tolkien, O Hobbit (The Hobbit), e logo se desenvolve numa história muito maior. Foi escrito entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial. Embora Tolkien tenha planejado realizá-lo em volume único, foi originalmente publicado em três volumes entre 1954 e 1955, e foi assim, em três volumes, que se tornou popular.",
    src: "./img/senhorDosAneis.jpg"
}, {
    nome:"Viagem ao Centro da Terra",
    categoria: "Ficção Científica",
    preco: 15,
    valor: "barato",
    sinopse: "Precursor do gênero ficção científica no século XIX, Viagem ao Centro da Terra (no original Voyage au Centre de la Terre) é um clássico da literatura universal lançado no ano de 1864. Viagem ao Centro da Terra trata-se de uma aventura protagonizada por Otto Lidenbrock, pelo sobrinho Axel e pelo guia Hans Bjelke. Acredita-se que a história tenha sido inspirada em uma viagem que o próprio Verne teria feito para a Noruega e para outros países escandinavos.",
    src: "./img/viagemAoCentro.jpg"
}]

/* Declaração dos livros */

/* =================== */

/* Inserção de livros por JavaScript */

let cards = document.querySelectorAll(".card")
let imgs = document.querySelectorAll("img")
let tituloSite = document.querySelectorAll(".overlay h2")
let textos = document.querySelectorAll(".overlay p")
let over = document.querySelectorAll(".overlay")

function insere(data=dados){
    if (data == undefined){
        for (j3=0;j3<cards.length;j3++){
            document.querySelector(".showcase").removeChild(cards[j3])
    } return
    } else {
        for (j=0;j<data.length;j++){    
            imgs[j].src = data[j].src
            imgs[j].width="300"
            imgs[j].height="400"
            tituloSite[j].textContent=data[j].nome
            tituloSite[j].style.textAlign = "center"
            textos[j].textContent = data[j].sinopse
            over[j].style.display = "none"
            textos[j].style.textAlign = "justify"
            }
        if (data.length == cards.length){
            return
        }
        else {
            for (j2=data.length;j2<cards.length;j2++){
                document.querySelector(".showcase").removeChild(cards[j2])
            } return
        }
    }
}

for (let i1 in document.querySelectorAll(".card")){
    cards[i1].onmouseover = () =>{
        over[i1].style.display = "flex"
    }
}

for (let i2 in document.querySelectorAll(".card")){
    cards[i2].onmouseout = () =>{
        over[i2].style.display = "none"
    }
}

/* Inserção de livros por JavaScript */

/* =================== */

/* Carrossel */

let carousel = document.getElementById("dh_carousel")
carousel.removeChild(document.querySelector(".carrousel_label"))

carousel.appendChild(btnBack = document.createElement("button"))
btnBack.appendChild(document.createTextNode("Back"))

let img = document.createElement("img")
let vetor =[
    "./img/imgCinza.png",
    "./img/imgVerde.png",
    "./img/imgLaranja.png",
    "./img/imgVermelha.png"
]
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

/* Menu */

let div = document.createElement("div")
div.setAttribute("class", "menu container")

div.style.display = "none"
div.style.width = "300px"
div.style.height = "300px"
div.style.backgroundColor = "#eee"
div.style.position = "absolute"
div.style.top = 0
div.style.right = 0
div.style.fontSize = "22px"
div.style.color = "#000"

let ul = document.createElement("ul")
div.appendChild(ul)

ul.style.display = "flex"
ul.style.height = "255px"
ul.style.flexDirection = "column"
ul.style.justifyContent = "space-around"


let il1 = document.createElement("il")
let il2 = document.createElement("il")
let il3 = document.createElement("il")
let il4 = document.createElement("il")
let il5 = document.createElement("il")

ul.appendChild(il1)
ul.appendChild(il2)
ul.appendChild(il3)
ul.appendChild(il4)
ul.appendChild(il5)

il1.style.display = "block"
il2.style.display = "block"
il3.style.display = "block"
il4.style.display = "block"
il5.style.display = "block"
il1.style.textAlign = "center"
il2.style.textAlign = "center"
il3.style.textAlign = "center"
il4.style.textAlign = "center"
il5.style.textAlign = "center"
il1.style.border = "0.5pt solid #888"
il2.style.border = "0.5pt solid #888"
il3.style.border = "0.5pt solid #888"
il4.style.border = "0.5pt solid #888"
il5.style.border = "0.5pt solid #888"

il1.appendChild(document.createTextNode("Sobre"))
il2.appendChild(document.createTextNode("Coleções"))
il3.appendChild(document.createTextNode("Lançamentos"))
il4.appendChild(document.createTextNode("Assine nossa Newsletter"))
il5.appendChild(document.createTextNode("Contato"))

document.getElementsByClassName("bookshop_header")[0].appendChild(div)

let btnMenu = document.getElementById("dh_menu_btn")

btnMenu.onclick = () =>{
    div.style.display = "flex"
}

div.onmouseout = () =>{
    div.style.display = "none"
}

/* Menu */

/* =================== */

/* Ferramenta de pesquisa */

const barraDePesquisa = document.getElementById("search_bar")
const categoria = document.getElementById("category")
const faixaDePreco = document.getElementById("price_range")
const bntPesquisa = document.getElementById("search_button")

function nom(obj=dados){
    return obj.nome === barraDePesquisa.value 
}
const achaNome = () => {
    return dados.filter(nom)
}

function cat(obj=dados){
    return obj.categoria === categoria.value 
}
const achaCategoria = () => {
    return dados.filter(cat)
}

function preco(obj=dados){
    return obj.valor === faixaDePreco.value 
}
const achaPreco = () => {
    return dados.filter(preco)

}

const teste = () => {
    let resultado = dados
    resultado = barraDePesquisa.value != "" ? achaNome() : dados;
    if (resultado != dados) {
        return resultado   
    }
    resultado = categoria.options[categoria.selectedIndex].value != "" ? achaCategoria() : dados;
    if (resultado != dados) {
        return resultado   
    }
    resultado = faixaDePreco.options[faixaDePreco.selectedIndex].value != "" ? achaPreco() : dados;
    return resultado
}

insere(dados)

let achado = bntPesquisa.onclick = () =>{
    insere (teste())
}

/* ===FIM===FIM===FIM===FIM===FIM===FIM===FIM===FIM===FIM===FIM=== */