import { Model, DataTypes, UUIDV4 } from 'sequelize';
const sequelize = require('../config/connection')

class Inbox extends Model {};

Inbox.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
},  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inbox',
    }   
)

module.exports = Inbox;