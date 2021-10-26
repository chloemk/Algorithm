function solution(lottos, win_nums) {
	//로또 번호를 몇개 맞췄는지 개수 반환
	let lowestCount = lottos.filter((cur) => win_nums.includes(cur)).length;

	//동생이 지운 숫자의 개수와(0의 개수) 맞춘 숫자를 더한다.
	let highest = lowestCount + lottos.filter((cur) => cur === 0).length;

	const getResult = (count) => {
		if (count <= 1) return 6;
		else return 7 - count;
	};

	return [getResult(highest), getResult(lowestCount)];
}

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));
