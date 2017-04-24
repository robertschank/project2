var Note = require('../models/note');
var expect = require('chai').expect;

describe('Note', function() {
	describe('new', function() {
		it('is an object', function(){
			var notey = new Note();
			expect(typeof(notey)).to.equal("object");
		});
	});

	describe('new', function() {
		it('is an object', function(){
			var notey = new Note();
			notey.content = 'We can get down.';
			expect(notey.content).to.equal('We can get down.');
		});
	});
});