

const bookAddHandler = async function(event) {
    event.preventDefault();

    const book_name = document.querySelector('#book-title-input').value
    const genre_id = document.querySelector('[name="genre"]:checked').value
    const author = document.querySelector('#author-input').value
    const price = document.querySelector('#price-input').value
    const isbn = document.querySelector('#ISBN-input').value
    const stock = document.querySelector('#stock-input').value

    // let genre_id 
    // genreButtons.forEach( genre => {
    //     //console.log(genre)
    //     if( genre.getAttribute("checked") ){
    //         console.log(genre)
    //     }
    // })

    console.log(book_name, genre_id, price)

    if(book_name && genre_id && price && author && isbn && stock) {
        await fetch('/api/books', {
            method: 'POST',
            body: JSON.stringify({
                author,
                book_name,
                price,
                stock,
                isbn,
                genre_id
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