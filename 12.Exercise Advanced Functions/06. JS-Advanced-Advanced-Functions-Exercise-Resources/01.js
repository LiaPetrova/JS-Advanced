function solve(input, order) {
    if (order === 'asc') {
        return ascOrder(input);
    } else {
        return descOrder(input);
    }

    function ascOrder(arr) {
        return arr.sort((a, b) => a - b);
    }

    function descOrder(arr) {
        return arr.sort((a, b) => b - a);
    }

}
console.log(solve([14, 7, 17, 6, 8], 'desc'));