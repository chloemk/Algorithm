function solution(citations) {
    //내림차순 정렬
    citations = citations.sort((a, b) => b - a);

    //피인용수(citations[i])가 논문수와 같아지거나 피인용수가 논문수(i)보다 작아지기 시작하는 숫자가 h이다.
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= i) return i;
    }
    //테스트케이스 9번이 통과되지 않았는데, 가령 [22, 42]가 들어왔다고 가정했을 때, 이는 숫자의 갯수보다 큰 경우다. 2가 나와야한다. 그리고 0이 아닌 값 하나만 들어오는 경우에도 1이 나와야한다. 
    return citations.length;
}

console.log(solution([3, 0, 6, 1, 5])); 