function solution(n) {
	return Number(
		String(n)
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}

const n = 118372;
console.log(solution(n));
