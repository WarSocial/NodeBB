/**
 * Created by DHilgaertner on 3/13/14.
 */

function Army (data, paper) {
    this.set = paper.set();

    var ctx = this;
    data.paths.forEach(function(item){
        var path = paper.path(item.path);

        if (item.transform){
            path.transform(item.transform);
        }

        if (item.attr){
            path.attr(item.attr);
        }

        ctx.set.push(path);
    });

    this.textEl = paper.text(16,5,"");
    ctx.set.push(this.textEl);
}

Army.prototype.text = function(message) {
    if (message){
        return this.textEl.attr({text:message});
    } else {
        return this.textEl.attr("text");
    }
};

Army.prototype.hover = function(inCallBack, outCallBack) {
    this.set.hover(inCallBack, outCallBack)
};

Army.prototype.click = function(callback) {
    this.set.click(callback);
};

Army.prototype.attr = function(attrObj) {
    return this.set.attr(attrObj);
};

Army.prototype.data = function(name, data) {
    return this.set.data(name, data);
};

Army.prototype.transform = function(data) {
    return this.set.transform(data);
};

Army.prototype.bgColor = function(color) {
    this.set[1].attr({fill:color});
}
