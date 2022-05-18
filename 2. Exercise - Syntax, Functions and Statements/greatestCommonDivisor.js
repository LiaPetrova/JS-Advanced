function greatestCommonDivisor(num1,num2){
let biggerNumber = Math.max(num1, num2);
let smallerNumber = Math.min(num1, num2);
let maxDivisor = 0;
for (let i = 0; i<= smallerNumber; i++) {
if (smallerNumber % i === 0 && biggerNumber % i === 0) {
    maxDivisor = i;
}
}
console.log(maxDivisor);
}
greatestCommonDivisor(5,15)
greatestCommonDivisor(2154,458);