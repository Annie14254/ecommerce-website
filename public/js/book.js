

const bookAddHandler = async function(event) {
    event.preventDefault();

    const bookTitle = document.querySelector('#book-title-input')
    const bookGenre = document.querySelector('#genre-selector-input')
    const bookDescription = document.querySelector('#description-input')
    const bookPrice = document.querySelector('#price-input')
    // label for stock would be for example "how many of this book would you like to list?"
    const bookStock = document.querySelector('#stock-input')

    if(bookTitle && bookGenre && bookPrice && bookStock) {
        await fetch('/api/book', {
            method: 'POST',
            body: JSON.stringify({
                bookTitle,
                bookGenre,
                bookDescription,
                bookPrice,
                bookStock
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