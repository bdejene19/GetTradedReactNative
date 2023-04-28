require("dotenv").config();

const sequelize = require("./config/connection");
const express = require("express");
const app = express();
const allRoutes = require("./Routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRoutes);
const port = process.env.PORT || 8000;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("server running on port: ", port);
  });
});
