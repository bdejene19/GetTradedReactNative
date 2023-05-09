const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ChatMessage extends Model {}

ChatMessage.init(
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    thread_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "message_thread",
        key: "thread_id",
      },
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "user_id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: true,
    freezeTableName: true,
    underscored: true,
    modelName: "chat_message",
  }
);

module.exports = ChatMessage;
