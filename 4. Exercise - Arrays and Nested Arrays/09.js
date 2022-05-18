function solve(input) {
    let isMagical = true;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let currentSumRow = 0;
        for (let y = 0; y < input[i].length; y++) {
            currentSumRow += input[i][y];
        }
        if (i === 0) {
            sum = currentSumRow;
        }
        if (sum !== currentSumRow) {
            isMagical = false;
            break;
        }
    }
      for (let y = 0; y < input[0].length; y++) {
          let currentSumColumn = 0;
          for (let i = 0; i < input.length; i++) {
              currentSumColumn += input[i][y];
          }

          if (sum !== currentSumColumn) {
              isMagical = false;
              break;
          }
      }
    console.log(isMagical);
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])