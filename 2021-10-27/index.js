function solution(N, stages) {
	//N, 스테이지 개수만큼의 배열을 만들어준다.
	//undefined로 채워진 배열을 맵핑을 하면서 채워준다.
	let result = Array.from({ length: N }).map((v, i) => {
		//게임을 시도한 사람들
		let tried = stages.length;
		//게임을 시도한 사람들 중에서 현재 스테이지(i)보다 숫자가 +1 된 사람들만 게임을 통과한 사람들이다.
		stages = stages.filter((cur) => cur > i + 1);
		//각 스테이지와 실패율을 배열안 객체로 만든다.
		return { stageNum: i + 1, failureRate: (tried - stages.length) / tried };
	});

	//실패율이 높은 스테이지부터 내림차순으로 만든다.
	//실패율이 같은 경우에는 작은 번호의 스테이지가 더 앞에 온다.
	let sorted = result.sort((a, b) =>
		a.failureRate === b.failureRate
			? a.stageNum - b.stageNum
			: b.failureRate - a.failureRate
	);
	let answer = sorted.map((cur) => cur.stageNum);
	return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
