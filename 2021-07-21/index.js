function rockPaperScissors (roundCount) { 

    roundCount = roundCount || 3;

    const plays = ['rock', 'paper', 'scissors'];
    let result = [];

    function findPermutation (roundCount, playedSoFar) {
        //재귀로 roundCount까지 출력이니까, 재귀 돌때마다 1씩 빼서 roundCount가 0이되면 멈추고, 반환할 배열에 만든 all possible solutions 배열을 넣는다.
        if (roundCount === 0) return result.push(playedSoFar);

        for (let i = 0; i < plays.length; i++) {
            findPermutation(roundCount - 1, playedSoFar.concat(plays[i]))
        }
    }
    findPermutation(roundCount, []);
    return roundCount === 0 ? [] : result;
}

console.log(rockPaperScissors(3))