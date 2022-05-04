# GroupMessage

Back-end application to experiment with database structure for group messaging base on [this](https://dev.to/yuesu/a-simple-database-modelling-for-a-web-based-messenger-with-sequelize-and-postgresdb-ch8) set up.

Changed the relationships between Conversation, User, and UserConversation to use .belongsToMany().

`User.belongsToMany(Conversation, {
    through: UserConversation,
    foreignKey: 'user_id'
})`


`Conversation.belongsToMany(User, {
    through: UserConversation,
    foreignKey: 'conversation_id'
})`

This simplifies the data and db calls.
