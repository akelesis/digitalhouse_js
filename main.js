

/*---------CARROSEL-----FUNÇÃO DE ALTERAR AS IMAGENS E LINKS DE UMA TAG a - PROBLEMAS COM A ADPTAÇÃO DA TELA ------*/
function banner1(){
    document.getElementById('99').src='img/banner1.jpg';
    
    
    setTimeout("banner2()", 2000)
    document.getElementById("88").href="https://www.digitalhouse.com/br/?gclid=CjwKCAjw97P5BRBQEiwAGflV6ebF_GDoW9aotzwTBqLZHYfIsIxwIsJ2iaALy6YC26HPwgEp65xQkhoCvSIQAvD_BwE";
}

function banner2(){
        document.getElementById('99').src='img/banner2.jpg';
        
        setTimeout("banner3()", 2000)
        document.getElementById("88").href="https://www.santander.com.br/";
}

function banner3(){
    document.getElementById('99').src='img/banner3.jpg';
    
    setTimeout("banner1()", 2000)
    document.getElementById("88").href="https://www.java.com/pt_BR/download/";
    }
    
      /*---------------menu botao------- EVENTO DE COLOCAR UMA ALTURA E LARGURA PROVISORIA----------*/

    
  const aparecer = document.getElementById("dh_menu_btn");
  const lista = document.getElementById("menu-flex");
  
  aparecer.addEventListener("click", () => {
      lista.style.width = "200px";
      lista.style.height ="199px";
      
  })
  
  lista.addEventListener("mouseleave", () => {
      lista.style.width = "0px";
  })


  

    /* ----- ADICIONAR IMAGENS -  ADICIONANDO ATRAVES DE ID EM CADA ELEMENTO DO HTML--*/

    //document.getElementById('img1').src = "./img/img1.jpg";
    
    //document.getElementById('img2').src = "./img/img2.jpg";
    //document.getElementById('img3').src = "./img/img3.jpg";
    //document.getElementById('img4').src = "./img/img4.jpg";
    //document.getElementById('img5').src = "./img/img5.jpg";
    //document.getElementById('img6').src = "./img/img6.jpg";
    function teste ()
    {
        const filter = {
            TITULO:   document.getElementById("search_bar").value.toLowerCase(),
            CATEGORIA:   document.getElementById("CATEGORIA").value,
            NIVELPRECO:document.getElementById("price_range").value
        };
    
        const result= books.filter(function(item) {
            if (filter.TITULO != "")
            {
                return item.TITULO.toLowerCase().indexOf(filter.TITULO) > -1;
            }
            else
            {
                for (var key in filter) {
                    if (filter[key] != "" && key !="TITULO"){
                        if (item[key] != filter[key])
                        return false;         
                    }  
                }
                return true;
            }
        });
        
        console.log(result) 
    teste
     
        addBooks(result);
    
    }
    
    
    const books = [
        {
            CAPA: "./img/img1.jpg",
            TITULO: "ANSIEDADE",
            AUTOR: "Augusto Cury",
            DESCRICAO: "",
            CATEGORIA: "Auto Ajuda",
            PRECO: "36,90",
            NIVELPRECO: "medio"
        },
        {
            CAPA: "./img/img2.jpg",
            TITULO: "A GAROTA DO LAGO   ",
            AUTOR: "Charlie Donlea",
            DESCRICAO: "",
            CATEGORIA: "Fantasia",
            PRECO: "60,00",
            NIVELPRECO: "caro"
        },
        {
            CAPA: "./img/img3.jpg",
            TITULO: "A SUTIL ARTE DE LIGAR O FODA-SE",
            AUTOR: "Mark Manson",
            DESCRICAO: "",
            CATEGORIA: "Ficção Científica",
            PRECO: "18,90",
            NIVELPRECO: "barato"
        },
        {
            CAPA: "./img/img4.jpg",
            TITULO: "O MILAGRE DA MANHÃ",
            AUTOR: "Hall Elrod",
            DESCRICAO: " ",
            CATEGORIA: "Romance",
            PRECO: "31,41",
            NIVELPRECO: "medio"
        },
        {
            CAPA: "./img/img5.jpg",
            TITULO: "PROCRASTINAÇÃO",
            AUTOR: "Lilian Soares",
            DESCRICAO:  "",
            CATEGORIA: "Auto Ajuda",
            PRECO: "29,18",
            NIVELPRECO: "medio"
        },
        {
            CAPA: "./img/img6.jpg",
            TITULO: "As novas regras do VINHO",
            author: "Jon Bonne",
            description: "",
            CATEGORIA: "Fantasia",
            PRECO: "66,93",
            NIVELPRECO: "mais caro"
        }
        
    ];
    /*---ADICIONANDO LIVROS ---*/
    
    function addBooks(books) {
        const showcase = document.querySelector('.showcase');
        if (books.length == 0){
            showcase.textContent = "Infelizmente não temos esse produto ainda";
            showcase.classList.add("no_results");
        } 
        else {
            showcase.hasAttribute("class", "no_results") ? showcase.classList.remove("no_results") : "";
            
            let divs = "";
            books.forEach(book => {
                divs += 
                "<div class='card'>" +
                    "<img class='fotolivro' src='" + book.CAPA + "' TITULO = '" + book.description + "'>" +
                    "<div class='overlay'>" +
                        "<h2 class='titulo' >" + book.TITULO + "</h2>" +
                        "<p class='escritor'>AUTOR : " + book.AUTOR + "</p>" +
                        "<p class='valor'> Preço : R$" + book.PRECO + "</p>" +
                    "</div>" +
                "</div>";
            });
            showcase.innerHTML = divs;
        }
    }
    /*  ---- iniciando o banner e a adicção d elivros ao abrir o site--*/
    function start() {
        banner1();
        addBooks(books);
    }
    