var	async = require('async'),
	map = require('../map'),
	SocketGame = {};


SocketGame.getFeaturedGame = function(socket, data, callback) {
    map.getMapData(1, callback);
};

/* Exports */

module.exports = SocketGame;