'use strict'
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project2");

module.exports.Note = require("./note.js");
module.exports.User = require("./user.js");
