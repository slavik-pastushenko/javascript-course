const language = prompt('Chose language - en or ru?');

switch (language) {
	case 'en', 'english', 'English':
		alert('You chose English');
		break;
	case 'ru', 'ру', 'русский', 'Русский':
		alert('Вы выбрали русский');
		break;
	default:
		alert('Ви обрали неньку');
}