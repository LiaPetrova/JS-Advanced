function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let firstNumAsNumber = Number(firstNumber);
    let secondNumber = document.getElementById('secondNumber').value;
    let secondNumAsNumber = Number(secondNumber);
    let result = document.getElementById('result');
    result.textContent = firstNumAsNumber - secondNumAsNumber;
}