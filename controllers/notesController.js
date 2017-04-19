'use strict'
let db = require('../models');

// Get all those notes!
let getNotes = function(req, res) {
	console.log('IN GETNOTES');
	db.Note.find({}, function(err, notes) {
		res.json(notes);
	});
};

module.exports = {
	getNotes: getNotes,
};
