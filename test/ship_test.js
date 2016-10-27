var expect = require('chai').expect;

describe('Ship', function () {
  it('check for Battleship', function () {
    var checkBattleShip = require('../ship.js').battleShip;
    expect(checkBattleShip()).to.be.true;
  });
});
