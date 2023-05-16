const descApiEl = document.querySelector('.book-description2')
const book_title = document.querySelector('.book-description').id
const book_isbn = document.querySelector('.book-description2').id

function getAPI(){

    const descURL = `https://www.googleapis.com/books/v1/volumes?q=${book_title}+isbn:${book_isbn}&key=AIzaSyCQKp7cI96YvpwHlqMiSkkhOYuawKiEslk`

    fetch(descURL)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then (function(data){
        console.log(data)
        var description = document.createElement('p')
        description.innerHTML = data.items[0].searchInfo.textSnippet

        descApiEl.appendChild(description)
    })
}


getAPI();

// API Key: Google Books
// AIzaSyCQKp7cI96YvpwHlqMiSkkhOYuawKiEslk