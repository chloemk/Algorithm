function solution(N, M) {
    let result = [];
    let temp = Array.from({ length: M }, () => 0);

    function dfs (depth) {
        if (depth === M) result.push(temp.slice());
        else {
            for (let i = 1; i <= N; i++) {
                temp[depth] = i;
                dfs(depth + 1);
            }
        }
    }
    dfs(0);
    return result;
}

console.log(solution(3, 2));