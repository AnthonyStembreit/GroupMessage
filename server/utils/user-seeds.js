const { User } = require('../models');

const userData = [
  {
    name: 'andybvb',
    email: 'andybvb@gmail.com',
    password: "hello69!",
  },
  {
    name: 'Gee',
    email: 'gee@gmail.com',
    password: "hello69!",
  },
  {
    name: 'test',
    email: 'test@gmail.com',
    password: "hello69!",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;