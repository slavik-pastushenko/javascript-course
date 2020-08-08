const min = prompt ('Choose minute: 43');
    if ( (min >= 0) && (min < 15) ) {
        alert ('First Part');
    }
    else if ( (min >= 15) && (min < 30) ) {
        alert ('Second Part');
    }
    else if ( (min >= 30) && (min < 45)) {
        alert ('Third Part');
    }
    else if ( (min >= 45) && (min < 59) ){
        alert ('Fourth Part');
    }
    else {
        alert ('Something went wrong!');
    }



