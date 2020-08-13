const min = prompt ('43');

switch (true) {
    case min >= 0 && min < 15:

        alert ('First Part');
    break;

    case min < 30:
        alert ('Second Part');
    break;
    case min < 45:
        alert ('Third Part');
    break;

    case min < 59: 
        alert ('Fourth Part');
    break;

    default:
        alert('Something went wrong!');
}
