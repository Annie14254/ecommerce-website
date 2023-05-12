const { User } = require('../models');

const userData = [
  {
    name: "test",
    email: "test@example.com",
    password: "asdf"
  },
  {
    name: "test2",
    email: "test2@example.com",
    password: "asdf"
  },
  {
    name: "test3",
    email: "test3@example.com",
    password: "asdf"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

  