const { User, WorkLocation, Inbox, MessageThread } = require("../Models/index");
const sequelize = require("../config/connection");
const UserData = require("./userData");
const locationData = require("./workLocations");
const MessageData = require("./messageThreadData");
const InboxData = require("./inboxData");
const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(UserData);
  await WorkLocation.bulkCreate(locationData);
  await Inbox.bulkCreate(InboxData);
  await MessageThread.bulkCreate(MessageData);
  console.log("success seeding database");

  process.exit(0);
};

seedDatabase();
