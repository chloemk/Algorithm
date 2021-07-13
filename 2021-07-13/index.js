function solution(k, coins) {
    let result = 0;

    // 큰 동전부터 탐색
    for (let i = coins.length - 1; i >= 0; i--) {
        // 현재 코인
        let cur = coins[i];
        // k를 현재 동전의 가치로 나눈다
        let quantity = Math.floor(k / cur);

        // 몫이 0일 경우 현재 동전 사용 불가
        if (quantity === 0) continue;

        //몫이 있는 경우 동전 사용개수 quantity를 반환 값에 더해준다
        result += quantity;
        k %= cur;

        //k원을 만든 경우 종료
        if (k === 0) break;
    }
    return result;
}

let n = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
let k = 4200;
console.log(solution(k, n)); 
