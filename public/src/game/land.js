/**
 * Created by DHilgaertner on 3/13/14.
 */

function Land (landData, paper) {
    this._path = paper.path(landData.path);

    if (landData.name){
        this.name = landData.name;
        this._path.data("name", landData.name);
    }

    if (landData.transform){
        this._path.transform(landData.transform);
    }

    if (landData.attr){
        this._path.attr(landData.attr);

        //TODO: Refactor: this white fill makes the armies look better while
        //  they lay on top.  This should be determined by presence of the army.
        //  Or perhaps encapsulated by army itself
        //this._path.attr({fill: "white"})
    }

    if (landData.center) {
        this.center = landData.center;
        this.army = new Army(this);

        //var colors = ['#FF6262','#FFA347','#FFFF75','#A3FF75','#0099FF','#FF66FF'];
        var colors = ['#BA0404','#B56804','#E0D204','#297305','#03329E','#515052'];
        var colorsHover = ['#DC0404','#DC7F04','#FAEA0F','#399D07','#0445DC','#666567']; // from http://colllor.com

        if (this.name) {
            var random = Math.floor(Math.random()*8) + 1;
            this.army.text(random.toString());
            this.army.bgColor(colors[Math.floor(Math.random()*6)]);
        }

        this.army.hover(function(){ //IN
            if (!this.a){
                this.a = this.attr();
                this.attr({fill: colorsHover[colors.indexOf(this.attr("fill"))]});
            }
        }, function(){ //OUT
            this.attr(this.a);
            delete this.a
        });
    }
}

Land.prototype.hover = function(inCallBack, outCallBack) {
    this._path.hover(inCallBack, outCallBack);
};

Land.prototype.click = function(callback) {
    this._path.click(callback);
};