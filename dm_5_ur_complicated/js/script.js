'use strict';

let arr = [254, 567, 323, 5, 4, 321, 456];

for(let i = 0; i < arr.length; i++) {
    let str = Number(String(arr[i]).substring(0, 1));
    if (str === 2 || str === 4) console.log(arr[i]);
}

next:
for (let i = 2; i <= 100; i++) {
    let j
    for(j = 2; j < i; j++){
        if (i % j == 0) continue next; 
    }
    
    console.log(i + ' Делители этого числа: 1 и ' + j);
}