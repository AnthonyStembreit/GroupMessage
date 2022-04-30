const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');

class UserConversation extends Model {}

UserConversation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    conversation_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Conversation',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserConversation'
  }
);

module.exports = UserConversation;