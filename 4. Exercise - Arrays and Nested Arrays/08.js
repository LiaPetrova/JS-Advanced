function solve(input) {
    //   input
    //     .sort((a, b) => a.length - b.length || a.localeCompare(b))
    //     .forEach((x) => console.log(x));
    input.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    }).forEach((x) => console.log(x));
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);