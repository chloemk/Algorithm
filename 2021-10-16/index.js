function solution(num) {
	let count = 0;
	while (num) {
		if (num === 1) {
			return count;
		}

		if (num % 2 === 0) {
			count++;
			num = num / 2;
		} else if (num % 2 === 1) {
			count++;
			num = num * 3 + 1;
		}

		if (count >= 500) {
			return -1;
		}
	}
	return num;
}

const num = 16;
console.log(solution(num));
