let language = prompt("Введите одно их двух значений ru & en");
switch(language) {
    case "ru":
      language = "Русский";
      break;
    case "en":
        language = "English";
      break;
    default:
        language = "Значение по умолчанию : Українська";
  }
  console.log(language);