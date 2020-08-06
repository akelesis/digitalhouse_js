// Lê arquivo livros.json
fetch("livros.json")
  .then(response => response.json())
  .then(json => {
    dadosLivrosArquivoDoArquivoJson(json)
  });

// Retorna dados do arquivo livros.json
function dadosLivrosArquivoDoArquivoJson(json){
  const showcase = document.querySelector(".showcase");
  showcase.innerHTML = "";

  json.map(json =>{
    const card = document.createElement("div");
    card.className = "card";
  
    const bookImg = document.createElement("img");
    bookImg.src = json.img

    const overlay = document.createElement("div");
    overlay.className = "overlay";
  
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = json.nome;
  
    const bookSinopsis = document.createElement("p");
    bookSinopsis.textContent = json.descricao.substr(0, 100)+"...";
  
    overlay.appendChild(bookTitle);
    overlay.appendChild(bookSinopsis);
  
    card.appendChild(bookImg);
    card.appendChild(overlay);
  
    showcase.appendChild(card);
  })
}



