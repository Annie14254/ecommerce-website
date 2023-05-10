const { User } = require('../models');

const userData = [
  {
    name: "test",
    email: "test@example.com",
    password: "asdf"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

  