function solution(a, b) {
	let result = '';

	const now = new Date(`2016 ${a} ${b}`);

	result = now.toString().split(' ')[0].toUpperCase();

	return result;
}

const a = 5;
const b = 24;
console.log(solution(a, b));
