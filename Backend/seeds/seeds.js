const { User } = require("../Models/index");
const db = require("../config/connection");
const UserData = [
  {
    name: "Bemnet Dejene",
    email: "bemnet_35@hotmail.com",
    phone: "12345678",
    password: "Password",
  },

  {
    name: "Teddy Dejene",
    email: "teddy@hotmail.com",
    phone: "12345678",
    password: "Password1",
  },
];

User.bulkCreate(UserData);
