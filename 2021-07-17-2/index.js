function solution(left, right) {
    let count = 0;
    let result = 0;
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++
        }
        if (count % 2 === 0) result += i;
        else result -= i;
        count = 0; 
    }
    return result;
}

console.log(solution(13, 17));