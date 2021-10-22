function solution(n) {
	let result = 0;
	// const arr = Array.from({ length: n }, (v, i) => i + 2); 효율성 측면에서 느림.

	// 만든 배열의 인덱스에 값을 채운다.
	const arr = new Array(n + 1);
	for (let i = 2; i <= n; i++) {
		arr[i] = i;
	}

	// 각 수의 배수에 해당하는 수는 소수가 아니므로 0으로 변환한다.
	for (let j = 2; j <= n; j++) {
		if (num[j] === 0) continue;
		for (let k = j * 2; k <= n; k += j) {
			num[k] = 0;
		}
	}

	// 0이 아닌 것들은 소수이므로 총 남은 갯수를 더한다.
	for (let i = 2; i <= n; i++) {
		if (arr[i] !== 0) result += 1;
	}
	return result;
}

console.log(solution(10));
