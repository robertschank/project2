'use strict'
const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project2");

module.exports.Note = require("./note.js");
module.exports.User = require("./user.js");
