'use strict';

let minute = 44;

if (minute > 0 && minute <= 15) {
  console.log('1st quarter');
} else if (minute > 15 && minute <= 30) {
  console.log('2nd quarter');
} else if (minute > 30 && minute <= 45) {
  console.log('3rd quarter');
} else if (minute > 45 && minute < 60) {
  console.log('4th quarter');
} else { 
  console.log('Wrong data');
}