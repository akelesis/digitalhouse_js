const cardSection = document.getElementById('card-section')

function cards(json){
    return `
    <div class="card" style="width: 18rem">
        <img style="width:100%" src="./img/books/${json.img}" alt="Capa do livro ${json.name}">
        <div class="container">
            <p class="">${json.name}</p>
            <p class="">Preço: R$${json.price}</p>    
            <p class="">Categoria: ${json.category}</p> 
            <p class="">Descrição: ${json.description}</p>
        </div> 
    </div>`
}

const books = async () => {
    try{
        const response = await fetch('./data/books.json')
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json()
        console.log(json)
        for (let i=0; i<=json.length; i++){
            cardSection.innerHTML += cards(json[i])
        }
    }catch(e){
        console.log('Erro ao acessar o array')
    }
}

books()