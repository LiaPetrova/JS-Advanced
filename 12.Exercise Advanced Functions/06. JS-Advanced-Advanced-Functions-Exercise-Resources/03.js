function getFibonator() {
    // let index = 0;
    // let fibonacciSequence = [];
    // let currentN = 1;

    // function currentNum() {
    //     if (index > 1) {
    //         currentN = fibonacciSequence[index - 1] + fibonacciSequence[index - 2];
    //     }
    //     fibonacciSequence.push(currentN);
    //     index++;
    //     return currentN;
    // }
    // return currentNum;
    let [a, b] = [0, 1];

    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }

}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13