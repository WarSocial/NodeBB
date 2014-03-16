define(['raphaeljs', 'fonts/Blackwood_Castle_400.font', 'game/main', 'game/land', 'game/border', 'game/army', 'game/explosion'], function() {
	var	Game = {};

	Game.init = function() {
        angular.bootstrap(document, ['wsGameModule'])
	};

    Raphael.el.hoverInBounds = function(inFunc, outFunc) {
        var inBounds = false;

        // Mouseover function. Only execute if `inBounds` is false.
        this.mouseover(function() {
            if (!inBounds) {
                inBounds = true;
                inFunc.call(this);
            }
        });

        // Mouseout function
        this.mouseout(function(e) {
            var x = e.offsetX || e.clientX,
                y = e.offsetY || e.clientY;

            // Return `false` if we're still inside the element's bounds
            if (this.isPointInside(x, y)) return false;

            inBounds = false;
            outFunc.call(this);
        });

        return this;
    }

    if (!String.format) {
        String.format = function(format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

	return Game;
});