let db = require('./models');

let seedNotes = [
	{
		title: "who cares",
		content: "With other parties involved, yes.",
		rating: 2
	},
		{
		title: "Get outta hur",
		content: "Given the current president, that makes me uncomfortable.",
		rating: 2
	}
];

db.Note.remove({}, function(err, notes) {
	console.log('removed all notes in the name of SEED.');
	db.Note.create(seedNotes, function(err, notes) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('seeded notes.');
	});
});