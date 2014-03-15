/**
 * Created by DHilgaertner on 3/13/14.
 */

function Land (landData, armyData, paper) {
    var ctx = this;
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
    }

    if (landData.armyTransform){
        this.army = new Army(armyData, paper);
        this.army.transform(landData.armyTransform + "...");

        if (this.name) {
            var random = Math.floor(Math.random()*8) + 1;
            this.army.text(random.toString());
        }

        //army.clone().transform("t451,413...").attr({text:"25", fill: "blue", stroke:"black", "stroke-width":.8});
    }
}

Land.prototype.hover = function(inCallBack, outCallBack) {
    this.path.hover(inCallBack, outCallBack)
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

Land.prototype.selected = function(value) {
    if (value){
        this.path.toFront();
        this.path.g = this.path.glow({opacity: 1.0, color: "red", width: 5});
        this.army.set.toFront();
    } else {
        if (this.path.g){
            this.path.g.remove();
            delete this.path.g;
        }
    }
};

Land.prototype.isSelected = function() {
    if (this.path.g){
        return true;
    } else {
        return false;
    }
};