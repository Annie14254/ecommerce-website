const { Cart } = require("../models");

const cartData = [
  {
    user_id: 2,
    book_id: 20,
  },
];

const seedCart = () => Cart.bulkCreate(cartData);

module.exports = seedCart;
