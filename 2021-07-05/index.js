function numIslands(grid) {
    let count = 0;

    function DFS(x, y) {
        if (x >= 0 && y >= 0 && x < grid.length && y < grid[x].length && grid[x][y] === '1') { 
        grid[x][y] = '2';
        DFS(x, y - 1)
        DFS(x + 1, y)
        DFS(x, y + 1)
        DFS(x - 1, y)
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count ++;
                DFS(i, j);
            }
        }
    }
    return count;
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];
console.log(numIslands(grid));