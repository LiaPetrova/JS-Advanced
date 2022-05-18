function solve(input) {
  input.sort((a, b) => a - b);
  let resultArr = [];
  let length = input.length / 2;
  for (let i = 0; i < length; i++) {
    let smallest = input.shift();
    let biggest = input.pop();
    resultArr.push(smallest, biggest);
  }
 return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
