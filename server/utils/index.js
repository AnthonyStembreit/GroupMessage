const seedMessages = require('./message-seeds');
const seedUsers = require('./user-seeds');
const seedConversations = require('./conversation-seeds');
const seedUserConversastions = require('./userconversation-seeds');

const sequelize = require('../config/connection/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedConversations();
  console.log('\n----- CONVERSATIONS SEEDED -----\n');

  await seedMessages();
  console.log('\n----- MESSAGES SEEDED -----\n');

  await seedUserConversastions();
  console.log('\n----- USER CONVERSATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();