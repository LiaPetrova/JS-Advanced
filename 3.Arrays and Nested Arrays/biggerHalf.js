function biggerHalf(input) {

  let length = Math.floor(input.length / 2);
  input.sort((a, b) => a - b);
  let result = input.slice(length, input.length);
  return result;
  
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
