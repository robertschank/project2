'use strict'
let db = require('../models');

// INDEX
const getNotes = function(req, res) {
	console.log('IN GETNOTES X');
	db.Note.find({}, function(err, notes) {
		res.json(notes);
	});
};
// SHOW
const getNoteById = function(req, res) {
	console.log('In getNoteById');
	let noteId = req.params._id;
	db.Note.findById((noteId), function (err, note) {
		res.json(note);
	});
};

// CREATE
const createNote = function(req, res) {
	console.log('IN createNote');
	console.log('req.body' + req.body);
	db.Note.create({
		title: req.body.title,
		content: req.body.content,
		rating: req.body.rating,
	}, function (err, note) {
		console.log('in anonfumc!');
		res.json(note);	
	});
};


// DESTROY
const destroyNote = function(req, res) {
	console.log('In destroyNote');
	let noteId = req.params._id;
	db.Note.findOneAndRemove({ _id: noteId }, function (err, deletedNote) {
		res.json(deletedNote);
	});
};

module.exports = {
	getNotes: getNotes,
	getNoteById: getNoteById,
	createNote: createNote,
	destroyNote: destroyNote,
};
