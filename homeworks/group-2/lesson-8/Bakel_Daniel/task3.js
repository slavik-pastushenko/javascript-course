'use strict';

Number.prototype.toString = function () { 
  return String(this);
};

Boolean.prototype.toString = function () { 
  return String(this);
};

Array.prototype.toString = function () { 
  return `[${this.join(',')}]`;
};

console.log((125).toString());
console.log(false.toString());
console.log([].toString());
console.log([1].toString());
console.log([1,2,3].toString());