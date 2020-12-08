'use strict';

let wrapper = document.querySelector('#wrapper'),
    change = document.querySelector('#change'),
    h1 = document.querySelector('h1'),
    colorValue;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    change.addEventListener('click', function(){
        colorValue = getRandomColor();
        h1.textContent = colorValue;
        document.body.style.backgroundColor = colorValue;
        change.style.color = colorValue;
    });

    