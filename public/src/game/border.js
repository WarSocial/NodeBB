/**
 * Created by DHilgaertner on 3/13/14.
 */

function Border (data, paper) {
    this._path = paper.path(data.path);

    if (data.name){
        this.name = data.name;
        this._path.data("name", data.name);
    }

    if (data.transform){
        this._path.transform(data.transform);
    }

    if (data.attr){
        this._path.attr(data.attr);
    }
}

Border.prototype.blur = function(num) {
    this._path.blur(num);
};
