'use strict';

let lang = 'en';
let weekDay = [
    ['ru', 'пон., вт., ср., чт., пт., суб., вос.'],
    ['en', 'Mon, Tue, Wed, Thu, Fri, Sat, Sun']
]
let namePerson = '';


if (lang === 'ru') console.log('пон., вт., ср., чт., пт., суб., вос.');
if (lang === 'en') console.log('Mon., Tue., Wed, Thu., Fri., Sat., Sun.');

switch (lang) {
    case 'ru':
        console.log('пон., вт., ср., чт., пт., суб., вос.'); 
        break;
    case 'en':
        console.log('Mon., Tue., Wed, Thu., Fri., Sat., Sun.');
        break;
}

for (let i = 0; i < weekDay.length; i++) {
    (weekDay[i][0] === lang) ? console.log(weekDay[i][1]): '';
}

let rezult = (namePerson === 'Артем') ? 'Директор' : (namePerson === 'Максим') ? 'преподаватель' : 'Студент';;
console.log(rezult);

