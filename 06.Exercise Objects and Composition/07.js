function solve(input) {
    let result = [];
    let [town, latitude, longitude] = input.shift().slice(2, -2).split(' | ');

    for (let line of input) {
        let [townP, latitudeP, longitudeP] = line.slice(2, -1).split(' | ');
        latitudeP = Number(latitudeP).toFixed(2)
        longitudeP = Number(longitudeP).toFixed(2);

        result.push({
            [town]: townP,
            [latitude]: Number(latitudeP),
            [longitude]: Number(longitudeP)
        });
    }

    console.log(JSON.stringify(result));
}
solve([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);