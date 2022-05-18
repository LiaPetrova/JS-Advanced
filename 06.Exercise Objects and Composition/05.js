function solve(input) {
    let result = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!result.hasOwnProperty(product)) {
            result[product] = {};
            result[product] = { town, price };
        }
        if (result[product].price > price) {
            result[product] = { town, price };

        }

    }

    Object.keys(result).forEach(key => console.log(`${key} -> ${result[key].price} (${result[key].town})`))
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 1',
    'Sofia | Peach | 2',
    'New York | Sample Product | 999',
    'New York | Burger | 10'
])