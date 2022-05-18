function negativePositiveNumbers(input) {
  let newArr = [];
  for (let num of input) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  for (let currentNum of newArr) {
    console.log(currentNum);
  }
}
negativePositiveNumbers([7, -2, 8, 9]);
