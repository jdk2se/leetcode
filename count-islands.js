// Example 1:
//
let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
// Output: 1
// Example 2:
//
let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]
// Output: 3

// O(rows * cols) => O(n)
const countIslands = (grid) => {
    if (0 === grid.length) return 0;

    let rowsL   = grid.length;
    let colsL   = grid[0].length;
    let counter = 0;
    if (0 === colsL) return 0;

    function markNeighbour(grid, row, col) {
        grid[row][col] = '6';

        if ('1' === grid[row][col - 1]) { markNeighbour(grid, row, col - 1) }
        if ('1' === grid[row][col + 1]) { markNeighbour(grid, row, col + 1) }
        if ('1' === grid?.[row - 1]?.[col]) { markNeighbour(grid, row - 1, col) }
        if ('1' === grid?.[row + 1]?.[col]) { markNeighbour(grid, row + 1, col) }
    }

    for (let row = 0; row < rowsL; row++) {
        for (let col = 0; col < colsL; col++) {
            if ('1' === grid[row][col]) {                
                counter++;
                markNeighbour(grid, row, col);
            }    
        }
    }


    return counter;
}

console.log(countIslands(grid1));