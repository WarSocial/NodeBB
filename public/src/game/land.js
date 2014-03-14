/**
 * Created by DHilgaertner on 3/13/14.
 */

function Land (landData, armyData, paper) {
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
            this.army.attr({text: this.name});
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
