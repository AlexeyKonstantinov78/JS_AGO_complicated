'use strict';

let time = setInterval(function() {
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    monthAll = ['января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    timeNow = new Date(),
    day = timeNow.getDay(),
    month = timeNow.getMonth();

    function declOfNum(n) {  
        let text_forms = ['час', 'часов', 'часа'];
        // n = Math.abs(n) % 100; var n1 = n % 10;
        if (n == 1 || n == 21) { return text_forms[0]; }
        if (n > 1 && n < 5) { return text_forms[2]; }
        if (n > 21 && n < 25) { return text_forms[2]; }
        return text_forms[1];
    }

    function decZero(n) {
        if (n >= 0 && n < 10) {return '0'+n;}
        return n;
    }

    document.write('Сегодня ' + week[day] + ', ' + timeNow.getDate() + ' ' + monthAll[month] + ' ' + timeNow.getFullYear() + ' года, ' + timeNow.getHours() + ' ' + declOfNum(timeNow.getHours()) + ' ' +timeNow.getMinutes()+" минут "+timeNow.getSeconds() + ' секунд' + '<br>');

    document.write(decZero(timeNow.getDate()) + ' ' + decZero(timeNow.getMonth()) + ' ' + decZero(timeNow.getFullYear()) + ' - ' + decZero(timeNow.getHours()) +" : "+ decZero(timeNow.getMinutes()) + " : " + decZero(timeNow.getSeconds()) + '<br>');
    

    // document.removeChild;
}, 1000);

setTimeout(() => {
    clearInterval(time);
    document.write('Stop');
    
}, 60000);