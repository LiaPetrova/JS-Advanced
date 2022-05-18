function sumTable() {
    let arr = Array.from(document.querySelectorAll(' tr td:nth-child(2)'));
    let sumElement = arr.pop();
    sumElement.textContent = arr.reduce((a, x) => a + Number(x.textContent), 0);

}