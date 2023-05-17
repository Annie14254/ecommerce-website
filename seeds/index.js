const sequelize = require("../config/connection");
const seedCart = require("./cartseeds");
const seedUsers = require("./userSeeds");
const seedBooks = require("./bookSeeds");
const seedGenres = require("./genreSeeds");
/* const seedOwnedBooks = require("./ownedBookseeds"); */

const { Cart } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedGenres();
  await seedBooks();
  //await seedCart();
  //await seedOwnedBooks();

  await Cart.create(
    {
      user_id: 2,
      book_id: 20,
    },
    {
      fields: ["user_id", "book_id"],
    }
  );

  process.exit(0);
};

seedAll();

// USE FORMAT SIMILAR TO BELOW TO IMPORT BULKCREATE() OF BOOKS/GENRES/USERS/ETC

// const seedCategories = require('./category-seeds');
// const seedProducts = require('./product-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

// const sequelize = require('../config/connection');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');
//   await seedCategories();
//   console.log('\n----- CATEGORIES SEEDED -----\n');

//   await seedProducts();
//   console.log('\n----- PRODUCTS SEEDED -----\n');

//   await seedTags();
//   console.log('\n----- TAGS SEEDED -----\n');

//   await seedProductTags();
//   console.log('\n----- PRODUCT TAGS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();
