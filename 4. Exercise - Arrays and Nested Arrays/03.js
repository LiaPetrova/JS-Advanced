function solve(input) {
  let num = 1;
  let resultArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "add") {
      resultArr.push(num);
    } else {
      resultArr.pop();
    }
    num++;
  }
  if (resultArr.length > 0) {
    for (let n of resultArr) {
      console.log(n);
    }
  } else {
      console.log('Empty');
  }
}
solve(["add", 'remove', "remove", "add", 'remove']);
