function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);
    let inputElement = document.querySelector("textarea");

    function onClick() {
        let textArrElement = JSON.parse(inputElement.value);
        let obj = {};
        for (let singleRestaurant of textArrElement) {
            let [restaurantName, workers] = singleRestaurant.split(" - ");
            workers = workers.split(", ");
            if (!obj.hasOwnProperty(restaurantName)) {
                obj[restaurantName] = { bestSalary: 0, averageSalary: 0, workers: {} };
            }

            for (let singleWorker of workers) {
                let [workerName, salary] = singleWorker.split(" ");
                salary = Number(salary);
                obj[restaurantName].workers[workerName] = salary;
            }
            let workersCount = Object.keys(obj[restaurantName].workers).length;
            let averageSalary = (Object.values(obj[restaurantName].workers).reduce((a, x) => a + x, 0)) / workersCount;
            let bestSalary = Object.values(obj[restaurantName].workers).sort((a, b) => b - a)[0];
            obj[restaurantName].bestSalary = bestSalary;
            obj[restaurantName].averageSalary = averageSalary;
        }
        let bestRestaurant = Object.keys(obj).sort(
            (a, b) => obj[b].averageSalary - obj[a].averageSalary
        )[0];
        let textToBestRestaurant = `Name: ${bestRestaurant} Average Salary: ${obj[
      bestRestaurant
    ].averageSalary.toFixed(2)} Best Salary: ${obj[
      bestRestaurant
    ].bestSalary.toFixed(2)}`;
        let bestRestaurantElement = document.querySelector("#bestRestaurant p");
        bestRestaurantElement.textContent = textToBestRestaurant;

        let workersString = "";
        Object.keys(obj[bestRestaurant].workers)
            .sort((a, b) => obj[bestRestaurant].workers[b] - obj[bestRestaurant].workers[a])
            .forEach((key) => {
                workersString += `Name: ${key} With Salary: ${obj[bestRestaurant].workers[key]} `;
            });
        let workersElement = document.querySelector("#workers p");
        workersElement.textContent = workersString;
    }
}

// function solve() {
//     document.querySelector('#btnSend').addEventListener('click', onClick);
//     let inputElement = document.querySelector('textarea');

//     function onClick() {
//         let textArrElement = JSON.parse(inputElement.value);
//         let averageSalary = 0;
//         let bestRestaurant = '';
//         let bestSalary = 0;
//         let workersString = '';

//         for (let singleRestaurant of textArrElement) {
//             let [restaurantName, workers] = singleRestaurant.split(' - ');
//             let averageSum = 0;
//             let currentAverageSalary = 0;
//             let currentBestSalary = 0;
//             let currentWorkersString = '';
//             workers = workers.split(', ');

//             for (let singleWorker of workers) {
//                 let [workerName, salary] = singleWorker.split(' ');
//                 salary = Number(salary);
//                 averageSum += salary;
//                 if (salary > currentBestSalary) {
//                     currentBestSalary = salary;
//                 }
//                 // Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…"
//                 currentWorkersString += `Name: ${workerName} With Salary: ${salary} `

//             }
//             currentAverageSalary = averageSum / workers.length;
//             if (averageSalary < currentAverageSalary) {
//                 averageSalary = currentAverageSalary;
//                 bestRestaurant = restaurantName;
//                 bestSalary = currentBestSalary;
//                 workersString = currentWorkersString;

//             }
//         }
//         //Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}"
//         let textToBestRestaurant = `Name: ${bestRestaurant} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
//         let bestRestaurantElement = document.querySelector('#bestRestaurant p');
//         bestRestaurantElement.textContent = textToBestRestaurant;

//         let workersElement = document.querySelector('#workers p');
//         workersElement.textContent = workersString;

//     }
// }