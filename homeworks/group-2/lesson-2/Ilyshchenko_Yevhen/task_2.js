const minute = +prompt("Write number 0 ... 60");

switch (true) {
  case minute >= 0 && minute < 16:
    alert(minute + " " + "first quarter of an hour");
    break;
  case minute > 15 && minute < 31:
    alert(minute + " " + "second quarter of an hour");
    break;
  case minute > 30 && minute < 46:
    alert(minute + " " + "third quarter of an hour");
    break;
  case minute > 45 && minute < 61:
    alert(minute + " " + "first quarter of an hour");
    break;
  case minute < 0:
    alert("enter a number from 0 to 60");
    break;

  default:
    alert("enter a number from 0 to 60");
    break;
}
