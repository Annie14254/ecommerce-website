const Genre = require("./Genre");
const User = require("./User");
const Book = require("./Book");
/* const BookGenre = require("./BookGenre");
const OwnedBooks = require("./OwnedBooks"); */
const Cart = require("./Cart");

/* Book.hasOne(Genre, {
  foreignKey: "genre_id",
});
 */
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

/* Book.belongsToMany(User, {
  through: OwnedBooks,
});
 */
/* User.belongsToMany(Book, {
  through: OwnedBooks,
}); */

// Cart
/* User.hasOne(Cart, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
}); */

/* Cart.belongsTo(User, {
  foreignKey: "user_id",
});

Cart.hasMany(Book, {
  foreignKey: "cart_id",
}); */

// ?????
Book.belongsToMany(User, {
  through: {
    model: Cart,
    unique: false,
  },
  as: "books_in_cart",
});

User.belongsToMany(Book, {
  through: {
    model: Cart,
    unique: false,
  },
  as: "carts_with_books",
});

module.exports = {
  Genre,
  User,
  Book,
  /*   BookGenre,
  OwnedBooks, */
  Cart,
};
