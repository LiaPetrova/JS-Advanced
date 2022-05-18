function cookingByNumbers(startingPoint, op1, op2, op3, op4, op5) {
  let input = [startingPoint, op1, op2, op3, op4, op5];
 
  let currentValue =   Number(input.shift());
  for (let i = 0; i < 5; i++) {
    let command = input[i];
    switch (command) {
      case "chop":
        currentValue /= 2;
        break;
      case "dice":
        currentValue = Math.sqrt(currentValue);
        break;
      case "spice":
        currentValue += 1;
        break;
      case "bake":
        currentValue *= 3;
        break;
      case "fillet":
        currentValue *= 0.8;
        break;
    }
    console.log(currentValue);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
