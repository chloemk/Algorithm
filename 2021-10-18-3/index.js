function solution(s) {
	const nums = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	let answer = s;

	for (let i = 1; i < nums.length; i++) {
		//찾은 숫자 영단어 만큼 자르기
		let result = answer.split(nums[i]);
		//숫자로 대체해서 join
		answer = result.join(i);
	}
	return Number(answer);
}

const s = 'one4seveneight';
console.log(solution(s));
