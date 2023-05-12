const { OwnedBooks } = require('../models');

const ownedBookData = [
  {
    book_id: 1,
    genre_id: 1,
    user_id: 1
  },
  {
    book_id: 2,
    genre_id: 1,
  },
  {
    book_id: 3,
    genre_id: 1,
    user_id: 2
  },
  {
    book_id: 4,
    genre_id: 1,
    
  },
  {
    book_id: 5,
    genre_id: 1,
    
  },
  {
    book_id: 6,
    genre_id: 1,
    
  },
  {
    book_id: 7,
    genre_id: 1,
    
  },
  {
    book_id: 8,
    genre_id: 1,
    
  },
  {
    book_id: 9,
    genre_id: 1,
    
  },
  {
    book_id: 10,
    genre_id: 1,
    user_id: 2
  },
  {
    book_id: 11,
    genre_id: 2,
  },
  {
    book_id: 12,
    genre_id: 2,
    
  },
  {
    book_id: 13,
    genre_id: 2,
    
  },
  {
    book_id: 14,
    genre_id: 2,
    
  },
  {
    book_id: 15,
    genre_id: 2,
    user_id: 1
  },
  {
    book_id: 16,
    genre_id: 2,
    user_id: 2
  },
  {
    book_id: 17,
    genre_id: 2,
  },
  {
    book_id: 18,
    genre_id: 2,
  },
  {
    book_id: 19,
    genre_id: 2,
  },
  {
    book_id: 20,
    genre_id: 2,
  },
  {
    book_id: 21,
    genre_id: 3,
  },
  {
    book_id: 22,
    genre_id: 3,
  },
  {
    book_id: 23,
    genre_id: 3,
  },
  {
    book_id: 24,
    genre_id: 3,
  },
  {
    book_id: 25,
    genre_id: 3,
    user_id: 1
  },
  {
    book_id: 26,
    genre_id: 3,
    user_id: 3
  },
  {
    book_id: 27,
    genre_id: 3,
  },
  {
    book_id: 28,
    genre_id: 3,
  },
  {
    book_id: 29,
    genre_id: 3,
    user_id: 2
  },
  {
    book_id: 30,
    genre_id: 3,
    user_id: 3
  },
  {
    book_id: 31,
    genre_id: 4,
  },
  {
    book_id: 32,
    genre_id: 4,
  },
  {
    book_id: 33,
    genre_id: 4,
  },
  {
    book_id: 34,
    genre_id: 4,
  },
  {
    book_id: 35,
    genre_id: 4,
  },
  {
    book_id: 36,
    genre_id: 4,
  },
  {
    book_id: 37,
    genre_id: 4,
  },
  {
    book_id: 38,
    genre_id: 4,
    user_id: 1
  },
  {
    book_id: 39,
    genre_id: 4,
    user_id: 2
  },
];

const seedOwnedBooks = () => OwnedBooks.bulkCreate(ownedBookData);

module.exports = seedOwnedBooks;
