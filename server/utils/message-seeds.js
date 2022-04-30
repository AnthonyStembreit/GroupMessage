const { Message } = require('../models');

const messageData = [
  {
    body: 'Hello',
    UserId: 1,
    ConversationId: 1,
    createdAt: Date.now() //look up how to change these times
  },
  {
    body: 'How are you?',
    UserId: 1,
    ConversationId: 1,
  },
  {
    body: "I'm doing well",
    UserId: 2,
    ConversationId: 1,
  },
  {
    body: "Let's go somewhere",
    UserId: 2,
    ConversationId: 2,
  },
  {
    body: 'Sure, why not?',
    UserId: 1,
    ConversationId: 2,

  },
  {
    UserId: 3,
    ConversationId: 2,
    body: 'Yay!',
  },
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;