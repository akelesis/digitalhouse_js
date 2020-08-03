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

const fillShowcase = (bookList) => {
    bookList = bookList.length === 0 ? books : bookList
    const showcase = document.querySelector('.showcase')

    showcase.innerHTML = ""
    bookList.forEach(book => {
        showcase.innerHTML += bookTemplate(book)
    })
}

fillShowcase(books)
