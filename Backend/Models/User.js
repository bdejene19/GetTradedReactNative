const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: async (newUser) => {
        try {
          newUser.password = await bcrypt.hash(newUser.password, 10);
        } catch (e) {
          console.log("error creating user while hashing password: ", e);
        }
      },
      beforeUpdate: async (user) => {
        try {
          if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        } catch (e) {
          console.log("error creating user while hashing password: ", e);
        }
      },
    },
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
