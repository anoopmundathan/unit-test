// To use Chai's expect method, import Chai at the top of your file
var expect = require('chai').expect;

// We normally start with a Sanity check  -
// A trivial function or test that proves, we setup things correctly

// A Test suite is a block of unit tests that are all closely related;
// they test the same function or similar parts of our code base
describe('Mocha', function () {

	// Test spec - Each individual unit test is sometimes called a “spec”
	// Mocha makes it natural to write specs by containing
	// them in a function called it()
	it('expect true to be ok', function () {
		expect(true).to.be.ok;
	});

	it('should convert into title case', function () {
		var title = require('../title');
		expect(title.titleCase('the great expectation')).to.be.equal('The Great Expectation');
	});

});
