var expect = require('chai').expect;

// Test suite
describe('checkForShip', function() {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    
    it('should correctly report no ship at given player cordinates', function() {
        var player = {
			ships : [
				{
					locations: [[0,0], [1,1]]
				}
			]
		};

        expect(checkForShip(player,[9,9])).to.be.false;
        expect(checkForShip(player,[1,1])).to.be.true;
    });

    it('should correctly report ship at given player cordinates', function() {
        var player = {
			ships : [
				{
					locations: [[1,1]]
				}
			]
		};

        expect(checkForShip(player,[1,1])).to.be.true;
    });
});
