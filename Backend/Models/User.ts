import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { require } from '../Globals/GlobalDeclarations';
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt');

class User extends Model {
    id: number;
    name: string;
    password: string;
    createDate: Date;
};    

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 5],
        }

    },
    createDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    }
}, {    
    sequelize,
    hooks: {
        beforeCreate: async (newUser) => {
            try {
                newUser.password = await bcrypt.hash(newUser.password, 10);
            } catch(e) {
                console.log('error creating user while hashing password: ', e);
            }
        },
        beforeUpdate: async (user) => {
                try {
                    if (user.changed('password')) {
                        user.password = await bcrypt.hash(user.password, 10);
                    }
                } catch(e) {
                    console.log('error creating user while hashing password: ', e);
                }
            }
         


    },
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
})

export default User;