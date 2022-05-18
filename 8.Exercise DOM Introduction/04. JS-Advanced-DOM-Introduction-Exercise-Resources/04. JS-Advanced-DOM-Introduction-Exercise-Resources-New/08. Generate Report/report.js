function generateReport() {
    let tableRowElement = document.querySelectorAll('tbody tr');
    let categoriesDataElement = document.querySelectorAll('thead tr th');
    for (let tableRowName of categoriesDataElement) {
        console.log(tableRowName.textContent);;

    }

    // for (let line of tableRowElement) {
    //     let pattern = /\s{2,}/g;
    //     let [x, employee, department, status, dateHired, benefits, compensation, rating] = line.textContent.split(pattern);
    //     // console.log(line.textContent);
    // }

}