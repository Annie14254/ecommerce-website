const Genre = require("./Genre");
const User = require("./User");
const Book = require("./Book");
const BookGenre = require("./BookGenre");
const OwnedBooks = require("./OwnedBooks")

Book.hasOne(Genre, {
  foreignKey: "genre_id",
});

Book.belongsTo(Genre, {
  foreignKey: "genre_id",
});

/* Genre.hasMany(Book, {
  foreignKey: "book_id",
}); */

Genre.hasMany(Book, {
  foreignKey: "genre_id",
  onDelete: "CASCADE",
});

Book.belongsToMany(User, {
  through: OwnedBooks
})

User.belongsToMany(Book, {
  through: OwnedBooks
})

module.exports = {
  Genre,
  User,
  Book,
  BookGenre,
  OwnedBooks
};