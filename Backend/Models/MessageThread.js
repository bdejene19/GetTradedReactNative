const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
class MessageThread extends Model {}

MessageThread.init(
  {
    thread_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    inbox_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "inbox",
        key: "inbox_id",
      },
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
    modelName: "message_thread",
  }
);

module.exports = MessageThread;
