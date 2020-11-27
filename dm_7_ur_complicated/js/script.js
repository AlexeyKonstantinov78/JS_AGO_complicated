'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    timeNow = new Date(),
    day = timeNow.getDay();

    
    for (let j = 0; j < week.length; j++) {
        if (j ===0 || j === 6) {
            document.write('<b style="font-weight: 400">' + '<i>' + week[j] + '</i>' + '<br>' + '</b>');
        } else {
            document.write('День недели: ' + week[j] + '<br>');
        };

        if (j === day) {
            document.write('<b style="font-weight: bold">' + '<i>' + week[j] + '</i>' + '<br>' + '</b>');
        }
    }


    // document.write('День недели: сегодня ' + week[day] + '<br>')
    

 