const input = document.querySelector('#search_bar');

const booksElements = document.querySelectorAll(".card");

const books = [];

booksElements.forEach((book) => {
    const overlay = book.children.item(1);

    const bookName = overlay.children.item(0).textContent;

    books.push(bookName);
})

const searchBooksByName = (name) => {
    if (name === '') {
        booksElements.forEach(bookElement => bookElement.style.display = 'flex');
    }
    else {
        const regExp = new RegExp(`^${name}`, 'i');

        books.forEach((book, index) => {
            console.log(regExp)
            console.log(name)
            console.log(book)
            console.log(book.match(regExp))

            if (!book.match(regExp)) {
                const bookElement = booksElements[index];

                bookElement.style.display = 'none';
            }
            else {
                const bookElement = booksElements[index];

                bookElement.style.display = 'flex';
            }
        })
    }
}

input.addEventListener('input', (event) => {
    const name = event.target.value;

    searchBooksByName(name)
})