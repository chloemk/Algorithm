function rotateMatrix (matrix, rotation) {
    const N = matrix.length; 
    const M = matrix[0] && matrix[0].length; 

    // % 4는 360도 다 도는 것이기 때문에 (회전 후 제자리로 돌아오기 때문에) 로테이션이 4가 들어올 경우, rotation은 0이 된다. 
    rotation = rotation % 4; 

    //회전하지 않는다면(0이라면) 매트릭스 리턴
    if (rotation === 0) return matrix;

    const rotated = [];

    //로테이션(회전횟수는) 홀수인가? 홀수라면 M X N, 짝수 회전 시 N X M 
    const evenOrOdd = rotation % 2 === 1 ? [M, N] : [N, M];

    for (let row = 0; row < evenOrOdd[0]; row++) {
        rotated[row] = [];

        for (let col = 0; col < evenOrOdd[1]; col++) {
            //회전 횟수가 1이라면 
            if (rotation === 1) rotated[row][col] = matrix[N - col - 1][row];
            //회전 횟수가 2이라면 
            else if (rotation === 2) rotated[row][col] = matrix[N - row - 1][M - col - 1];
            //회전 횟수가 3이라면
            else rotated[row][col] = matrix[col][M - row - 1];
        }
    }
    return rotated;
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
let k = 1;
console.log(rotateMatrix(matrix, k))
/*
[
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
]
*/