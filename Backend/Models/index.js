const User = require("./User");
const WorkLocation = require("./WorkLocation");
const WorkImage = require("./WorkImage");
const Inbox = require("./Inbox");
const MessageThread = require("./MessageThread");

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

Inbox.belongsTo(User, {
  foreignKey: "user_id",
});

/** Inbox to MessageThread relationship - one to many */
Inbox.hasMany(MessageThread, {
  foreignKey: "inbox_id",
  onDelete: "CASCADE",
});

MessageThread.belongsTo(Inbox, {
  foreignKey: "inbox_id",
});

module.exports = {
  User,
  WorkLocation,
  Inbox,
  MessageThread,
};
