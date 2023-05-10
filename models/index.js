const User = require('./User')
const Book = require('./Book');
const Genre = require('./Genre')
const BookGenre = require('./BookGenre')


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

Genre.belongsToMany(Book, {
    through: BookGenre
})

module.exports = {
    User,
    Book,
    Genre,
    BookGenre,
  };