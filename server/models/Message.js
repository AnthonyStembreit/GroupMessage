const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');
class Message extends Model { }
Message.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false
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
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Message'
})
module.exports = Message