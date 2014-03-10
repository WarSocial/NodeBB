/**
 * Created by DHilgaertner on 3/8/14.
 */


function GameCtrl($scope) {

    socket.emit("game.getFeaturedGame", onReceiveGameData);
    function onReceiveGameData(err, data) {
        console.dir(data);

        var paper = Raphael("game-board");

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            paper.setSize(700,480);
        } else {
            paper.setViewBox(0,0,700,480,true);
        }

        // ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
        var svg = document.querySelector("svg");
        svg.removeAttribute("width");
        svg.removeAttribute("height");

        paper.setStart();
        data.borders.forEach(function(border){
            paper.path(border.path);
        });
        var outsideBorder = paper.setFinish();
        outsideBorder.blur(10);

        paper.setStart();
        data.lands.forEach(function(land){
            var path = paper.path(land.path);
            path.attr({fill: '#D3E2DA','stroke-width': '.5','stroke-opacity': '1'});

            if (land.transform){
                path.transform(land.transform);
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

        lands.click(function(){
            alert(this.data().id);
        });
    }
}