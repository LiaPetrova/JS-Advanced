function squareOfStars(input) {
  let result = "";
  if (input === undefined) {
    input = 5;
  }
  for (let i = 0; i < input; i++) {
    result += `\n${"* ".repeat(input)}`;
  }
  console.log(result);
}
squareOfStars(8);
