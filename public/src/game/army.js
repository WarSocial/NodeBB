/**
 * Created by DHilgaertner on 3/13/14.
 */

function Army (land) {
    this._overlay = land._path.clone();
    this._centerTF = land.centerTF;
}

Army.prototype.text = function(message) {
    if (message){
        var paper = this._overlay.paper;

        if (this._textEl){
            this._textEl.remove();
            delete this._textEl;
        }

        this._textEl = paper.print(13, 10, message, paper.getFont("Capture it"), 25);
        this._textEl.transform(this._centerTF + "...");
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
    this._overlay.attr({ fill: color, opacity: 0.5 });
}

Army.prototype.selected = function(value) {
    if (value){
        this._overlay.toFront();
        this._overlay.g = this._overlay.glow({opacity: 1.0, color: "white", width: 5});
        this._textEl.toFront();
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
