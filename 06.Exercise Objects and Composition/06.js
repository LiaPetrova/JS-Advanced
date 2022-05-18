function solve(input) {
    let result = {};
    for (let line of input) {
        let [product, price] = line.split(' : ');
        result[product] = Number(price);
    }

    let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sorted.length; i++) {
        let currentProduct = sorted[i];
        let previousProduct = sorted[i - 1];
        if (i === 0 || currentProduct[0] !== previousProduct[0]) {
            console.log(currentProduct[0]);
        }
        console.log(`${currentProduct}: ${result[currentProduct]}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])