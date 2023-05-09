const {
  User,
  WorkLocation,
  WorkImage,
  Inbox,
  JobPost,
  MessageThread,
  ChatMessage,
} = require("../Models/index");

const sequelize = require("../config/connection");

const UserData = require("./userData");
const LocationData = require("./workLocations");
const ImageData = require("./workImages");
const MessageData = require("./messageThreadData");
const InboxData = require("./inboxData");
const ChatData = require("./chatMessageData");
const JobPostData = require("./jobPostData");
const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(UserData);
  await WorkLocation.bulkCreate(LocationData);
  await WorkImage.bulkCreate(ImageData);
  await Inbox.bulkCreate(InboxData);
  await JobPost.bulkCreate(JobPostData);
  await MessageThread.bulkCreate(MessageData);
  await ChatMessage.bulkCreate(ChatData);
  console.log("success seeding database");

  process.exit(0);
};

seedDatabase();
