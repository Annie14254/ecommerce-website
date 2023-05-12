const Genre = require("./Genre");
const User = require("./User");
const Book = require("./Book");
const BookGenre = require("./BookGenre");

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

module.exports = {
  Genre,
  User,
  Book,
  BookGenre,
};
