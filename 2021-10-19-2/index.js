function solution(n) {
	n = n.toString();
	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		sum += Number(n[i]);
	}
	return sum;
}

const n = 987;
console.log(solution(n));
