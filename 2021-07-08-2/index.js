function solution(citations) {
    let answer = 0;
    //전체 논문중 많이 이용된 수로 (내림차순)으로 정렬
    citations = citations.sort((a, b) => b - a); //[6, 5, 3, 1, 0]

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) answer++;
    }
    return answer;
}

console.log(solution([3, 0, 6, 1, 5])); 
