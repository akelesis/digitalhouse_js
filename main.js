let livros=[
    {titulo:"A porta encantada",
    autor:"Felipe 01",
    editora:"Editora 01",
    preco:"R$ 20,00",
    categoria:"Fantasia",
    imagem:"img/a_porta_encantada.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/a_profecia_de_midria.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/artificial_condition.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/heroi_nas_highlands.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/jardins_da_lua_volume_um.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/o_poder_do_habito.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/os_sete_habitos_das_pessoas_altamente_eficazes.jpg"},

    {titulo:"A profecia de Mídria",
    autor:"Felipe 02",
    editora:"Editora 02",
    preco:"R$ 30,00",
    categoria:"Fantasia",
    imagem:"img/um_casamento_conveniente.jpg"}
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