'use strict'
let request = require('request');
let apiKey = require('../env.js');

const getSynonyms = function(req, res) {
	let parsedBody = {};
	let bodyKeys = [];
	let synonyms = [];
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
		bodyKeys = Object.keys(parsedBody);
		console.log('bodyKeysIn' + bodyKeys);
		bodyKeys.forEach(function(key) {
			if (Object.keys(parsedBody[key]).includes('syn')){
				for(let i = 0; i < parsedBody[key].syn.length; i++) {
					synonyms.push(parsedBody[key].syn[i]);
				}				
			}

		});
		console.log('  synonyms : ' + synonyms);
		res.json(parsedBody);
	});
};

// populate synonyms array from json
function extractSynonyms(body) {
// find object keys
	
}

module.exports = {
	getSynonyms: getSynonyms,
};