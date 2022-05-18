function solve() {
    const quickCheckButtonElement = document.getElementsByTagName('button')[0];
    quickCheckButtonElement.addEventListener('click', checkResult);
    let isSolved = true;
    let tableRowElements = Array.from(document.querySelectorAll('tbody tr'));
    const resultTextElement = document.querySelector('#check p');
    const tableElement = document.getElementsByTagName('table')[0];

    function checkResult() {
        let matrix = [];
        for (let row of tableRowElements) {
            const singleBoxElements = Array.from(row.children);

            let currentRowArray = [];
            for (let singleBox of singleBoxElements) {
                currentRowArray.push(singleBox.children[0].value);
            }
            matrix.push(currentRowArray);
        };

        for (let i = 0; i < 3; i++) {
            if (!(matrix[i][0] !== matrix[i][1] && matrix[i][1] !== matrix[i][2] && matrix[i][0] !== matrix[i][2])) {
                isSolved = false;
                break;
            }
            if (!(matrix[0][i] !== matrix[1][i] && matrix[1][i] !== matrix[2][i] && matrix[0][i] !== matrix[2][i])) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            resultTextElement.textContent = 'You solve it! Congratulations!';
            resultTextElement.style.color = 'green';
            tableElement.style.border = '2px solid green';
        } else {
            resultTextElement.textContent = "NOP! You are not done yet...";
            resultTextElement.style.color = 'red';
            tableElement.style.border = '2px solid red';
        }
    }

    const clearButtonElement = document.getElementsByTagName('button')[1];
    clearButtonElement.addEventListener('click', clearAll);

    // function clearAll() {
    //     for (let row of tableRowElements) {
    //         const singleBoxElements = Array.from(row.children);
    //         for (let singleBox of singleBoxElements) {
    //             singleBox.children[0].value = '';
    //         }
    //         resultTextElement.textContent = '';
    //         resultTextElement.style.color = '';
    //         tableElement.style.border = '';
    //     };
    // }
    function clearAll() {
        window.location.reload();
    }
}