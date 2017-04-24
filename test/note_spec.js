var Note = require('../models/note');
var expect = require('chai').expect;

describe('Note', function() {
	describe('new', function() {
		it('is an object', function(){
			var notey = new Note();
			expect(typeof(notey)).to.equal("object");
		});
		
	});
});