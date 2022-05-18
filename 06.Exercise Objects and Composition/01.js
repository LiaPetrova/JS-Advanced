function calorieObject(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {

        obj[input[i]] = Number(input[i + 1]);

        // let product = input[i];
        // let calories = Number(input[i + 1]);
        // obj[product] = calories;
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])