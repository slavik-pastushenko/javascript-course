const minute = prompt ('13');

switch (true){
    case minute >= 0 && minute < 15:
        alert ('First Quarter');
        break;

    case minute >= 15 && minute < 30:
        alert ('Second Quarter');
        break;

    case minute >= 30 && minute < 45:
        alert ('Third Quarter');
        break;

    case minute >= 45 && minute < 59:
        alert ('Fourth Quarter');
        break;

    default:
        alert ('Clocks broken!');
}