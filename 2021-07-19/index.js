const spiralTraversal = function (matrix) {
    //나선형 순회가 된 반환할 배열
    let result = [];

    //matrix에서 모든 요소를 result에 넣을 때까지 반복
    while (matrix.length > 0) {
        //가로줄일 경우
        let first = matrix.shift();
        result.push(...first);

        //가로줄을 result에 넣었다면, 세로줄은 각 배열의 마지막 원소를 빼서 (pop)result에 넣는다.
        for (let i = 0; i < matrix.length; i++) {
            let cur = matrix[i].pop();

            //각 배열의 마지막 원소가 존재한다면 (true)
            if (cur) {
                result.push(cur); 
                matrix[i].reverse();
            }
        }
        matrix.reverse(); 
    }
    return result;
};

const matrix = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
];

console.log(spiralTraversal(matrix));