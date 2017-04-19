'use strict'
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoteSchema = new Schema({
	title: String,
	content: String,
	rating: Number,
});

let Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
