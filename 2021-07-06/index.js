function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let count = [0, 0, 0];
    //answers 배열 
    for (let i = 0; i < answers.length; i++) {
        if (supo1[i % 5] === answers[i]) count[0]++;
        if (supo2[i % 8] === answers[i]) count[1]++;
        if (supo3[i % 10] === answers[i]) count[2]++;
    }

    // 수포자들의 점수 중 최대값 구하기
    let max = Math.max(...count);
    let result = [];

    // 최대값과 일치한 값을 가진다면 result에 저장
    for (let i = 0; i < count.length; i++) {
        if (max === count[i]) result.push(i + 1);
    }
    return result;
}

console.log(solution([1,3,2,4,2]))