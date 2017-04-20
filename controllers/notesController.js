'use strict'
let db = require('../models');

console.log('In notesController');

// INDEX
const getNotes = function(req, res) {
	console.log('IN GETNOTES X');
	db.Note.find({}, function(err, notes) {
		res.json(notes);
	});
};

const getNotesByCategory = function(req, res) {
	console.log('In getNotesByCategory');
	db.Note.find({category: greeting}, {skip: 0, limit: 1},
		function(err, notes) {
			res.json(notes)
		}
	);
};
// SHOW
const showNote = function(req, res) {
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

// UPDATE
const updateNote = function(req, res) {
	console.log('In updateNote');
	let noteId = req.params._id;
	db.Note.findById((noteId), function (err, note) {
		note.title = req.body.title;
		note.content =req.body.content;
		note.rating = req.body.rating;
		console.log('note' + JSON.stringify(note));
		note.save(function(err) {
			if (err) {res.send(err);}
			res.json({note});
		});
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
	getNotesByCategory: getNotesByCategory,
	showNote: showNote,
	createNote: createNote,
	updateNote: updateNote,
	destroyNote: destroyNote,
};
