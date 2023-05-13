
const genreAddHandler = async function(event) {
    event.preventDefault();

    const genre_name = document.querySelector('#genre-name-input').value

    if(genre_name) {
        await fetch('/api/genre', {
            method: 'POST',
            body: JSON.stringify({
                genre_name
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}


document
  .querySelector('#new-genre-form')
  .addEventListener('submit', genreAddHandler);