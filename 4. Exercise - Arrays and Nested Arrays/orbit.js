function orbit(input) {
    let [width, height, x, y] = input;
    let matrix = [];
    for (let h = 0; h < height; h++) {
        matrix[h] = [];
        for (let w = 0; w < width; w++) {
            matrix[h][w] = '*';
        }
    }
    matrix[x][y] = '1';
    for (let)


}
orbit([4, 4, 0, 0])