import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { require } from '../Globals/GlobalDeclarations';

const sequelize = require('../config/connection')
const User = require('./User');
class MessageThread extends Model {};

MessageThread.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    inbox_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'inbox',
            key: 'id',
        }
    },
    chatUser_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        }
    }, 
    messages: {
        type: DataTypes.ABSTRACT
    }
},  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'message_thread',
    }   
)

export default MessageThread;