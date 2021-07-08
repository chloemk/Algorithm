function solution(number, k) {
    let stack = [];
    let answer = '';

    for (let i = 0; i< number.length; i++) {
        //현재 요소 변수에 담아 놓는다.
        let cur = number[i];

        //k가 0보다 크다는 건 아직 뺄 것이 있다는 의미. 
        //스택에 있는 요소가 현재요소(cur) 작은 경우 --> 큰 숫자가 앞에 와야하기 때문에
        while (k > 0 && stack[stack.length - 1] < cur) {
             //스택에서 빼준다. 
            stack.pop();
            //하나씩 스택에서 뺄 때마다 k도 감소
            k--;
        }
        //스택에서 뺄게 있던 없던 푸쉬 
        stack.push(cur);
    }
    stack.splice(stack.length - k, k); //테스트케이스 12번 통과 못함 (동일한 수만 들어올 경우 대비)
    answer = stack.join('')
    return answer;
}

console.log(solution("1924", 2));