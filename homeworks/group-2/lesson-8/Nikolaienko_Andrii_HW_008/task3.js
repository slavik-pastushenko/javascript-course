Boolean.prototype.toString = Number.prototype.toString = function () {
    return this + '';
};
Array.prototype.toString = function () {
    return '[' + this.join(',') + ']';
};