[![Build Status](https://travis-ci.org/anoopmundathan/unit-test.svg?branch=master)](https://travis-ci.org/anoopmundathan/unit-test)

# unit-test
Behavior Driven Development Example - Write unit tests for functions with the JavaScript testing framework Mocha.js.

   - [checkForShip](#checkforship)
   - [damageShip](#damageship)
   - [fire](#fire)
<a name=""></a>
 
<a name="checkforship"></a>
# checkForShip
should correctly report no ship at given player cordinates.

```js
expect(checkForShip(player,[9,9])).to.be.false;
expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
```

should correctly report ship at given player cordinates.

```js
expect(checkForShip(player,[1,1])).to.deep.equal(player.ships[1]);
```

should handle checking multiple ships.

```js
expect(checkForShip(player,[0,1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player,[1,0])).to.deep.equal(player.ships[1]);
expect(checkForShip(player,[1,1])).to.deep.equal(player.ships[1]);
expect(checkForShip(player,[2,0])).to.deep.equal(player.ships[2]);
expect(checkForShip(player,[2,1])).to.deep.equal(player.ships[2]);
expect(checkForShip(player,[2,3])).to.deep.equal(player.ships[2]);
expect(checkForShip(player,[9,9])).to.be.false;
```

<a name="damageship"></a>
# damageShip
should register damage on a given ship at given location.

```js
var ship = {
    locations: [[0,0]],
    damage: []
};
damageShip(ship, [0,0]);
expect(ship.damage).to.not.be.empty;
expect(ship.damage[0]).to.deep.equal([0,0]);
```

<a name="fire"></a>
# fire
should record damage on the given player ship at a given cordinate.

```js
fire(player, [0,0]);
expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
```

should NOT record damage if there is no ship at my given cordinate.

```js
fire(player, [9,9]);
expect(player.ships[0].damage).to.be.empty;
```
# Installation
```
git clone <repo>
cd unit-test
npm install
```

# Usage
```
npm test
```
or

```
npm run test
```
or

```
mocha 
```


