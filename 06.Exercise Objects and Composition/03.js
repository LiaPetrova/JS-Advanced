function solve(inputObj) {
    function getEngine(power) {
        power = inputObj.power;
        let engines = {
            smallEngine: { power: 90, volume: 1800 },
            normalEngine: { power: 120, volume: 2400 },
            MonsterEngine: { power: 200, volume: 3500 },
        };
        if (power <= 90) {
            return engines.smallEngine;
        } else if (power > 90 && power < 200) {
            return engines.normalEngine;
        } else {
            return engines.MonsterEngine;
        }
    }

    function getWheels() {
        let wheelSize = inputObj.wheelsize;

        if (wheelSize % 2 === 0) {
            wheelSize--;
        }
        let arr = new Array(4).fill(wheelSize, 0, 4);
        return arr;
    }

    let result = {
        model: inputObj.model,
        engine: getEngine(),
        carriage: { type: inputObj.carriage, color: inputObj.color },
        wheels: getWheels(),
    };
    return result;
}

console.log(solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
}));