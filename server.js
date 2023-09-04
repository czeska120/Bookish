const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const route = require("./routes/route.js")
app.use('/', route);

app.listen(3000, function () {
    console.log("Server started on port 3000");
});