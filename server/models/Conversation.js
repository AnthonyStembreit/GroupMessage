const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');
class Conversation extends Model { }
Conversation.init({
    name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Conversation',
})
module.exports = Conversation