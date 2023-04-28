const { User } = require("../Models/index");
const sequelize = require("../config/connection");
const UserData = require("./userData");
const LocationData = require("");

const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(UserData);
  console.log("success seeding database");

  process.exit(0);
};

seedDatabase();
