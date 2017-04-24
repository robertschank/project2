let db = require('./models');

let seedNotes = [
	{
		title: "",
		author: "bobschank",
		category: "greeting",
		content: "Attention Campers, ",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "This makes me uncomfortable.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "I wouldn't think so.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "hurryUp",
		content: "Let's shoot for two shakes",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "hurryUp",
		content: "The beers are waiting..",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "buyTime",
		content: "Your horses, hold 'em.",
		rating: 3,
	},
	{
		title: "",
		author: "bobschank",
		category: "buyTime",
		content: "Let's pump the brakes.",
		rating: 3,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "With additional parties involved, ",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "farewell",
		content: "Don't forget about me",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "farewell",
		content: "Ok, have a nice life.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "greeting",
		content: "What's up Chuck?",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "Thats an idea, ",
		rating: 2,
	},
		{
		title: "",
		author: "bobschank",
		category: "farewell",
		content: "Sayonara suckers, ",
		rating: 2,
	},
		{
		title: "",
		author: "bobschank",
		category: "farewell",
		content: "Peace be with you, ",
		rating: 2,
	},
		{
		title: "",
		author: "bobschank",
		category: "soundsGood",
		content: "Word to big bird.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "soundsGood",
		content: "Roger dodger",
		rating: 2,
	},
		{
		title: "",
		author: "bobschank",
		category: "soundsGood",
		content: "Sounds like a plan Stan.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "greeting",
		content: "We are gathered here today, in ",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "Personal stress and anxiety aside, that sounds nice.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
		category: "deflectResponsibility",
		content: "I don't believe that's in my wheelhouse.",
		rating: 2,
	},
	{
		title: "",
		author: "bobschank",
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
