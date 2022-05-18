function evenPositionElement(input) {
  let arr = [];
  for (let i in input) {
    if (i % 2 === 0) {
      arr.push(input[i]);
    }
  }
  console.log(arr.join(" "));
}
evenPositionElement(["20", "30", "40", "50", "60"]);
