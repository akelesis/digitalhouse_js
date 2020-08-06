// menu de opções

const btnOpen = document.getElementById("dh_menu_btn");
const menuPrincipal = document.getElementById("menu-opt");
const menuEstante = document.getElementById("menu-opt2");
const menuIdioma = document.getElementById("menu-opt3");
const optEstante = document.getElementById("estantesId");
const optIdioma = document.getElementById("idiomaId");

btnOpen.addEventListener("mouseover", () => {
    menuPrincipal.style.width = "300px";    
})
menuPrincipal.addEventListener("mouseleave", () => {      
        menuPrincipal.style.width = "0px";      
})
optEstante.addEventListener("mouseover", ()=>{
        menuEstante.style.width = "300px";       
})
optEstante.addEventListener("mouseleave", ()=>{
    menuEstante.style.width = "0px";         
})
menuEstante.addEventListener("mouseover", ()=>{    
        menuEstante.style.width = "300px";
        menuPrincipal.style.width = "300px";      
})
menuEstante.addEventListener("mouseleave", ()=>{
     menuEstante.style.width = "0px";
     
    menuPrincipal.style.width = "0px";    
})
optIdioma.addEventListener("mouseover", ()=>{
    menuIdioma.style.width = "300px";          
})
optIdioma.addEventListener("mouseleave", ()=>{
    menuIdioma.style.width = "0px";    
})
menuIdioma.addEventListener("mouseover", ()=>{
    menuIdioma.style.width = "300px";  
    menuPrincipal.style.width = "300px";        
})
menuIdioma.addEventListener("mouseleave", ()=>{
    menuIdioma.style.width = "0px";
    menuPrincipal.style.width = "0px";    
})

//Carrosel ________________________________________________________________

function slide1(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/game-of-thrones-season-3-poster-slice1.jpg')";
    setTimeout("slide2()", 3000)
    }
    
function slide2(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/O Guia do Mochileiro das Galáxias - Série.png')";
    setTimeout("slide3()", 3000)
    }
    
function slide3(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/fronteiras-do-universo.png')";
    setTimeout("slide1()", 3000)
    }


// Barra de pesquisa__________________________________

function bookSearch(){

    const search = document.getElementById("search_bar").value;
    const filterCategory = document.getElementById("category").value;
    const filterPrice = document.getElementById("price_range").value;
    document.getElementById("results").innerHTML = ""
    console.log(search);
    console.log(filterCategory); //não deu para terminar os filtros
    console.log(filterPrice);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&filter=paid-ebooks" ,
        datatype: "json",
        success: function(data){

            console.log(data);
       
            if(data === 0 || data === undefined || data === null){

                results.innerHTML = "<h2> NENHUM RESULTADO ENCONTRADO</h2>"

            }
            else{
            for(let i = 0; i < data.items.length;i++){

                results.innerHTML += "<div class='card'>" + "<img class='imagebook' src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "'title ='" + data.items[i].volumeInfo.description + "'>"          
                + "<h2 class='titlebook'>" + data.items[i].volumeInfo.title + "</h2>"
                + "<p class='authorbook'>"+ data.items[i].volumeInfo.authors + "</p>"
                + "<p class='pricebook'> Preço R$" + data.items[i].saleInfo.listPrice.amount + "</p>"              
                + "</div>"
                 }
            }
        },
        error: function(data){ results.innerHTML = "<h2> NENHUM RESULTADO ENCONTRADO</h2>"},

        type: "GET"
    })
}

document.getElementById("search_button").addEventListener("click", bookSearch);
document.getElementById("search_bar").addEventListener("keypress", function(event){

    let tecla = event.keyCode;
    if(tecla == 13){

        bookSearch();

    }
});

// Livros em destaque______________________________________

