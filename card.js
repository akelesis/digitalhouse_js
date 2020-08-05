const listBooks = []
const endpoint = './data/books.json'
const cardSection = document.getElementById('card-section')

fetch(endpoint)
.then(status => status.json())
.then(data => listBooks.push(...data))
.then(() => {
    for (i=0; i<listBooks.length; i++){
        cardSection.innerHTML += cards(listBooks[i])
        }
    }
)

function cards(json){
    return `
    <div class="card" style="width: 18rem">
    <img style="width:100%" src="./img/books/${json.img}" alt="Capa do livro ${json.name}">
    <div class="container">
    <p class=""><b>${json.name}</b></p>
    <p class="">Preço: R$${json.price}</p>    
    <p class="">Categoria: ${json.category}</p> 
    <p class="">Descrição: ${json.description}</p>
    </div> 
    </div>`
}


const filterByName = () => {
    const search_bar = document.getElementById("search_bar").value
    const regex = new RegExp(search_bar, 'gi')
    const newList = listBooks.filter(book => {
        return book.name.match(regex)
    })
    cardSection.innerHTML = ""
    for (i=0; i<newList.length; i++){
        cardSection.innerHTML += cards(newList[i])
    }
}

const filterByCategory = (listBooks) => {

}

const filterByPrice = (listBooks) => {
}
