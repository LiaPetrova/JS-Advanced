function lastKNumbersSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let currentNum = 0;
    for (let y = i - k; y < i; y++) {
        if (y < 0) {
            y = 0;
        }
      currentNum += arr[y];
    }
    arr.push(currentNum);
  }
  return arr;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8,2);
