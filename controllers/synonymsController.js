'use strict'
let request = require('request');
let apiKey = require('../env.js');

const getSynonyms = function(req, res) {
	console.log('params._word' + req.params._word);
	let word = req.params._word;
	let url = 'https://words.bighugelabs.com/api/2/' + apiKey + '/' + word + '/json';
	request(url, function (error, response, body) {
		if (error) { return console.log('ERROR NUMBER 1: ' + error);}
		console.log('bodyType: ' + typeof(body));
		console.log('bodyLength: ' + body.length);
		if (body.length <= 0) {return res.json({message: 'No synonyms found.'})}
		console.log('body: ' + body);
		let parsedBody = JSON.parse(body);
		res.json(parsedBody);
	});
};

function traverse_it(obj){
	console.log('traversing!');
    for(var prop in obj){
        if(typeof obj[prop]=='object'){
            // object
            console.log( 'traverse_it: ' + traverse_it(obj[prop[1]]) );
        }else{
            // something else
            alert('The value of '+prop+' is '+obj[prop]+'.');
        }
    }
}

module.exports = {
	getSynonyms: getSynonyms,
};