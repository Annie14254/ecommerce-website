

const bookAddHandler = async function(event) {
    event.preventDefault();

    const book_name = document.querySelector('#book-title-input').value
    const bookGenre = document.querySelector('#genre-selector-input').value
    const author = document.querySelector('#author-input').value
    const price = document.querySelector('#price-input').value
    const isbn = document.querySelector('#ISBN-input').value
    // label for stock would be for example "how many of this book would you like to list?"
    const stock = document.querySelector('#stock-input')

    if(book_name && bookGenre && price && author && isbn && stock) {
        await fetch('/api/book', {
            method: 'POST',
            body: JSON.stringify({
                author,
                book_name,
                price,
                stock,
                isbn
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}


document
  .querySelector('#new-book-form')
  .addEventListener('submit', bookAddHandler);