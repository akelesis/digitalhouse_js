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
        titulo: "A Fundação",
        autor: "Isaac Asimov",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81ZwYoGHefL.jpg",
        categoria: "Ficção Científica",
        preco: "medio",
        precoReal: "R$ 30,00",
        texto: "Lançado originalmente em 1951, o livro Fundação, de Isaac Asimov, é o primeiro volume da clássica Trilogia Fundação, vencedora do prêmio Hugo de melhor série de todos os tempos."
    },
    {
        titulo: "Fundação e Império",
        autor: "Isaac Asimov",
        imagem: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12101503/1008537390.jpg?v=637142219974170000",
        categoria: "Ficção Científica",
        preco: "medio",
        precoReal: "R$ 29,90",
        texto: "Lançado originalmente em 1952, o livro Fundação e Império, de Isaac Asimov, é o segundo volume da clássica Trilogia Fundação, vencedora do prêmio Hugo de melhor série de todos os tempos."
    },
    {
        titulo: "Segunda Fundação",
        autor: "Isaac Asimov",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/41qZ+NKVlDL._SX347_BO1,204,203,200_.jpg",
        categoria: "Ficção Científica",
        preco: "caro",
        precoReal: "R$ 41,90",
        texto: "Segunda fundação é o terceiro livro da trilogia da Fundação, composta ainda pelos livros Fundação (livro 1) e Fundação e império (livro 2)."
    },
    {
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        imagem: "https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg",
        categoria: "Fantasia",
        preco: "caro",
        precoReal: "R$ 59,90",
        texto: "Situado em um tempo -Entre o Alvorecer das Fadas e o Domínio dos Homens-, o livro segue a busca do hobbit caseiro Bilbo Bolseiro para conquistar uma parte do tesouro guardado pelo dragão Smaug. "
    },
    {
        titulo: "Ansiedade",
        autor: "Augusto Cury",
        imagem: "https://images-americanas.b2w.io/produtos/imagens/117753356/117753364_1GG.jpg",
        categoria: "Auto Ajuda",
        preco: "barato",
        precoReal: "R$ 11,67",
        texto: "Vivemos em uma sociedade de excessos. Somos bombardeados por informações que, na maior parte das vezes, não conseguimos absorver. Somos cobrados, pressionados, nos tornamos reféns da nossa mente. Essa situação alterou algo que dever..."
    },
    {
        titulo: "Os Quatro Compromissos",
        autor: "Don Miguel Ruiz",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51vnnCCazOL._SX322_BO1,204,203,200_.jpg",
        categoria: "Auto Ajuda",
        preco: "medio",
        precoReal: "R$ 21,90",
        texto: "Baseado na sabedoria ancestral tolteca, este livro nos oferece um poderoso código de conduta que pode rapidamente transformar nossas vidas em uma nova experiência de liberdade, verdadeira felicidade e amor, através dos seguintes compromissos: seja impecável com sua palavra; não leve nada para o lado pessoal; não tire conclusões e dê sempre o melhor de si."
    },
    {
        titulo: "A Mulher do Viajante do Tempo",
        autor: "Audrey Niffenegger",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/81ynYkWZFOL.jpg",
        categoria: "Romance",
        preco: "barato",
        precoReal: "R$ 18,00",
        texto: "Quando se conhecem, Henry tem 28 anos e Clare, vinte. Ele é um moderno bibliotecário; ela, uma linda estudante de arte. Mas o seu casamento nunca poderá ser normal. Henry sofre de um distúrbio genético raro e de tempos em tempos, seu relógio biológico dá uma guinada para frente ou para trás, e ele então é capaz de viajar no tempo..."
    },
    {
        titulo: "Principios",
        autor: "Ray Dalio",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/41JN3eVnBUL.jpg",
        categoria: "Auto Ajuda",
        preco: "mais caro",
        precoReal: "R$ 64,69",
        texto: "Conhecido como o “Steve Jobs dos investimentos”, Ray Dalio é fundador da Bridgewater Associates, a quinta empresa privada mais importante dos Estados Unidos e a mais eficaz gestora de fundos hedge do mundo. "
    },
    {
        titulo: "Tudo é Eventual",
        autor: "Stephen King",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/41UpqOIaJlL._SX346_BO1,204,203,200_.jpg",
        categoria: "Fantasia",
        preco: "mais caro",
        precoReal: "R$ 62,90",
        texto: "São catorze histórias de suspense, surpresas e terror, certeiras na arte de agarrar o leitor pelo pescoço e não largá-lo mais, até a última frase."
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
        if (texto === livro.titulo.toLowerCase() || texto === livro.autor.toLowerCase()){
            return livro; 
        } 
        else if (texto === ""){
            return precoSelect;
        }
    });

    //Não encontrei material sobre como fazer a pesquisa do título aproximada :(
  
    if (livrosFiltro.length == 0){
        container.innerHTML = `<h2 id="error"> Nenhum resultado encontrado </h2>`
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