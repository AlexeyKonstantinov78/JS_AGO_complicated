let num = '266219';
let derivative = 1;

for (let i = 0; i < num.length; i++) {
    derivative = derivative * num[i]
}

console.log(derivative);

console.log(String(derivative ** 3).substring(0,2));