function solution() {
    let supplies = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function readInput(input) {
        let result = '';
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);
        switch (command) {
            case 'restock':
                restock();
                break;
            case 'prepare':
                prepare();
                break;
            case 'report':
                report();
                break;
        }

        function restock() {
            supplies[product] += quantity;
            result = 'Success';
        }

        function report() {
            let reportResult = [];
            Object.keys(supplies).forEach(key => reportResult.push(`${key}=${supplies[key]}`));
            result = reportResult.join(' ');
        }

        function prepare() {
            let ingredience = recipies[product];
            // Object.keys(ingredience).forEach((key) => {
            //     if (supplies[key] < (ingredience[key] * quantity)) {
            //         return result = `Error: not enough ${key} in stock `;

            //     }
            // });
            // return result = 'Success';
            let ingrArr = Object.keys(ingredience);
            for (let key of ingrArr) {
                if (supplies[key] < ingredience[key] * quantity) {
                    return result = `Error: not enough ${key} in stock`;
                }
            }
            for (let key of ingrArr) {
                supplies[key] -= (ingredience[key] * quantity);
            }
            return result = 'Success';
        }
        return result;
    }
    return readInput;

}

let manager = solution(); 
// console.log(manager("report"));  // Success 

// console.log(manager("restock flavour 50"));  // Success 
// console.log(manager("report")); 
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock flavour 50 "));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
console.log(manager('prepare turkey 1')); 
console.log(manager('restock protein 10')); 
console.log(manager('prepare turkey 1')); 
console.log(manager('restock carbohydrate 10')); 
console.log(manager('prepare turkey 1')); 
console.log(manager('restock fat 10')); 
console.log(manager('prepare turkey 1')); 
console.log(manager('restock flavour 10')); 
console.log(manager('prepare turkey 1')); 
console.log(manager('report')); 