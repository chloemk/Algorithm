function solution(absolutes, signs) {
	return absolutes.reduce((acc, cur, idx) => {
		signs[idx] ? (acc += cur) : (acc -= cur);
		return acc;
	}, 0);
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];
console.log(solution(absolutes, signs));
