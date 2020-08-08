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


    const imageLivros_1 = document.getElementById("fotoLivros_1");
    const tituloLivros_2 = document.getElementById("tituloLivros_2")
    const paragrafoLivros_3 = document.getElementById("paragrafoLivros_3")
    const imageLivros_4 = document.getElementById("fotoLivros_4");
    const tituloLivros_5 = document.getElementById("tituloLivros_5")
    const paragrafoLivros_6 = document.getElementById("paragrafoLivros_6")
    const imageLivros_7 = document.getElementById("fotoLivros_7");
    const tituloLivros_8 = document.getElementById("tituloLivros_8")
    const paragrafoLivros_9 = document.getElementById("paragrafoLivros_9")
    const imageLivros_10 = document.getElementById("fotoLivros_10");
    const tituloLivros_11 = document.getElementById("tituloLivros_11")
    const paragrafoLivros_12 = document.getElementById("paragrafoLivros_12")
    const imageLivros_13 = document.getElementById("fotoLivros_13");
    const tituloLivros_14 = document.getElementById("tituloLivros_14")
    const paragrafoLivros_15 = document.getElementById("paragrafoLivros_15")
    const imageLivros_16 = document.getElementById("fotoLivros_16");
    const tituloLivros_17 = document.getElementById("tituloLivros_17")
    const paragrafoLivros_18 = document.getElementById("paragrafoLivros_18")
       const listaLivros = [
            {
                id: 1,
                titulo: "Líderes Digitais", 
                texto: "Como é ser líder dos negócios digitais Brasileiros ao longo da segunda década do século XXI? Pela primeira vez, 21 dos mais influentes líderes do mercado digital brasileiro estão reunidos em um livro para desvendar a complexidade desse setor. ",
                image: "./img/book-1.jpg"
            },
            {
                id: 2,
                titulo: "A arte da Sabedoria", 
                texto: "O guia clássico da prudência e da busca pela felicidade. Há mais de 350 anos, Baltasar Gracián, prosador e jesuíta espanhol, inspira escritores, pensadores e filósofos.",
                image: "./img/book-2.jpg"
            },
            {
                id: 3,
                titulo: "O Segredo", 
                texto: "Você tem em suas mãos um Grande Segredo. Desde tempos imemoriais ele tem sido transmitido, cobiçado, ocultado, perdido, roubado e comprado por grandes somas de dinheiro. ",
                image: "./img/book-3.jpg"
            },
            {
                id: 4,
                titulo: "Especialista em pessoas", 
                texto: "No mundo ideal, as pessoas amam umas às outras, perdoam até 70 vezes 7 e não julgam para não serem julgadas. ",
                image: "./img/book-4.jpg"
            },
            {
                id: 5,
                titulo: "A díficil Arte", 
                texto: "Será que podemos confiar que as pessoas nos amam como realmente somos? Escritor consagrado e aclamado pelo público e pela crítica, Donald Miller adotava um estilo de vida marcado pela introspecção e pelo distanciamento das pessoas à sua volta. ",
                image: "./img/book-5.jpg"
            },
            {
                id: 6,
                titulo: "Seja o amor da sua vida", 
                texto: "EU SEI QUE VOCÊ PROCURA O AMOR Eu sei por que você está aqui lendo este livro e levantando os olhos enquanto se pergunta mentalmente: “como ele sabe?”. Eu sei porque, de alguma maneira, as pessoas se atraem. ",
                image: "./img/book-6.jpg"
            }
        ];

        listaLivros.forEach(livros =>{
           if(livros.id == 1){
            imageLivros_1.setAttribute("src",livros.image);
            tituloLivros_2.textContent = livros.titulo;
            paragrafoLivros_3.textContent = livros.texto;
           }
           if(livros.id == 2){
            imageLivros_4.setAttribute("src",livros.image);
            tituloLivros_5.textContent = livros.titulo;
            paragrafoLivros_6.textContent = livros.texto;
           }
           if(livros.id == 3){
            imageLivros_7.setAttribute("src",livros.image);
            tituloLivros_8.textContent = livros.titulo;
            paragrafoLivros_9.textContent = livros.texto;
           }
           if(livros.id == 4){
            imageLivros_10.setAttribute("src",livros.image);
            tituloLivros_11.textContent = livros.titulo;
            paragrafoLivros_12.textContent = livros.texto;
           }
           if(livros.id == 5){
            imageLivros_13.setAttribute("src",livros.image);
            tituloLivros_14.textContent = livros.titulo;
            paragrafoLivros_15.textContent = livros.texto;
           }
           if(livros.id == 6){
            imageLivros_16.setAttribute("src",livros.image);
            tituloLivros_17.textContent = livros.titulo;
            paragrafoLivros_18.textContent = livros.texto;
           }
       }) 
