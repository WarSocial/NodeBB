define(['raphaeljs', 'game/main'], function() {
	var	Game = {};

	Game.init = function() {
        angular.bootstrap(document, ['wsGameModule'])
	};

	return Game;
});