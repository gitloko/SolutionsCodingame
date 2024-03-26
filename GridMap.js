function followPath(gridMap) {
    let row = 0;
    let col = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let output = '';

    while (true) {
        if (gridMap[row][col] !== '*') {
            output += gridMap[row][col];
        }

        gridMap[row] = gridMap[row].substring(0, col) + '*' + gridMap[row].substring(col + 1);

        let nextRow = row + directions[0][0];
        let nextCol = col + directions[0][1];

        for (let i = 0; i < 4; i++) {
            if (nextRow >= 0 && nextRow < 10 && nextCol >= 0 && nextCol < 15 && gridMap[nextRow][nextCol] !== '*') {
                row = nextRow;
                col = nextCol;
                break;
            } else {
                nextRow = row + directions[i][0];
                nextCol = col + directions[i][1];
            }
        }

        if (nextRow < 0 || nextRow >= 10 || nextCol < 0 || nextCol >= 15) {
            break; // Sortir de la boucle si on atteint les bords de la grille
        }
    }

    return output;
}