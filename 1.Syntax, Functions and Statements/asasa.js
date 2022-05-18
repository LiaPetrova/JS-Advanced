const array = [1,2,3];

// console.log(array);
// console.log(array);
// array.shift();
// array.splice(0,0,2)
// console.log(array);
// let arr = [1,2,3,4,5,6,7];
// console.log(arr.shift());
// let arr1 = ['2','5','7'];
// let index = arr1.indexOf('5');
// arr1.splice(index, 1, 9);
// console.log(arr1);
// let br = arr1.slice(0);
// console.log(br);
// let
let arr = [0,2,3,'icho',4,5,'liicho',6,7];
let sum = arr.filter(x => {
    x = x/ 2;
    return x !== 'NaN'
})
console.log(sum);
console.log('icho'/2);

