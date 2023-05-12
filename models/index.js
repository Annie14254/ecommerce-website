const User = require('./User')
const Book = require('./Book');
const Genre = require('./Genre')
const BookGenre = require('./BookGenre')
const OwnedBooks = require('./OwnedBooks')


Book.belongsTo(Genre, {
    foreignKey: "genre_id"
})

Book.hasOne(Genre, {
    foreignKey: "genre_id"
})

Genre.hasMany(Book, {
    foreignKey: "genre_id",
    onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)

Book.belongsToMany(User, {
    through: OwnedBooks
  })
  
  // Tags belongToMany Products (through ProductTag)
  
  User.belongsToMany(Book, {
    through: OwnedBooks
  })

module.exports = {
    User,
    Book,
    Genre,
    BookGenre,
    OwnedBooks,
  };