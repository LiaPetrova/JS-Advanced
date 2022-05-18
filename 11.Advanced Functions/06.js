function solve(input) {
    let array = [];
    let actions = {
        add: (string) => array.push(string),
        remove: function(string) {
            while (array.includes(string)) {
                let index = array.indexOf(string);
                array.splice(index, 1);
            }
            return array;
        },
        print: () => console.log(array.join(','))
    };
    
    input.forEach((line) => {
        const [command, string] = line.split(' ');
        actions[command](string);
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'remove again',
    'print'
]);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])