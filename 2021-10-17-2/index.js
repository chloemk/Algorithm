function solution(n) {
	return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

const n = 45;
console.log(solution(n));
