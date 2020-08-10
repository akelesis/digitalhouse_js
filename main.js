const imageCarousel = document.getElementById("arrayImages");
    const ArrayCarrousel = [
        './img/banner-livros-2.jpg', 
        './img/banner-livros-3.jpg', 
        './img/banner-livros-1.jpg',
         ];

        let i = 0;
        function alterarImagens() {
            imageCarousel.setAttribute("src",ArrayCarrousel[i]);
            i++;
            if (i >= ArrayCarrousel.length) {
                i = 0;
                }
            }      
    
    setInterval(alterarImagens, 3000)

       const listaLivros = [
            {
                titulo: "Líderes Digitais", 
                texto: "Como é ser líder dos negócios digitais Brasileiros ao longo da segunda década do século XXI? Pela primeira vez, 21 dos mais influentes líderes do mercado digital brasileiro estão reunidos em um livro para desvendar a complexidade desse setor. ",
                image: "./img/book-1.jpg",
                categoria: "Auto Ajuda"
            },
            {
                titulo: "A arte da Sabedoria", 
                texto: "O guia clássico da prudência e da busca pela felicidade. Há mais de 350 anos, Baltasar Gracián, prosador e jesuíta espanhol, inspira escritores, pensadores e filósofos.",
                image: "./img/book-2.jpg",
                categoria: "Ficção Científica"
            },
            {
                titulo: "O Segredo", 
                texto: "Você tem em suas mãos um Grande Segredo. Desde tempos imemoriais ele tem sido transmitido, cobiçado, ocultado, perdido, roubado e comprado por grandes somas de dinheiro. ",
                image: "./img/book-3.jpg",
                categoria: "Fantasia"
            },
            {
                titulo: "Especialista em pessoas", 
                texto: "No mundo ideal, as pessoas amam umas às outras, perdoam até 70 vezes 7 e não julgam para não serem julgadas. ",
                image: "./img/book-4.jpg",
                categoria: "Romance"
            },
            {
                titulo: "A díficil Arte", 
                texto: "Será que podemos confiar que as pessoas nos amam como realmente somos? Escritor consagrado e aclamado pelo público e pela crítica, Donald Miller adotava um estilo de vida marcado pela introspecção e pelo distanciamento das pessoas à sua volta. ",
                image: "./img/book-5.jpg",
                categoria: "Auto Ajuda"
            },
            {
                titulo: "Seja o amor da sua vida", 
                texto: "EU SEI QUE VOCÊ PROCURA O AMOR Eu sei por que você está aqui lendo este livro e levantando os olhos enquanto se pergunta mentalmente: “como ele sabe?”. Eu sei porque, de alguma maneira, as pessoas se atraem. ",
                image: "./img/book-6.jpg",
                categoria: "Ficção Científica"
            }
        ];

        const container = document.querySelector(".showcase")
        const filtrarCategoria = document.getElementById("category")
        const input = document.getElementById("search_bar")

        listaLivros.forEach(livro =>{
           livroBox = document.createElement("div");
           livroBox.setAttribute("class", "livro-Box");

           livroBox.innerHTML = `<div class="card">
           <img src=${livro.image} width="300" height="400" />
           <div class="overlay">
               <h2 class="titulo-cor">${livro.titulo}</h2>
               <p class="paragrafo-cor">${livro.texto}</p>
           </div>
           </div>`

           container.appendChild(livroBox);
       }); 


      



