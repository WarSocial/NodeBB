/**
 * Created by DHilgaertner on 3/13/14.
 */

function Army (land, paper) {
    this.overlay = land.path.clone();
    this.centerTF = land.centerTF;
}

Army.prototype.text = function(message) {
    if (message){
        var paper = this.overlay.paper;

        if (this.textEl){
            this.textEl.remove();
            delete this.textEl;
        }

        this.textEl = paper.print(13, 10, message, paper.getFont("Capture it"), 25);
        this.textEl.transform(this.centerTF + "...");
        this.t = message;
        return true;
    } else {
        return this.t;
    }
};

Army.prototype.hover = function(inCallBack, outCallBack) {
    this.overlay.hoverInBounds(inCallBack, outCallBack);
};

Army.prototype.click = function(callback) {
    this.overlay.click(callback);
};

Army.prototype.bgColor = function(color) {
    this.overlay.attr({ fill: color, opacity: 0.5 });
}

Army.prototype.selected = function(value) {
    if (value){
        this.overlay.toFront();
        this.overlay.g = this.overlay.glow({opacity: 1.0, color: "white", width: 5});
        this.textEl.toFront();
    } else {
        if (this.overlay.g){
            this.overlay.g.remove();
            delete this.overlay.g;
        }
    }
};

Army.prototype.isSelected = function() {
    if (this.overlay.g){
        return true;
    } else {
        return false;
    }
};
