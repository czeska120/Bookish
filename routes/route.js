const express = require("express");
const app = express();

const bookishController = require('../controller/bookishController.js');

app.get("/", bookishController.getLanding);

module.exports = app;