const {
  User,
  WorkLocation,
  WorkImage,
  Inbox,
  MessageThread,
} = require("../Models/index");

const sequelize = require("../config/connection");

const UserData = require("./userData");
const LocationData = require("./workLocations");
const ImageData = require("./workImages");
const MessageData = require("./messageThreadData");
const InboxData = require("./inboxData");

const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(UserData);
  await WorkLocation.bulkCreate(LocationData);
  await WorkImage.bulkCreate(ImageData);
  await Inbox.bulkCreate(InboxData);
  await MessageThread.bulkCreate(MessageData);
  console.log("success seeding database");

  process.exit(0);
};

seedDatabase();
