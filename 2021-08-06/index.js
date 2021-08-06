function solution (d, budget) {
    let total = 0;
    let count = 0;
    d.sort((a, b) => a - b);

    for (let i = 0; i < d.length; i++) {
        if (total + d[i] <= budget) {
            total += d[i];
            count++;
        }
    }
    return count;
}

console.log(solution([1,3,2,5,4], 9));