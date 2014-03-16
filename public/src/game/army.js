/**
 * Created by DHilgaertner on 3/13/14.
 */

function Army (land) {
    this._overlay = land._path.clone();
    this._center = land.center;
}

Army.prototype.text = function(message) {
    if (message){
        var paper = this._overlay.paper;

        if (this._textEl){
            this._textEl.remove();
            delete this._textEl;
        }

        this._textEl = paper.print(0, 0, message, paper.getFont("Blackwood Castle"), 25);
        this._textEl.attr({stroke:"white", fill: "white"});
        this._textEl.transform(String.format("t{0},{1}...", this._center.x, this._center.y));
        this._t = message;
        return true;
    } else {
        return this._t;
    }
};

Army.prototype.hover = function(inCallBack, outCallBack) {
    this._overlay.hoverInBounds(inCallBack, outCallBack);
};

Army.prototype.click = function(callback) {
    this._overlay.click(callback);
};

Army.prototype.bgColor = function(color) {
    this._overlay.attr({ fill: color, opacity: 1 });
}

Army.prototype.selected = function(value) {
    if (value){
        this._overlay.g = this._overlay.glow({opacity: 1.0, color: "white", width: 2});
        this._overlay.g.toFront();
    } else {
        if (this._overlay.g){
            this._overlay.g.remove();
            delete this._overlay.g;
        }
    }
};

Army.prototype.isSelected = function() {
    if (this._overlay.g){
        return true;
    } else {
        return false;
    }
};

Army.prototype.attack = function(opponent) {
    var deltax = opponent._textEl.getBBox().x - this._textEl.getBBox().x;
    var deltay = opponent._textEl.getBBox().y - this._textEl.getBBox().y;
    var attack_plan = String.format("...t{0},{1}", deltax, deltay);
    var transform = this._textEl.transform();
    this._textEl.toFront();
    this._textEl.animate({ transform: attack_plan }, 1000, "backIn", function(){
        console.log("animation done!");
        this.animate({ transform: transform }, 200);
    });
};
