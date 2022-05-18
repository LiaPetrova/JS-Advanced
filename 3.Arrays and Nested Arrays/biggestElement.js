function biggestElement(input) {
  let biggestNumber = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < input[i].length; y++) {
      let currentNum = input[i][y];
      if (currentNum > biggestNumber) {
        biggestNumber = currentNum;
      }
    }
  }

  return biggestNumber;
}
console.log(
  biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
  ])
);
