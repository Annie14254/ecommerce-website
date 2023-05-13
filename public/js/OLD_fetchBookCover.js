const seedBooks = [
  {
    book_name: "The Catcher in the Rye",
    author: "Jerome David Salinger",
    price: 30.00,
    stock: 12,
    genre_id: 1,
  },
  {
    book_name: "The Sun Also Rises",
    author: "Ernest Hemingway",
    price: 25.50,
    stock: 38,
    genre_id: 1,
  },
  {
    book_name: "Pride and Prejudice",
    author: "Jane Austen",
    price: 12.50,
    stock: 15,
    genre_id: 1,
  },
  {
    book_name: "War and Peace",
    author: "Leo Tolstoy",
    price: 17.00,
    stock: 23,
    genre_id: 1,
  },
  {
    book_name: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 19.50,
    stock: 43,
    genre_id: 1,
  },
  {
    book_name: "Moby Dick",
    author: "Herman Melville",
    price: 17.99,
    stock: 9,
    genre_id: 1,
  },
  {
    book_name: "Adventures of Huckleberry Finn",
    author: "Mark Twain",
    price: 10.49,
    stock: 6,
    genre_id: 1,
  },
  {
    book_name: "Brave New World",
    author: "Aldous Huxley",
    price: 13.99,
    stock: 50,
    genre_id: 1,
  },
  {
    book_name: "Oliver Twist",
    author: "Charles Dickens",
    price: 14.99,
    stock: 13,
    genre_id: 1,
  },
  {
    book_name: "Frankenstein",
    author: "Mary Shelley",
    price: 18.95,
    stock: 9,
    genre_id: 1,
  },
  {
    book_name: "Dune",
    author: "Frank Herbert",
    price: 14.99,
    stock: 12,
    genre_id: 2,
  },
  {
    book_name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    price: 12.99,
    stock: 14,
    genre_id: 2,
  },
  {
    book_name: "The Martian",
    author: "Andy Weir",
    price: 15.00,
    stock: 9,
    genre_id: 2,
  },
  {
    book_name: "Neuromancer",
    author: "William Gibson",
    price: 9.99,
    stock: 10,
    genre_id: 2,
  },
  {
    book_name: "Jurassic Park",
    author: "Michael Crichton",
    price: 15.50,
    stock: 7,
    genre_id: 2,
  },
  {
    book_name: "Slaughterhouse-Five",
    author: "Kurt Vonnegut Jr",
    price: 18.75,
    stock: 4,
    genre_id: 2,
  },
  {
    book_name: "Do Androids Dream of Electric Sheep?",
    author: "Phillip K Dick",
    price: 15.00,
    stock: 9,
    genre_id: 2,
  },
  {
    book_name: "The Time Machine",
    author: "H.G. Wells",
    price: 9.50,
    stock: 5,
    genre_id: 2,
  },
  {
    book_name: "The War of the Worlds",
    author: "H.G. Wells",
    price: 10.75,
    stock: 8,
    genre_id: 2,
  },
  {
    book_name: "Ender's Game",
    author: "Orson Scott Card",
    price: 9.75,
    stock: 10,
    genre_id: 2,
  },
  {
    book_name: "The Guns of August",
    author: "Barbara W. Tuchman",
    "price": 34.99,
    "stock": 10,
    "genre_id": 3
  },
  {
    book_name: "The Crusades Through Arab Eyes",
    author: "Amin Maalouf",
    price: 29.99,
    stock: 15,
    genre_id: 3
  },
  {
    book_name: "SPQR: A History of Ancient Rome",
    author: "Mary Beard",
    price: 24.99,
    stock: 8,
    genre_id: 3
  },
  {
    book_name: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    "price": 21.99,
    stock: 12,
    genre_id: 3
  },
  {
    book_name: "The Silk Roads: A New History of the World",
    author: "Peter Frankopan",
    price: 27.99,
    stock: 7,
    genre_id: 3
  },
  {
    book_name: "1491: New Revelations of the Americas Before Columbus",
    author: "Charles C. Mann",
    price: 18.99,
    stock: 6,
    genre_id: 3
  },
  {
    book_name: "Guns, Germs, and Steel: The Fates of Human Societies",
    author: "Jared Diamond",
    price: 26.99,
    stock: 11,
    genre_id: 3
  },
  {
    book_name: "The Wright Brothers",
    author: "David McCullough",
    price: 23.99,
    stock: 13,
    genre_id: 3
  },
  {
    book_name: "The Age of Extremes: A History of the World, 1914-1991",
    author: "Eric Hobsbawm",
    price: 29.99,
    stock: 9,
    genre_id: 3
  },
  {
    book_name: "Steve Jobs",
    author: "Walter Isaacson",
    price: 34.99,
    stock: 10,
    genre_id: 4
  },
  {
    book_name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
    author: "Laura Hillenbrand",
    price: 29.99,
    stock: 15,
    genre_id: 4
  },
  {
    book_name: "Long Walk to Freedom",
    author: "Nelson Mandela",
    price: 24.99,
    stock: 8,
    genre_id: 4
  },
  {
    book_name: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    price: 21.99,
    stock: 12,
    genre_id: 4
  },
  {
    book_name: "The Diary of a Young Girl",
    author: "Anne Frank",
    price: 27.99,
    stock: 7,
    genre_id: 4
  },
  {
    book_name: "The Autobiography of Malcolm X",
    author: "Malcolm X, Alex Haley",
    price: 18.99,
    stock: 6,
    genre_id: 4
  },
  {
    book_name: "A Beautiful Mind",
    author: "Sylvia Nasar",
    price: 26.99,
    stock: 11,
    genre_id: 4
  },
  {
    book_name: "Becoming",
    author: "Michelle Obama",
    price: 23.99,
    stock: 13,
    genre_id: 4
  },
  {
    book_name: "The Last Black Unicorn",
    author: "Tiffany Haddish",
    price: 29.99,
    stock: 9,
    genre_id: 4
  },
  {
    book_name: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
    price: 31.99,
    stock: 10,
    genre_id: 4
  }
];

// console.log(seedBooks.length);

// console.log(seedBooks[0].book_name);
// console.log(seedBooks[0].author);

function bookCovers() {
  const uri = "https://api.bookcover.longitood.com/bookcover?book_title=";
  const uri2 = "&author_name="

  let newObj = seedBooks.map(item => ({ ...item }));

  for (i = 0; i < seedBooks.length; i++) {
    let title = seedBooks[i].book_name.split(' ').join('+');
    let author = seedBooks[i].author.split(' ').join('+');

    let path = uri + title + uri2 + author
    // console.log(path);
    newObj[i].coverURL = path
  }

  getCover(newObj);
  // console.log(newObj);
}


async function getCover(newObj) {
  const options = { method: 'GET' };
  let finalList = newObj.map(item => ({ ...item }));

  for (i = 0; i < newObj.length; i++) {
    let url = newObj[i].coverURL

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // process the API response
      // finalList[i].coverURL = response;
    } catch (error) {
      console.error(error);
    }
  }
  // console.log(finalList);
}


// function OLDgetCover(newObj) {
//   const options = { method: 'GET' };
//   let finalList = newObj.map(item => ({ ...item }));

//   for (i = 0; i < newObj.length; i++) {
//     let url = newObj[i].coverURL

//     fetch(url, options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
//     // finalList[i].coverURL = response;
//   }
//   console.log(finalList);
// }

bookCovers();