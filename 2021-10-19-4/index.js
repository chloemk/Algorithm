function solution(price, money, count) {
	let sum = 0;
	while (count) {
		let temp = 0;
		temp = price * count;
		sum += temp;
		count--;
	}
	let finalNum = money - sum;
	return finalNum > 0 ? 0 : Math.abs(finalNum);
}

const price = 3;
const money = 20;
const count = 4;
console.log(solution(price, money, count));
