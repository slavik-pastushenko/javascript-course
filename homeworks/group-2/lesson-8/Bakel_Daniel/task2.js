'use strict';

function getSeconds() { 
  return (new Date() - new Date('September 10, 2020')) / 1000;
}

console.log(getSeconds());