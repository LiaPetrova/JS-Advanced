let cars = ['BMW', 'Audi', 'Opel'];
let [...copiedCars] = cars; // Rest operator!!
console.log(copiedCars);
copiedCars[0] = 'Porche';
console.log(copiedCars);
console.log(cars);
let copiedCars2 = [];

for(let i = 0; i < cars.length; i++) {
    copiedCars2[i] = cars[i];
}
console.log(copiedCars2);
let copiedCars3 = [...cars]; // spread Operator !!
console.log(copiedCars3);

let copiedCars4 = cars.slice(); // new shadow copy!! use slice();

let copiedCars5 = cars.concat([]);
console.log(copiedCars5);
