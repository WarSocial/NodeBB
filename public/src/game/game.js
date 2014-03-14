define(['raphaeljs', 'game/main', 'game/land', 'game/border', 'game/army'], function() {
	var	Game = {};

	Game.init = function() {
        angular.bootstrap(document, ['wsGameModule'])
	};

	return Game;
});