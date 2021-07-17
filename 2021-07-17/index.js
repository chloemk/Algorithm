function solution(n, m) {
    function GCD (a, b) {
        if (b === 0) return a;
        return GCD(b, a % b);
    }
    function LCM(a, b) {
        return a * b / GCD(a, b); 
    }
    return [GCD(n, m), LCM(n, m)];
}

console.log(solution(2, 5));