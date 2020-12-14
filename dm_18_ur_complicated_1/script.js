'use strict';

const input = document.querySelector('input'),
    parag = document.querySelector('p');


      
        function fn(){
             parag.textContent = input.value;
        };

        function debounce(callback) {
            let timeout;
            return function(argument) {
            clearTimeout(timeout);
            timeout = setTimeout(callback, 300, argument);
            };
        }

        let deb = debounce(fn);

        input.addEventListener('input', deb);
        
    
    