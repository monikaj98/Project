var express = require("express");
var app = express();
var nodemailer = require("nodemailer");
var port = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");

app.use(cors());

// this is our MongoDB database
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// connects our back end code with the database
mongoose.connect("mongodb://localhost:27017/node-demo", { useNewUrlParser: true });

let db = mongoose.connection;

// gives the message as database is opened
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// launch our backend into a port
app.listen(port, () => {
    console.log("Server listening on port " + port);
});