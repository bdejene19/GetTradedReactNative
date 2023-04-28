const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Inbox extends Model {}

Inbox.init(
  {
    inbox_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "inbox",
  }
);

module.exports = Inbox;
