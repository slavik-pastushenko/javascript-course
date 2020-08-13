var language = prompt('What lanquage do you use?', '');

switch(language) {
    case 'ru':
    case 'Ru':
    case 'Russian':
        alert('Ваш язык - русский');
        break;
    case 'en':
    case 'En':
    case 'English':
        alert('Your language is English');
        break;
    default: alert('Ваша мова - українська');
}