const books = [
    {
        image: "./img/content.jfif",
        title: "O guia definitivo do mochileiro das galáxias",
        authors: "Douglas Adams",
        description: "COM INTRODUÇÃO INÉDITA DO AUTOR E PREFÁCIO DE NEIL GAIMAN OS CINCO LIVROS DA CULTUADA SÉRIE O MOCHILEIRO DAS GALÁXIAS REUNIDOS EM UM ÚNICO E DEFINITIVO VOLUME Com mais de 15 milhões de exemplares vendidos, a saga de Arthur Dent pela Galáxia conquistou fãs pelo mundo inteiro. O humor ácido e as tramas surreais de Douglas Adams se tornaram ícones de uma geração e seguem fascinando leitores de todas as idades. Reunindo todos os livros da série em uma edição de luxo, O Guia Definitivo do Mochileiro das Galáxias vai levar você por aventuras improváveis. Pegue sua toalha, divirta-se e não entre em pânico! O Guia do Mochileiro das Galáxias – Segundos antes de a Terra ser destruída, Arthur Dent é salvo por Ford Prefect, um E.T. que fazia pesquisa para a nova edição de O Guia do Mochileiro das Galáxias. Pegando carona numa nave alienígena, os dois dão início a uma alucinante viagem pelo tempo e pelo espaço. O Restaurante no Fim do Universo – Arthur Dent e seus companheiros viajam pela Galáxia em uma busca desesperada por algum lugar para comer. Depois de fazer a refeição mais estranha de suas vidas, eles seguem pelo espaço e acabam descobrindo a questão fundamental sobre a Vida, o Universo e Tudo Mais. A Vida, o Universo e Tudo Mais – Após passar os últimos cinco anos abandonado e sozinho na Terra pré-histórica, Arthur Dent é arrastado para uma nova missão: salvar o Universo dos temíveis e infelizes robôs xenófobos do planeta Krikkit. Até Mais, e Obrigado pelos Peixes! – Depois de viajar pelo Universo, ver o aniquilamento da Terra, participar de guerras interestelares e conhecer criaturas extraordinárias, Arthur Dent está de volta ao seu planeta. E tudo parece estranhamente normal – exceto pelo desaparecimento dos golfinhos. Praticamente Inofensiva – Arthur Dent, Ford Prefect e Tricia McMillan se reencontram após muitos anos vivendo separados. Mas o que deveria ser uma festejada reunião de velhos amigos se transforma numa terrível confusão que põe em risco – mais uma vez – a vida de todos.",
        price: "49,99"
    },
    {
        image: "./img/content (1).jfif",
        title: "A Game of Thrones",
        authors: "George R. R. Martin",
        description: "NOW THE ACCLAIMED HBO SERIES GAME OF THRONES—THE MASTERPIECE THAT BECAME A CULTURAL PHENOMENON Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",       
        price: "52,84"  
    },
    {
        image: "./img/content (2).jfif",
        title: "O pequeno príncipe",
        authors: "Antoine de Saint-Exupéry",
        description: "O Pequeno Príncipe se mantém, desde seu lançamento em plena Segunda Guerra Mundial, na posição do livro francês mais vendido e mais traduzido de todos os tempos, com versões para trezentos idiomas, sendo superado apenas pela Bíblia. Isso porque o caráter universal desta fábula singular de Antoine de Saint-Exupéry tem conquistado gerações sucessivas de leitores em todos os quadrantes do mundo, confirmando o valor imorredouro de sua mensagem de amor, compaixão, tolerância, otimismo, perseverança e autoconhecimento. Saint-Exupéry, tal qual em seu livro, era piloto de aviões. Após um pouso forçado no deserto do Saara na África, o aviador se vê com água para apenas oito dias de consumo e uma pane no motor de sua aeronave a ser consertada. Imaginando estar sozinho em meio aquele mar de areia sem fim, eis que recebe a visita de um ilustre jovem vindo do planeta Asteroide B612. Começa assim a maior aventura da dupla. Dotado de uma energia de outro mundo, o menino contou ao aviador acidentado tudo sobre seus três vulcões (um deles extinto, mas nunca se sabe), sua flor e seus baobás. Pediu um carneiro, ao que foi prontamente atendido. Contou como amava ver o pôr do sol e irradiou-se ao lembrar de quando assistiu 44 deles em um único dia. Contou tudo sobre cativar uma raposa. Contou sobre sua ida a outros planetas onde conheceu um rei, um bêbado, um empresário, um vaidoso, um geógrafo e um acendedor de lampiões. Até chegar à Terra, onde conheceu o nosso amigo aviador. É sabido que os adultos são seres estranhos, dotados de limitações e preconceitos bobos. É sabido também que as crianças precisam ter muita paciência com os adultos, afinal eles não compreendem as coisas assim tão facilmente. O pequeno príncipe era astuto, curioso, falador e nunca deixava uma pergunta feita por ele sem resposta. A nova tradução de Frei Betto atualiza e revitaliza a mensagem deste clássico maior da literatura universal, tornando-o mais atraente para o leitor brasileiro contemporâneo.",
        price: "29,90"        
    },
    {
        image: "./img/content (3).jfif",
        title: "Clube da luta",
        authors: "Chuck Palahniuk",
        description: "O clube da luta é idealizado por Tyler Durden, que acredita ter encontrado uma maneira de viver fora dos limites da sociedade e das regras sem sentido. Mas o que está por vir de sua mente pode piorar muito. O livro serviu de base para um filme de 1999, procurando adaptar a atmosfera do livro, o mundo caótico do personagem e o humor negro do autor. ",
        price: "26,99"
    },
    {
        image: "./img/content (4).jfif",
        title: "O poderoso chefão",
        authors: "Mario Puzo",
        description:  "O poderoso chefão é um triunfo espantoso... O romance definitivo sobre as conexões da irmandade do crime.\" The Saturday Review \"O estilo fascinante e original de Mario Puzo conquista várias gerações.\" Detroit News O submundo da Máfia e o talento literário de Mario Puzo ganharam notoriedade com a publicação de O poderoso chefão. O carisma de Don Vito Corleone encanta na mais perfeita reconstituição da vida e dos negócios das famílias mafiosas de Nova York. Apesar de implacável, Don Vito é, essencialmente, um homem justo. Padrinho benevolente, nada recusa aos seus afilhados: conselho, dinheiro, vingança e até mesmo a morte de alguém. Em troca, o poderoso chefão pede apenas o respeito e a amizade de seus protegidos. Mas ninguém pode vencer as trapaças da idade. Quando seus inimigos atacarem juntos e tudo que a família Corleone significa estiver por um fio, o velho Corleone terá de escolher, entre seus filhos,um sucessor à altura. Um mundo de intrigas e decisões cruéis habilmente construído por Mario Puzo.",
        price: "25,59"
    },
    {
        image: "./img/content (5).jfif",
        title: "O universo numa casca de noz",
        authors: "Stephen Hawking",
        description: "MELHOR VISUALIZADO EM TABLETS Após o enorme sucesso de Uma breve história do tempo, a Intrínseca traz a luxuosa reedição de O universo numa casca de noz, na qual Stephen Hawking se vale de ilustrações, fotos e esquemas detalhados para mostrar grandes descobertas no campo da física teórica. Tudo isso, é claro, com sua conhecida clareza, elucidando temas complexos por meio de conceitos e ideias do dia a dia, como a inflação, as cartas de baralho e as linhas ferroviárias, e permeado com seu peculiar senso de humor. O livro traz muito da personalidade de Hawking, um dos maiores nomes da ciência atual e figura bem conhecida por suas ideias provocadoras e seu carisma. Ele guiará o leitor através do microcosmo quântico e do macrocosmo universal, discutindo as extraordinárias leis que regem o cosmos e as principais teorias hoje debatidas — o que também conta a saga de Hawking e dos físicos mais importantes de todos os tempos atrás do grande objetivo da ciência: a Teoria de Tudo. Para isso, serão apresentados conceitos caros à física teórica, como a supergravidade, a teoria quântica, a teoria-M, a holografia e a dualidade. Também são abordadas as propostas mais relevantes que desafiam o nosso entendimento atual de como funciona o universo. Com astronautas engolidos por buracos negros, viajantes do tempo, o debate sobre a origem do universo (e de todos nós), seu possível fim e a existência de vida em outras galáxias, além de curiosos questionamentos sobre o futuro biológico e tecnológico da humanidade em si, O universo numa casca de noz é leitura obrigatória para aqueles que querem se aventurar no que há de mais instigante hoje na física e para os que almejam ver como muitas vezes a teoria pode ser muito mais extraordinária do que a ficção científica.",
        price: "39,90"
    }
               
];


// Adicionar Livros em destaque________________________________________________________________

function addbooks(books){

    console.log(books)
    for(let i = 0; i < books.length;i++){

        results.innerHTML += "<div class='card'>" + "<img class='imagebook' src='" + books[i].image + "'title ='" +books[i].description + "'>" 
               
        + "<h2 class='titlebook'>" + books[i].title + "</h2>"
        + "<p class='authorbook'>"+ books[i].authors + "</p>"
        + "<p class='pricebook'> Preço R$" + books[i].price + "</p>"    
                  
        + "</div>"
    }
}

// botões adicionais___________________________________________

    //home
const home = document.getElementById("home");
home.addEventListener("click",()=>{
    document.getElementById("results").innerHTML = ""
    start();
})

//funções_________________________

function start() {
    slide1();
    addbooks(books);
    
}