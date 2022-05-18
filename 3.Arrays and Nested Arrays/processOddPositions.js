function processOddPositions(input) {
  let arr = [];
  for (let i in input) {
    if (i % 2 !== 0) {
      arr.push(input[i]);
    }
  }
let result = arr.map((x) => x * 2).reverse().join(' ');
  return result;
}

console.log(processOddPositions([10, 15, 20, 25]));
