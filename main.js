let livros=[
    {titulo:"A porta encantada",
    autor:"Felipe 01",
    editora:"Editora 01",
    preco:"R$ 20,00",
    categoria:"Fantasia",
    imagem:"img/a_porta_encantada.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/a_profecia_de_midria.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"Artificial Condition",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/artificial_condition.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"Herói nas Highlands",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/heroi_nas_highlands.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"Jardins da Lua Volume Um",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/jardins_da_lua_volume_um.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"O poder do Hábito",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/o_poder_do_habito.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"Os sete hábitos das pessoas altamente eficazes",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/os_sete_habitos_das_pessoas_altamente_eficazes.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"},

    {titulo:"Um casamento conveniente",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/um_casamento_conveniente.png",
    descricao: "Lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun"}
]

let tempoSlide = 3000;

function setaImagem(){
    var settings = {
        primeiraImg: function(){
            elemento = document.querySelector("#slider a:first-child");
            elemento.classList.add("ativo");
            this.legenda(elemento);
        },

        slide: function(){
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }

        },

        proximo: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                settings.legenda(elemento.nextElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
            intervalo = setInterval(settings.slide,tempoSlide);
        },

        anterior: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");
                settings.legenda(elemento.previousElementSibling);
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector("a:last-child");
                elemento.classList.add("ativo");
                this.legenda(elemento);
            }
            intervalo = setInterval(settings.slide,tempoSlide);
        },

        legenda: function(obj){
            let legenda = obj.querySelector("img").getAttribute("alt");
            document.getElementById("bookName").innerHTML = legenda;
        }

    }

    //chama o slide
    settings.primeiraImg();

    //chama a legenda
    settings.legenda(elemento);

    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide,4000);
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaImagem,false);

{/* <div class="card">
    <img src="./img/300x400.png">
    <div class="overlay">
        <h2>Texto Exemplo</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati minus eaque quos assumenda.
            Culpa commodi repudiandae asperiores ipsa hic, dicta cumque earum omnis aperiam eaque iste
            corrupti error perspiciatis repellat!</p>
    </div>
</div> */}

let showcase = document.getElementsByClassName("showcase");

function addBookShowcase(){
    for(i=0; i<livros.length; i++){
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card");

        let imgCapa=document.createElement("img");
        imgCapa.setAttribute("src", livros[i].imagem);

        let overlayDiv = document.createElement("div");
        overlayDiv.setAttribute("class", "overlay");

        let bookTitle = document.createElement("h2");
        let titleContent = document.createTextNode(livros[i].titulo)
        bookTitle.appendChild(titleContent);

        let descricaoLivro =document.createElement("p");
        let descContent = document.createTextNode(livros[i].descricao)
        descricaoLivro.appendChild(descContent);

        showcase[0].appendChild(divCard);

        divCard.appendChild(imgCapa);
        
        divCard.appendChild(overlayDiv);
        
        overlayDiv.appendChild(bookTitle);
        overlayDiv.appendChild(descricaoLivro);
    }
}

addBookShowcase();