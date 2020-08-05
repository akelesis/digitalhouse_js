window.addEventListener("load", async () => inicializar())
function inicializar() {
    imghtmlcarrosel = document.getElementById("ImagemCarrosel01");
    imgjavacarrosel = document.getElementById("ImagemCarrosel02");
    imgjavascriptcarrosel = document.getElementById("ImagemCarrosel03");
    imggitcarrosel = document.getElementById("ImagemCarrosel04");
    search_bar = document.getElementById("search_bar");
    search_button = document.getElementById("search_button"); 
    dh_menu_btn =document.getElementById("dh_menu_btn");
    fechar =document.getElementById("fechar");
    search_bar.addEventListener("keypress", async(e)=> textChanged(e));
    search_button.addEventListener("click", async () => pesquisar());
    dh_menu_btn.addEventListener("click", async () => navbar());
    fechar.addEventListener("click", async () => navbar());
    carrosel();
    

}
function carrosel(){
    setInterval(() => {
        if (!imghtmlcarrosel.hidden) {
            imghtmlcarrosel.hidden = true;
            imgjavacarrosel.hidden = false;
        } else if (imgjavacarrosel.hidden == false) {
            imgjavacarrosel.hidden = true;
            imgjavascriptcarrosel.hidden = false;
        } else if (imgjavascriptcarrosel.hidden == false) {
            imgjavascriptcarrosel.hidden = true;
            imggitcarrosel.hidden = false;
        } else {
            imggitcarrosel.hidden = true;
            imghtmlcarrosel.hidden = false;
        }
    }, 1000);

}
function pesquisar(){
    const livrosPesquisados = livros.filter(x => x.nome.toLocaleUpperCase().includes(search_bar.value.toLocaleUpperCase()))
    
    if (livrosPesquisados && livrosPesquisados.length>0) {
       
        const livrosVenda =document.querySelector(".showcase").children;
        for (const livro of livrosVenda) {
            if (livrosPesquisados.findIndex(x => x.id == livro.id) >-1) {
                livro.style.display = "block";
            }else{
                livro.style.display = "none";
            }
        }
        
    }else{
        alert("Livro pesquisado não foi localizado!!!!")
    }
}
function textChanged(e){
    if (e.key == "Enter") {
        pesquisar();
        
    }

}
function navbar(){
    if (nav==false) {
        nav = true;
        document.getElementById("mySidebar").style.display = "block";
        
    } else {
        nav = false;
        document.getElementById("mySidebar").style.display = "none";
    }

}
let imgjavacarrosel;
let imghtmlcarrosel;
let imggitcarrosel;
let imgjavascriptcarrosel;
let search_bar;
let search_button;
let dh_menu_btn;
let fechar;
let nav = false;
const livros = [
    {id:"csharp",nome:"Práticas de C#"},
    {id:"git",nome: "Controlando versões com Git e Github"},
    {id:"java",nome:"Programação Java para a Web"},
    {id:"c",nome:"Programação em linguegem C"},
    {id:"php",nome:"Programando em PHP através de exemplos"},
    {id:"algoritmos",
    nome:"Algoritmos lógica para desenvolvimento de programação de computadores"}
]