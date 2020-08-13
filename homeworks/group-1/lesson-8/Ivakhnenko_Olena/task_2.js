Date.prototype.secondsFromMidnight = function () {
    return this.getHours() * 3600 + this.getMinutes() * 60 + this.getSeconds();
};

console.log(new Date().secondsFromMidnight());