/**
 * Created by DHilgaertner on 3/13/14.
 */

function Border (data, paper) {
    this.path = paper.path(data.path);

    if (data.name){
        this.name = data.name;
        this.data("name", data.name);
    }

    if (data.transform){
        this.path.transform(data.transform);
    }

    if (data.attr){
        this.path.attr(data.attr);
    }
}

Border.prototype.blur = function(num) {
    this.path.blur(num);
};

Border.prototype.data = function(name, data) {
    return this.path.data(name, data);
};

