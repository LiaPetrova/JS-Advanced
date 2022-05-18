function diagonalSums (input) {
    let index = 0;
    let sumMainDiagonal = 0;
    let sumsecondaryDiagonal = 0;
for (let i = 0; i < input.length; i++) {
   sumMainDiagonal += input[i][index++];

}
index--;
for (let i = 0; i < input.length; i++) {
    sumsecondaryDiagonal += input[i][index--];
 
 }
console.log(sumMainDiagonal,sumsecondaryDiagonal);


}
diagonalSums ([[20, 40],
    [10, 60]])
diagonalSums ([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])