function solution() {
    let result = '';
    let actions = {
        append: (str) => result += str,
        removeStart: (n) => result = result.slice(n),
        // removeStart: (n) => result = result.substring(n),
        removeEnd: (n) => result = result.substring(0, -n),
        // removeEnd: (n) => result = result.slice(0, -n),
        print: () => console.log(result)
    }
    return actions;
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();