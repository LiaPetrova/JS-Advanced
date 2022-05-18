function fruit(product, grams, price) {
let kg = grams / 1000;
let finalPrice = price * kg;
console.log(`I need $${finalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${product}.`);
}
fruit ('orange', 2500, 1.80)