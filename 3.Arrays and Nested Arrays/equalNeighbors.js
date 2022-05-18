function equalNeighbors(input) {
  let countEqualNeigbors = 0;
  
  for (let i = 0; i < input[0].length; i++) {
    for (let y = 0; y < input.length; y++) {
      if (input[y][i] === input[y][i + 1]) {
        countEqualNeigbors++;
      }
      if (y !== input.length - 1) {
        if (input[y][i] === input[y + 1][i]) {
          countEqualNeigbors++;
        }
      }
    }
  }
  return countEqualNeigbors;
}
equalNeighbors([
  ["2", "3", "4", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log(
  equalNeighbors([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
  ])
);
