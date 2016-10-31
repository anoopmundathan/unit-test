function checkForShip(player, cordinates) {
    var shipPresent, ship;
    for(var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        shipPresent = ship.locations.filter(function(actualCordinate) {
            return (actualCordinate[0] === cordinates[0]) && (actualCordinate[1] === cordinates[1]);
        })[0];

        if(!shipPresent) {
            return false;
        } else {
            return true;
        }
    }
}
module.exports.checkForShip = checkForShip;