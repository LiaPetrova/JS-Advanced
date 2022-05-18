function pieceOfPie(allPies, startFlavor, endFlavor) {

  let startIndex = allPies.indexOf(startFlavor);
  let endIndex = allPies.indexOf(endFlavor);
  let result = allPies.slice(startIndex, endIndex + 1);
  return result;

}
pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
