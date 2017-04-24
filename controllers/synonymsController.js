'use strict'
let request = require('request');

// let apiKey = require('../env.js');
const apiKey = process.env.API_KEY;
console.log('XXXX API_KEY: ' + apiKey);

// Get list of synonyms from Big Huge Thesaurus API
const getSynonyms = function(req, res) {
	// Initiate objects to work with
	let parsedBody = {};
	let bodyKeys = [];
	let synonyms = [];
	// Get synonym keyword
	let word = req.params._word;
	// create url for request with apiKey and keyWord
	let url = 'https://words.bighugelabs.com/api/2/' + apiKey + '/' + word + '/json';
	request(url, function (error, response, body) {
		if (error) { return console.log('ERROR IN REQUEST: ' + error);}
		console.log('bodyType: ' + typeof(body));
		console.log('bodyLength: ' + body.length);
		// Respond with json in case no synonyms are found
		if (body.length <= 0) {return res.json({message: 'No synonyms found.'});}
		console.log('body: ' + body);
		parsedBody = JSON.parse(body);
		// Set bodyKeys to all the keys of the returned body
		bodyKeys = Object.keys(parsedBody);
		// For each key, check that it has a syn array inside if it,
		// If it does, loop through each syn in the array and push
		// it to the new synonyms array
		bodyKeys.forEach(function(key) {
			if (Object.keys(parsedBody[key]).includes('syn')){
				for(let i = 0; i < parsedBody[key].syn.length; i++) {
					synonyms.push(parsedBody[key].syn[i]);
				}				
			}
		});
		console.log('  synonyms : ' + synonyms);
		res.json(synonyms);
	});
};

module.exports = {
	getSynonyms: getSynonyms,
};