function solution(arr, divisor) {
	let result = [];
	arr.forEach((cur) => {
		if (cur % divisor === 0) result.push(cur);
	});
	if (result.length === 0) return [-1];
	return result.sort((a, b) => a - b);
}

const arr = [3, 2, 6];
const divisor = 10;
console.log(solution(arr, divisor));
