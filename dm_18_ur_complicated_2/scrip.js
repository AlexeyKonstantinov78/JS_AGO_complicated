'use string';

let anima = document.querySelector('.anima'),
    buttom =document.querySelector('button'),
    count = 0;

let interval;

function animals() {
    
    interval = requestAnimationFrame(animals);
    count++
    anima.style.top = count + 'px';
    anima.style.left = count + 'px';
       
}

interval = requestAnimationFrame(animals);

let status = false;
document.addEventListener('click', function(){
    if (status){ 
        interval = requestAnimationFrame(animals);
        status = false;
    } else {
        status = true;
        cancelAnimationFrame(interval);
    }
});

buttom.addEventListener('click', function(){
    count = 0;
       
    }
)