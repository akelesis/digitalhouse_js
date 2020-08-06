/* ----- Menu Lateral -----*/
const nav = document.getElementById("nav");
const btn = document.getElementById("dh_menu_btn");

function menu (){
    let show = nav.classList.contains("show");

        if(show == false){
            nav.classList.add("show");
        }else{
            nav.classList.remove("show");
        }
}

btn.addEventListener("click", menu) 

/* ----- Carrossel -----*/
const back = document.getElementById("back");
const next = document.getElementById("next");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");

function voltar(){
    let active1 = img1.classList.contains("active");
    let active2 = img2.classList.contains("active");

    if (active1 == true) {
        img1.classList.remove("active")
        img3.classList.add("active")
    }    
    else if (active2 == true){
        img2.classList.remove("active")
        img1.classList.add("active")
    } 
    else {
        img3.classList.remove("active")
        img2.classList.add("active")
    }
}

function avancar(){
    let active1 = img1.classList.contains("active");
    let active2 = img2.classList.contains("active");

    if (active1 == true) {
        img1.classList.remove("active")
        img2.classList.add("active")
    }  
    else if (active2 == true){
        img2.classList.remove("active")
        img3.classList.add("active")
    } 
    else {
        img3.classList.remove("active")
        img1.classList.add("active")
    }    
}

back.addEventListener("click", voltar);
next.addEventListener("click", avancar);

/* ----- Inserção de livros -----*/
const container = document.querySelector(".showcase");
const divCard = document.querySelectorAll(".card");

const livros = [
    {
        titulo: "Auto Ajuda",
        imagem: "./img/300x400.png",
        categoria: "Auto Ajuda",
        preco: "caro",
        texto: "Esse livro vai te ajudar"
    },
    {
        titulo: "Ficção Científica",
        imagem: "./img/300x400.png",
        categoria: "Ficção Científica",
        preco: "mais caro",
        texto: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?"
    },
    {
        titulo: "Fantasia",
        imagem: "./img/300x400.png",
        categoria: "Fantasia",
        preco: "barato",
        texto: "Tender fire ship smartly lass Corsair aft spyglass Sail ho long boat grapple. Brig starboard maroon dance the hempen jig Arr Jolly Roger jack flogging cog bowsprit. Yardarm Shiver me timbers lateen sail scurvy hang the jib heave to haul wind rum topmast splice the main brace."
    },
    {
        titulo: "Filosofia auto ajuda",
        imagem: "./img/300x400.png",
        categoria: "Auto Ajuda",
        preco: "medio",
        texto: "More fundamental than religion is our basic human spirituality. We have a basic human disposition towards love, kindness and affection, irrespective of whether we have a religious framework or not."
    },
    {
        titulo: "Romance",
        imagem: "./img/300x400.png",
        categoria: "Romance",
        preco: "barato",
        texto: "The best feeling on Earth is to hold you in my arms and bloom, nourished by your love. You are the love of my life."
    },
    {
        titulo: "Ficção",
        imagem: "./img/300x400.png",
        categoria: "Ficção Científica",
        preco: "mais caro",
        texto: "Alien ships appear on Earth and a linguist is recruited by the military to try to communicate with extraterrestrial creatures and determine whether they are on a peacekeeping mission or whether they are a threat."
    },
]

function inserir(){
    for (let i = divCard.length; i < livros.length ; i++) {
        container.innerHTML += `
        <div class="card" >
            <img src=${livros[i].imagem} id="card-img">
            <div class="overlay">
                    <h2>${livros[i].titulo}</h2>
                    <p>${livros[i].texto}</p>
            </div>
        </div>
    `
    }
}

inserir();

/* ----- filtrar pesquisa -----*/
const search = document.getElementById("search_button")
const category = document.getElementById("category");
const price = document.getElementById("price_range");
const text = document.getElementById("search_bar");

function filtros () {

    container.innerHTML = "";

    let texto = text.value.toLowerCase();
    let categoria = category.options[category.selectedIndex].value;
    let preco = price.options[price.selectedIndex].value;
 

    const categoriaSelect = livros.filter(livro =>{
        if (categoria === livro.categoria){
            return livro;
        } 
        else if (categoria === ""){
            return livros;
        }
    });

    const precoSelect = categoriaSelect.filter(livro =>{
        if (preco === livro.preco){
            return livro;
        } 
        else if (preco === ""){
            return categoriaSelect;
        }
    });

    const livrosFiltro = precoSelect.filter(livro =>{
        if (texto === livro.titulo.toLowerCase()){
            return livro; 
        } 
        else if (texto === ""){
            return precoSelect;
        }
    });

    //Não encontrei material sobre como fazer a pesquisa do título aproximada :(
  
    if (livrosFiltro.length == 0){
        container.innerHTML = `<h2> Nenhum resultado encontrado </h2>`
    } 
    else {
    for (let i = 0; i < livrosFiltro.length; i++) {
        container.innerHTML += `
        <div class="card" >
            <img src=${livrosFiltro[i].imagem} id="card-img">
            <div class="overlay">
                    <h2>${livrosFiltro[i].titulo}</h2>
                    <p>${livrosFiltro[i].texto}</p>
            </div>
        </div>
    `
         }
    }

}

search.addEventListener("click", filtros); 