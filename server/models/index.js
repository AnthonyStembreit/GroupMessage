const User = require('./User');
const ResetToken = require("./ResetToken");
const Message = require("./Message");
const Conversation = require("./Conversation");
const UserConversation = require("./UserConversation")

// User.hasMany(UserConversation);
// UserConversation.belongsTo(User);

// Conversation.hasMany(UserConversation);
// UserConversation.belongsTo(Conversation);

// Conversation.hasMany(Message);
// Message.belongsTo(Conversation);

// User.hasMany(Message);
// Message.belongsTo(User);
Conversation.hasMany(Message);
Message.belongsTo(Conversation);
User.hasMany(Message);
Message.belongsTo(User);

User.belongsToMany(Conversation, {
    through: UserConversation,
    foreignKey: 'user_id'
})
Conversation.belongsToMany(User, {
    through: UserConversation,
    foreignKey: 'conversation_id'
})
module.exports = { User, ResetToken, Conversation, Message, UserConversation }