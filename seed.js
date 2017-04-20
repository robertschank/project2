let db = require('./models');

let seedNotes = [
	{
		title: "",
		category: "greeting",
		content: "Attention Campers, ",
		rating: 2,
	},
	{
		title: "Get outta hur",
		category: "deflectResponsibility",
		content: "Given the current president, that makes me uncomfortable.",
		rating: 2,
	},
		{
		title: "",
		category: "deflectResponsibility",
		content: "With additional parties involved, yes.",
		rating: 2,
	},
			{
		title: "",
		category: "farewell",
		content: "Don't forget about me",
		rating: 2,
	},
	{
		title: "",
		category: "farewell",
		content: "Ok, have a nice life!",
		rating: 2,
	},
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
