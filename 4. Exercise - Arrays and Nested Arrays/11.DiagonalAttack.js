function solve(input) {
  let iMainDiagonal = 0;
  let iSecondaryDiagonal = input[0].split(" ").length - 1;
  let sumMainDiagonal = 0;
  let sumSecondaryDiagonal = 0;
  let resultArr = [];

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i].split(" ").map(Number);
    resultArr.push(currentLine);
    // console.log(currentLine);
    sumMainDiagonal += currentLine[iMainDiagonal++];
    sumSecondaryDiagonal += currentLine[iSecondaryDiagonal--];
  }

  if (sumMainDiagonal === sumSecondaryDiagonal) {
    iMainDiagonal--;
    iSecondaryDiagonal++;
    for (let i = 0; i < resultArr.length; i++) {
      for (let y = 0; y < resultArr[i].length; y++) {
        if (y === iMainDiagonal || y === iSecondaryDiagonal) {
          continue;
        } else {
          resultArr[i][y] = sumMainDiagonal;
        }
      }
      iMainDiagonal--;
      iSecondaryDiagonal++;
    }
  }
  for (let line of resultArr) {
    console.log(line.join(" "));
  }
}
solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
solve(['1 1 1',
'1 1 1',
'1 1 0']
)
