const bookTemplate = (book) => {
    return `
    <div class="card">
        <img src="${book.coverPath}">
        <div class="overlay">
            <h2>${book.title}</h2>
            <p>${book.category}</p>
            <p>R$${book.price}</p>
            <p class="book_description">${book.description}</p>
        </div>
    </div>
    `
}

const notFoundTemplate = `<p style="color: red; font-size: 1.5em;">Nenhum livro encontrado.</p>`

const getBookTitle = (event) => {
    event.preventDefault()
    const title = document.getElementById("search_bar").value
    if (title === ""){
        fillShowcase(books)
        return
    }

    const booksByName = books.filter((book) => book.title === title)
    fillShowcase(booksByName)
}

document.getElementById("category").addEventListener("change", () => {
    const category = document.getElementById("category").value
    if (category === 'todos') {
        fillShowcase(books)
        return
    }
    const booksFinded = books.filter((book) => book.category === category)
    fillShowcase(booksFinded)
})

document.getElementById("price_range").addEventListener("change", () => {
    const priceRange = document.getElementById("price_range").value
    if (priceRange === 'todos') {
        fillShowcase(books)
        return
    }
    const booksFinded = books.filter((book) => book.priceRange === priceRange)
    fillShowcase(booksFinded)
})

const fillShowcase = (bookList) => {
    const showcase = document.querySelector('.showcase')
    showcase.innerHTML = ""

    if (bookList.length === 0) {
        showcase.innerHTML = notFoundTemplate;
    } else {
        bookList.forEach(book => {
            showcase.innerHTML += bookTemplate(book)
        })
    }
}

const fillCategories = (bookList) => {
    const categories = [...new Set(bookList.map(book => book.category))]
    categories.forEach(category => {
        document.getElementById('category').innerHTML += `<option value="${category}">${category}</option>`
    })
}

fillShowcase(books)
fillCategories(books)
