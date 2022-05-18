function mathOperations (num1, num2, string) {
    let result = 0;
if (string === '+') {
    result = num1 + num2;
} else if (string === '-')  {
    result = num1- num2;
}else if (string === '*')  {
    result = num1 * num2;
}else if (string === '/')  {
    result = num1 / num2;
} else if (string === '%')  {
    result = num1 % num2;
}else if (string === '**')  {
    result = num1 ** num2;
}
console.log(result);
}
mathOperations(5,6,'**')