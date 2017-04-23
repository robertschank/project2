let db = require('./models');

let seedNotes = [
	{
		title: "",
		category: "greeting",
		content: "Attention Campers, ",
		rating: 2,
	},
	{
		title: "",
		category: "deflectResponsibility",
		content: "Given the current president, that makes me uncomfortable.",
		rating: 2,
	},
		{
		title: "",
		category: "deflectResponsibility",
		content: "I wouldn't think so.",
		rating: 2,
	},
		{
		title: "",
		category: "deflectResponsibility",
		content: "With additional parties involved, ",
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
		content: "Ok, have a nice life.",
		rating: 2,
	},
	{
		title: "",
		category: "greeting",
		content: "What's up Chuck?",
		rating: 2,
	},
	{
		title: "",
		category: "deflectResponsibility",
		content: "Thats an idea, ",
		rating: 2,
	},
		{
		title: "",
		category: "farewell",
		content: "Sayonara suckers, ",
		rating: 2,
	},
		{
		title: "",
		category: "farewell",
		content: "Peace be with you, ",
		rating: 2,
	},
		{
		title: "",
		category: "soundsGood",
		content: "Word to big bird.",
		rating: 2,
	},
	{
		title: "",
		category: "soundsGood",
		content: "Roger dodger",
		rating: 2,
	},
		{
		title: "",
		category: "soundsGood",
		content: "Sounds like a plan Stan.",
		rating: 2,
	},
	{
		title: "",
		category: "greeting",
		content: "We are gathered here today, in ",
		rating: 2,
	},
	{
		title: "",
		category: "deflectResponsibility",
		content: "Personal stress and anxiety aside, that sounds nice.",
		rating: 2,
	},
	{
		title: "",
		category: "soundsGood",
		content: "I concur.",
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
