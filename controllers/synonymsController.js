'use strict'
let request = require('request');
let apiKey = require('../env.js');

const getSynonyms = function(req, res) {
	console.log(req.params._word);
	console.log(apiKey);
	let url = 'https://words.bighugelabs.com/api/2/3a6a7d9910e54072f72828fc0c606a04/mountain/json';
	request(url, function (error, response, body) {
		console.log('body: ' + (JSON.parse(body)).noun);
		let parsedBody = JSON.parse(body);
		res.json(parsedBody);
	});
};

module.exports = {
	getSynonyms: getSynonyms,
};