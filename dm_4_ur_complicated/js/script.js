'use strict';

let arbitraryValue = prompt('Введите значение');

function checkingTaypeof(date) {
        let str;
        if (!isNaN(date)) {
            return 'ведено число';
        } else {
            str = date.trim();
            if (str.length > 30) {return str.substring(0, 30) + ' ...';
            } else {return str;}       
        }
} 

alert(checkingTaypeof(arbitraryValue));



