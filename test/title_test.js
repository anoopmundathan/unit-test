var expect = require('chai').expect;
var title = require('.././title');

// Test suite
describe('Mocha', function () {

	it('It should convert into title case', function () {
		expect(title.titleCase('a')).to.equal('A');
		expect(title.titleCase('a')).to.equal('B');
		expect(title.titleCase('hello world')).to.equal('Hello World');
		expect(title.titleCase('the great expectation')).to.equal('The Great Expectation');
	});

	it('It should be true', function () {
		expect(true).to.equal(true);
	});

});
