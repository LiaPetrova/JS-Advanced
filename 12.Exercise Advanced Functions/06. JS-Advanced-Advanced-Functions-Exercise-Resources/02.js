function solve(arg1, arg2, arg3) {
    let objTypes = {};
    let objCounts = {};

    function typeCheck(arg) {
        let type = typeof(arg);
        objTypes[type] = arg;
        if (!objCounts.hasOwnProperty(type)) {
            objCounts[type] = 1;
        } else {
            objCounts[type]++;
        }

    }
}
solve('cat', 42, function() { console.log('Hello world!'); })