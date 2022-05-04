const { UserConversation } = require('../models');

const userConversationData = [
    {
        user_id: 1,
        conversation_id: 1
    },
    {
        user_id: 2,
        conversation_id: 1
    },
    {
        user_id: 1,
        conversation_id: 2
    },
    {
        user_id: 2,
        conversation_id: 2
    },
    {
        user_id: 3,
        conversation_id: 2
    },
];

const seedUserConversations = () => UserConversation.bulkCreate(userConversationData);

module.exports = seedUserConversations;