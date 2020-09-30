'use strict';

function getWeekDay(str) { 
  return new Date(str).getDay();
}

console.log(getWeekDay('January 7, 2020'));
