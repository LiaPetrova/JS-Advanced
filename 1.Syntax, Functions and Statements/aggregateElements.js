function aggregateElements (input) {
let length = input.length;
let sum1 = 0;
let sum2 = 0;
let sum3 = '';
for (let i = 0; i< length; i++) {
    sum1 += input[i];
    sum2 += 1 / input[i];
    sum3 += '' + input[i];
}
console.log(sum1);
console.log(sum2);
console.log(sum3);
}
aggregateElements ([1,2,3])