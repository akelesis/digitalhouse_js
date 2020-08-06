// BOOKS

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
    // book.title.indexOf(title) !== -1
    const booksByName = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
    console.log(booksByName)
    fillShowcase(booksByName)
}

const filterBooks = () => {
    const category = document.getElementById("category").value
    let booksFiltered = []
    if (category === 'todos') {
        booksFiltered = books
    } else {
        booksFiltered = books.filter((book) => book.category === category)
    }

    const priceRange = document.getElementById("price_range").value
    if (priceRange != 'todos') {
        booksFiltered = booksFiltered.filter((book) => book.priceRange === priceRange)
    }
    
    fillShowcase(booksFiltered)
}

document.getElementById("category").addEventListener("change", filterBooks)
document.getElementById("price_range").addEventListener("change", filterBooks)

document.getElementById("search_bar").addEventListener("keyup", event => {
    if (event.keyCode === 13) {
    	document.getElementById("search_button").click()
    }
});

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

let books
fetch('./js/books.json')
    .then(response => {
        return response.json()
    })
    .then(bookList => {
        fillShowcase(bookList)
        fillCategories(bookList)
        books = bookList
    })
    .catch(err => {
        console.error(err)
    })

// MENU

document.getElementById('dh_menu_btn').addEventListener('click', (event) => {
    event.preventDefault()
    const sidebarMenu = document.getElementById('sidebar_nav')
    sidebarMenu.style.animation = "open_menu 1.5s forwards";
})

document.getElementById('close_menu_btn').addEventListener('click', (event) => {
    event.preventDefault()
    const sidebarMenu = document.getElementById('sidebar_nav')
    sidebarMenu.style.animation = "close_menu 1.5s forwards";
})
