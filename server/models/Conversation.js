const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');
class Conversation extends Model { }
Conversation.init({
    users: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Conversation',
})
module.exports = Conversation