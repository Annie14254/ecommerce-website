const { User } = require("../models");

const userData = [
  {
    name: "test",
    email: "test@gmail.com",
    password: "asdfafeasfsf",
  },
  {
    name: "test2",
    email: "test2@gmail.com",
    password: "asdfaesfasfa",
  },
  {
    name: "test3",
    email: "test3@gmail.com",
    password: "asdffasfasefaes",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
