const listaLivros = []
const jsonAddress = 'js/livros.json'
const card = document.querySelector('.showcase')
var cont = 0;
fetch(jsonAddress)
.then(status => status.json())
.then(data => listaLivros.push(...data))
.then(() => {
    for (i=0; i<6; i++){
        cont++;
        card.innerHTML += cards(listaLivros[i])
        }
    }
)

function cards(json){
    return `
    <div class="card">
        <a href="#"" class="linkBooks">
        <img src="${json.imagem}" alt="Capa do livro ${json.titulo}">
        <div class="container">
            <p class="titulo"><strong>${json.titulo}</strong></p>
            <p class="autor">Autor: ${json.autor}</p>    
            <p class="preco">Preço: ${json.preco}</p>
        </div>
        </a>
    </div>    
    ` 
}

const trocarLivrosProx = document.getElementById("btn_livros_prox");
trocarLivrosProx.addEventListener("click", function(){
    passar(listaLivros, 1);
})
const trocarLivrosAnt = document.getElementById("btn_livros_ant");
trocarLivrosAnt.addEventListener("click", function(){
    passar(listaLivros, 0);
})

function passar(json, n){
    card.innerHTML = "";    
    if(cont == 6 && n == 1){
        cont = 12;
        for(i = 6; i < 12; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }else if(cont == 6 && n == 0){
        cont = 18;
        for(i = 12; i < 18; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }else if(cont == 12 && n == 1){
        cont = 18
        for(i = 12; i < 18; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }else if(cont == 12 && n == 0){
        cont = 6;
        for(i = 0; i < 6; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }else if(cont == 18 && n == 1){
        cont = 6;
        for(i = 0; i < 6; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }else if(cont == 18 && n == 0){
        cont = 12;
        for(i = 6; i < 12; i++){
            card.innerHTML += cards(listaLivros[i]);
        }
    }
}