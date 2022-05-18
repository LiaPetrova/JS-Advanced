function rectangle(width, height, color) {
  function getColor(color) {
    let firstLetter = color.charAt(0).toUpperCase();
    color = firstLetter + color.slice(1);
    return color;
  }

  
  let result = {
    width,
    height,
    color: getColor(color),
    calcArea: () => {
      return width * height;
    },
  };
  return result;
  
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

