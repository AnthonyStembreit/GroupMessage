const User = require('./User');
const ResetToken = require("./ResetToken");
const Message = require("./Message");
const Conversation = require("./Conversation");
const UserConversation = require("./UserConversation")

User.hasMany(UserConversation);
UserConversation.belongsTo(User);

Conversation.hasMany(UserConversation);
UserConversation.belongsTo(Conversation);

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

User.hasMany(Message);
Message.belongsTo(User);


module.exports = { User, ResetToken, Conversation, Message, UserConversation }