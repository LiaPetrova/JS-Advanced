function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let resultArr = [];
    //   for (let i = 0; i < input.length; i++) {
    //     let currentNum = input[i];
    //     if (currentNum >= biggestNum) {
    //       biggestNum = currentNum;
    //       resultArr.push(currentNum);
    //     }
    //   }
    // function isBigger(x) {

    //     if (x >= biggestNum) {
    //         biggestNum = x;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // let result = input.filter(isBigger);
    function isBigger(a, x) {

        if (x >= biggestNum) {
            biggestNum = x;
            a.push(x);

        }
        return a;
    }
    input.reduce(isBigger, resultArr);
    // taka mu kazvam che a (accumulator) e ravno na resultArr, toest prazen masiv, za da moje da se pushva s nego
    // console.log(resultArr);
    return resultArr;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);