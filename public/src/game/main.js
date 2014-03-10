/**
 * Created by DHilgaertner on 3/8/14.
 */


function GameCtrl($scope) {

    socket.emit("game.getFeaturedGame", onReceiveGameData);
    function onReceiveGameData(err, data) {
        console.dir(data);

        var paper = Raphael("game-board");

//        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//            paper.setSize(700,480);
//        } else {
            paper.setViewBox(0,0,700,480,true);
//        }

        // ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
        var svg = document.querySelector("svg");
        svg.removeAttribute("width");
        svg.removeAttribute("height");

        paper.setStart();
        data.borders.forEach(function(border){
            var path = paper.path(border.path);

            if (border.transform){
                path.transform(border.transform);
            }

            if (border.attr){
                path.attr(border.attr);
            }

        });
        var outsideBorder = paper.setFinish();
        outsideBorder.blur(10);

        paper.setStart();
        data.lands.forEach(function(land){
            var path = paper.path(land.path);

            if (land.transform){
                path.transform(land.transform);
            }

            if (land.attr){
                path.attr(land.attr);
            }
        });
        var lands = paper.setFinish();

        lands.hover(function(){ //IN
            this.a = {
                fill: this.attr('fill'),
                opacity: this.attr('opacity')
            };

            this.attr({
                fill: 'red',
                opacity: 0.6
            });

        }, function(){ //OUT
            this.attr({
                fill: this.a.fill,
                opacity: this.a.opacity
            });
        });
    }
}