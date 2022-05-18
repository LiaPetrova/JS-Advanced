function validityChecker(x1, y1, x2, y2) {
    function pointToCenter(a, b) {
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (c === Math.trunc(c)) {
            return `{${a}, ${b}} to {0, 0} is valid`
        } else {
            return `{${a}, ${b}} to {0, 0} is invalid`
        }
    }

    function pointToPoint(x1, y1, x2, y2) {
        let dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if (dist === Math.trunc(dist)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
        }
    }
    console.log(pointToCenter(x1, y1));
    console.log(pointToCenter(x2, y2));
    console.log(pointToPoint(x1, y1, x2, y2));

}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1)