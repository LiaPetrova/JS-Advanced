function solve(input) {
    let allCars = new Map();
    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if (!allCars.has(brand)) {
            allCars.set(brand, new Map());
        }
        if (!allCars.get(brand).has(model)) {
            allCars.get(brand).set(model, quantity)
        } else {
            let newQ = allCars.get(brand).get(model) + quantity;
            allCars.get(brand).set(model, newQ);
        }
    }
    Array.from(allCars).forEach(x => {
        let br = x[0];
        console.log(`${br}`);
        Array.from(allCars.get(br)).forEach(y => console.log(`###${y[0]} -> ${y[1]}`))
    });

}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])