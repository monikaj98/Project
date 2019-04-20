// /backend/data.js
var mongoose = require("mongoose");

// this will be our data base's data structure
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", nameSchema)