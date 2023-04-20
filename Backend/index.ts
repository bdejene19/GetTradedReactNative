import { require } from "./Globals/GlobalDeclarations";

require('dotenv').config();

const sequelize = require('./config/connection');
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

sequelize.sync({ force: false }).then(() => {
    app.listen(port,() => {
        console.log('server running on port: ', port)
    })
})