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
            path.data("name", land.name);

            if (land.transform){
                path.transform(land.transform);
            }

            if (land.attr){
                path.attr(land.attr);
            }
        });
        var lands = paper.setFinish();

        paper.setStart();
        data.army.paths.forEach(function(item){
            var path = paper.path(item.path);
            paper.text(15,5,"100");
            if (item.transform){
                path.transform(item.transform);
            }

            if (item.attr){
                path.attr(item.attr);
            }
        });
        var army = paper.setFinish();
        army.clone().transform("t120,85...").attr({text:"100"});
        army.clone().transform("t80,157...");
        army.clone().transform("t46,226...");
        army.clone().transform("t101,218...");
        army.clone().transform("t137,184...");
        army.clone().transform("t180,94...");
        army.clone().transform("t186,181...");
        army.clone().transform("t141,245...");
        army.clone().transform("t236,118...");
        army.clone().transform("t242,215...");
        army.clone().transform("t310,141...");

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
            alert(this.data("name"));
        });

        var rect = paper.rect(0,0,700,480);
        rect.attr({fill: "green", opacity:.3});
        rect.mousedown(function (event, a, b) {
            // get bounding rect of the paper
            var bnds = event.target.getBoundingClientRect();

            // adjust mouse x/y
            var mx = event.clientX - bnds.left;
            var my = event.clientY - bnds.top;

            // divide x/y by the bounding w/h to get location %s and apply factor by actual paper w/h
            var fx = mx/bnds.width * rect.attrs.width
            var fy = my/bnds.height * rect.attrs.height

            // cleanup output
            fx = Number(fx).toPrecision(3);
            fy = Number(fy).toPrecision(3);

            console.dir({x: fx, y: fy});
        });
    }
}