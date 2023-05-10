const Book = require('./Book');
const Genre = require('./Genre')
const BookGenre = require('./BookGenre')


Book.belongsTo(Genre, {
    foreignKey: "genre_id"
})