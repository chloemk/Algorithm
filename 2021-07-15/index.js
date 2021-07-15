function solution(k, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    function dfs(depth, sum) {
        //만약 합이 k원보다 크거나, 깊이가 기존 값보다 크다면 종료
        if (sum > k || depth >= answer) return;
        //k원에 도달했다면 
        if (sum === k) {
            console.log(depth, sum);
            //기존 값이 더 작은지 깊이(동전의 개수)가 더 작은지 파악해 재할당
            answer = Math.min(answer, depth);
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                dfs(depth + 1, sum + arr[i]);
            }
        }
    }
    dfs(0, 0);
    return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
