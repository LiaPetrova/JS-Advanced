function smallestTwoNumbers(input) {

  input.sort((a, b) => a - b);
  let smallestTwo = input.slice(0, 2);
  console.log(smallestTwo.join(" "));
  
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
