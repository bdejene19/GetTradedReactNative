const User = require("./User");
const WorkLocation = require("./WorkLocation");
const WorkImage = require("./WorkImage");
const Inbox = require("./Inbox");
const MessageThread = require("./MessageThread");
const ChatMessage = require("./ChatMessage");

/** User to Work Location relationship - one to many */
User.hasMany(WorkLocation, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

WorkLocation.belongsTo(User, {
  foreignKey: "user_id",
});

/** User to Work Image relationship - one to many */
User.hasMany(WorkImage, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

WorkImage.belongsTo(User, {
  foreignKey: "user_id",
});

/** User to inbox relationship - one to one*/
User.hasOne(Inbox, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

/** Inbox to MessageThread relationship - one to many */
Inbox.hasMany(MessageThread, {
  foreignKey: "inbox_id",
  onDelete: "CASCADE",
});
User.hasMany(MessageThread, {
  foreignKey: "user_id",
});

MessageThread.belongsTo(User, {
  foreignKey: "user_id",
});
MessageThread.belongsToMany(Inbox, {
  through: "user_id",
  foreignKey: "inbox_id",
});

/** MessageThread to Messages relationship => one to many */
MessageThread.hasMany(ChatMessage, {
  foreignKey: "thread_id",
  onDelete: "CASCADE",
});

ChatMessage.belongsTo(MessageThread, {
  foreignKey: "thread_id",
});

User.hasMany(ChatMessage, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

ChatMessage.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = {
  User,
  WorkLocation,
  WorkImage,
  Inbox,
  MessageThread,
  ChatMessage,
};
