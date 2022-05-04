const { Conversation } = require('../models');

const conversationData = [
    {
        // users: '1, 2',
        createdAt: Date.now()
    },
    {
        // users: '1, 2, 3',
        createdAt: Date.now()
    },
];

const seedConversations = () => Conversation.bulkCreate(conversationData);

module.exports = seedConversations;