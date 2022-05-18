function solve(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];
    let countEmpltySpaces = 9;
    let isXPlayerTurn = true;
    let thereIsAWinner = false;
    let player = "";
    for (let i = 0; i < input.length; i++) {

        let [row, index] = input[i].split(" ");
        row = Number(row);
        index = Number(index); // parsevaneto ne e neobhodimo!
        let currentMove = dashboard[row][index];
        if (!currentMove) {
            if (isXPlayerTurn) {
                player = "X";
                isXPlayerTurn = false;
            } else {
                player = "O";
                isXPlayerTurn = true;
            }
            dashboard[row][index] = player;
            countEmpltySpaces--;
        } else {
            console.log("This place is already taken. Please choose another!");
        }
        let Owins = "O O O";
        let Xwins = "X X X";
        let line1 = dashboard[0].join(' ');
        let line2 = dashboard[1].join(' ');
        let line3 = dashboard[2].join(' ');

        let column1 = [dashboard[0][0], dashboard[1][0], dashboard[2][0]].join(' ');
        let column2 = [dashboard[0][1], dashboard[1][1], dashboard[2][1]].join(' ');
        let column3 = [dashboard[0][3], dashboard[1][3], dashboard[2][3]].join(' ');

        let diagonal1 = [dashboard[0][0], dashboard[1][1], dashboard[2][2]].join(' ');
        let diagonal2 = [dashboard[0][2], dashboard[1][1], dashboard[2][0]].join(' ');


        if (
            line1 === Owins ||
            line2 === Owins ||
            line3 === Owins ||
            column1 === Owins ||
            column2 === Owins ||
            column3 === Owins ||
            diagonal1 === Owins ||
            diagonal2 === Owins
        ) {
            console.log(`Player O wins!`);
            thereIsAWinner = true;
            break;
        }
        if (
            line1 === Xwins ||
            line2 === Xwins ||
            line3 === Xwins ||
            column1 === Xwins ||
            column2 === Xwins ||
            column3 === Xwins ||
            diagonal1 === Xwins ||
            diagonal2 === Xwins
        ) {
            console.log(`Player X wins!`);
            thereIsAWinner = true;
            break;
        }
        if (countEmpltySpaces === 0) {
            break;
        }
    }
    if (!thereIsAWinner) {
        console.log("The game ended! Nobody wins :(");
    }
    for (row of dashboard) {
        console.log(row.join('\t'));
    }
}
// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// solve(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]);
solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
])