function sameNumbers(num) {
  allAreSame = true;
  num = String(num);
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    if (i < num.length - 1) {
      if (num[i] !== num[i + 1]) {
        allAreSame = false;
      }
    }
    sum += Number(num[i]);
  }
  console.log(allAreSame);
  console.log(sum);
}
sameNumbers(2222222);
