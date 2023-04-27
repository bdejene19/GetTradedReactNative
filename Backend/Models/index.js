const User = require("./User");
const WorkLocation = require("./WorkLocation");
const WorkImage = require("./WorkImage");
const Inbox = require("./Inbox");
const MessageThread = require("./MessageThread");

/** User to Work Location relationship - one to many */
User.hasMany(WorkLocation, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

WorkLocation.belongsTo(User, {
  foreignKey: "id",
});

/** User to Work Image relationship - one to many */
User.hasMany(WorkImage, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

WorkImage.belongsTo(User, {
  foreignKey: "id",
});

/** User to inbox relationship - one to one*/
User.hasOne(Inbox, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Inbox.belongsTo(User, {
  foreignKey: "id",
});

/** Inbox to MessageThread relationship - one to many */
Inbox.hasMany(MessageThread, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

MessageThread.belongsTo(Inbox, {
  foreignKey: "id",
});

module.exports = {
  User,
  WorkLocation,
  Inbox,
  MessageThread,
};
