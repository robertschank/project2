'use strict'
let request = require('request');
let apiKey = require('../env.js');

const getSynonyms = function(req, res) {
	console.log(req.params._word);
	console.log(apiKey);
	let url = 'https://words.bighugelabs';
	request(url, function (error, response, body) {
		console.log('body: ' + (JSON.parse(body)).noun);
		let parsedBody = JSON.parse(body);
		res.json(parsedBody);
	});
};

module.exports = {
	getSynonyms: getSynonyms,
};