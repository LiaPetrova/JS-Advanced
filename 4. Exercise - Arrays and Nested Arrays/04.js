function solve(arr, countRotations) {
    let countRot = countRotations % arr.length;
    // for ( let i = 0; i < countRotations; i++) {
    //     let element = arr.pop();
    //     arr.unshift(element);
    // }
    for (let i = 0; i < countRot; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15)