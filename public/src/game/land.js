/**
 * Created by DHilgaertner on 3/13/14.
 */

function Land (landData, paper) {
    this.path = paper.path(landData.path);

    if (landData.name){
        this.name = landData.name;
        this.data("name", landData.name);
    }

    if (landData.transform){
        this.path.transform(landData.transform);
    }

    if (landData.attr){
        this.path.attr(landData.attr);

        //TODO: Refactor: this white fill makes the armies look better while
        //  they lay on top.  This should be determined by presence of the army.
        //  Or perhaps encapsulated by army itself
        this.path.attr({fill: "white"})
    }

    if (landData.armyTransform) {
        this.centerTF = landData.armyTransform;
        this.army = new Army(this, paper);

        var colors = ['#FF6262','#FFA347','#FFFF75','#A3FF75','#0099FF','#FF66FF'];

        if (this.name) {
            var random = Math.floor(Math.random()*8) + 1;
            this.army.text(random.toString());
            this.army.bgColor(colors[Math.floor(Math.random()*6)]);
        }

        var hover_attr = { fill: 'red' };

        this.army.hover(function(){ //IN
            if (!this.a){
                this.a = this.attr();
                this.attr(hover_attr);
            }
        }, function(){ //OUT
            this.attr(this.a);
            delete this.a
        });
    }
}

Land.prototype.hover = function(inCallBack, outCallBack) {
    this.path.hover(inCallBack, outCallBack);
};

Land.prototype.click = function(callback) {
    this.path.click(callback);
};

Land.prototype.attr = function(attrObj) {
    return this.path.attr(attrObj);
};

Land.prototype.data = function(name, data) {
    return this.path.data(name, data);
};

Land.prototype.text = function(message) {
    return this.army.text(message);
};