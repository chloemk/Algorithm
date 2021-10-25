function solution(a, b) {
	let result = a.reduce((acc, cur, idx) => {
		return (acc += cur * b[idx]);
	}, 0);
	return result;
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
console.log(solution(a, b));
