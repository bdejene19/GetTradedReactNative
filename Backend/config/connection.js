const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_ACCESS,
  process.env.DB_SECURE,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
console.log("hi");
module.exports = sequelize;
