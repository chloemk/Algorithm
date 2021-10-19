function solution(n) {
	let num = Math.sqrt(n);
	return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}

const n = 3;
console.log(solution(n));
