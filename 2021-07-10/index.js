function solution(array, commands) {
    let arr = [];
    commands.forEach((cur) => {
        let sorted = array.slice(cur[0] - 1, cur[1]).sort((a, b) => a - b);
        let k = cur[2] - 1;
        arr.push(sorted[k]);
    });
    return arr;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands)); 
