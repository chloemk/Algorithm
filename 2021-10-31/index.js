function solution(strings, n) {
	strings.sort((a, b) => {
		let first = a[n];
		let second = b[n];

		return first === second
			? (a > b) - (a < b)
			: (first > second) - (first < second);
	});
	return strings;
}

const strings = ['sun', 'bed', 'car'];
const n = 1;
console.log(solution(strings, n));
