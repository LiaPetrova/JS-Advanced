function sumFirstLast (input) {
let first = Number(input.shift());
let last = Number(input.pop());
console.log(first+last);
}
sumFirstLast (['20', '30', '40'])