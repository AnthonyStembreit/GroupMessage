const { UserConversation } = require('../models');

const userConversationData = [
    {
        UserId: 1,
        ConversationId: 1
    },
    {
        UserId: 2,
        ConversationId: 1
    },
    {
        UserId: 1,
        ConversationId: 2
    },
    {
        UserId: 2,
        ConversationId: 2
    },
    {
        UserId: 3,
        ConversationId: 2
    },
];

const seedUserConversations = () => UserConversation.bulkCreate(userConversationData);

module.exports = seedUserConversations;