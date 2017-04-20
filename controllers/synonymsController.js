'use strict'
let request = require('request');
let apiKey = require('../env.js');

const getSynonyms = function(req, res) {
	let parsedBody = {};
	console.log('params._word' + req.params._word);
	let word = req.params._word;
	let url = 'https://words.bighugelabs.com/api/2/' + apiKey + '/' + word + '/json';
	request(url, function (error, response, body) {
		if (error) { return console.log('ERROR NUMBER 1: ' + error);}
		console.log('bodyType: ' + typeof(body));
		console.log('bodyLength: ' + body.length);
		if (body.length <= 0) {return res.json({message: 'No synonyms found.'});}
		console.log('body: ' + body);
		parsedBody = JSON.parse(body);

		let keys = Object.keys(parsedBody);
		console.log(keys);
	});
	console.log('Object.keys(parsedBody): ' + Object.keys(parsedBody));
	res.json(parsedBody);
};

// populate synonyms array from json
function extractSynonyms(body) {
// find object keys


}

module.exports = {
	getSynonyms: getSynonyms,
};