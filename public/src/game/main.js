/**
 * Created by DHilgaertner on 3/8/14.
 */


function GameCtrl($scope) {

    socket.emit("game.getFeaturedGame", onReceiveGameData);
    function onReceiveGameData(err, d) {
        $.getJSON("/maps/map-1.json?v=1", null, function(data) {
            console.dir(data);

            var paper = Raphael("game-board");

            paper.setViewBox(0,0,700,480,true);

            // ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
            var svg = document.querySelector("svg");
            svg.removeAttribute("width");
            svg.removeAttribute("height");

            var borders = [];
            var lands = [];
            var selected = [];

            data.borders.forEach(function(border){
                var b = new Border(border, paper);
                b.blur(4);
                borders.push(b);
            });

            data.lands.forEach(function(land){
                var l = new Land(land, paper);

                function emptySelected() {
                    selected.forEach(function(item){
                        item.army.selected(false);
                    });
                    selected.length = 0;
                }

                l.army.click(function(){
                    if (l.army.isSelected()) {
                        emptySelected();
                    } else {
                        l.army.selected(true);
                        selected.push(l);

                        if (selected.length > 1) {
                            //Attack!
                            console.log("ATTACK!");
                            selected[0].army.attack(selected[1].army);
                            emptySelected();
                        }
                    }
                });

                lands.push(l);
            });

            var rect = paper.rect(0,0,700,480);
            rect.toBack();
            rect.attr({fill: "green", opacity:.3});
            rect.mousedown(function (event, a, b) {
                // get bounding rect of the paper
                var bnds = event.target.getBoundingClientRect();

                // adjust mouse x/y
                var mx = event.clientX - bnds.left;
                var my = event.clientY - bnds.top;

                // divide x/y by the bounding w/h to get location %s and apply factor by actual paper w/h
                var fx = mx/bnds.width * rect.attrs.width;
                var fy = my/bnds.height * rect.attrs.height;

                // cleanup output
                fx = Number(fx).toPrecision(3);
                fy = Number(fy).toPrecision(3);

                var sx = fx - 15;
                var sy = fy - 10;

                console.log("t" + sx.toString() + "," + sy.toString());
            });
            rect.hide();
        }).fail(function() {
            console.log( "error parsing map json" );
        });
    }
}