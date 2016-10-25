var expect = require('chai').expect;
var title = require('.././title');

// Test suite
describe('Mocha', function () {

	it('It should convert into title case', function () {
		expect(title.titleCase('a')).to.equal('A');
		expect(title.titleCase('the great expectation')).to.equal('The Great Expectation');
	});

});
