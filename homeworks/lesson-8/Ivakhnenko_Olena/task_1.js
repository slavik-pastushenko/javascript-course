Date.prototype.day = function () {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
    return week[this.getDay()];
};

const dayWeek = (string) => new Date(string).day();
console.log(dayWeek('15 Jan 2020'));