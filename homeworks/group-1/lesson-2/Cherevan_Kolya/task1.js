// first option

const someLanguages = prompt();

switch (someLanguages) {
    case "ru":
        alert('выбран' + ' ' + someLanguages)
        break;
    case "en":
        alert('выбран' + ' ' + someLanguages)
        break;
    default:
        alert('ukrainian');
}

// second option

if (someLanguages === 'ru') {
    console.log('russian')
} else if (someLanguages === 'en') {
    console.log('english')
} else {
    console.log('ukrainian')
}