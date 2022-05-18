function solve(input) {
    let obj = {};
    for (let line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (obj.hasOwnProperty(town)) {
            population += obj[town];
        }
        obj[town] = population;
    }
    Object.keys(obj).forEach(key => console.log(`${key} : ${obj[key]}`));
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])