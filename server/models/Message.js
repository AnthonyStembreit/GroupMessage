const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');
class Message extends Model { }
Message.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Message'
})
module.exports = Message