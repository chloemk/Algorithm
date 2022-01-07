var maxProfit = function (prices) {
	let answer = 0;

	let min = prices[0];

	for (let i = 1; i < prices.length; i++) {
		min = Math.min(prices[i], min);
		answer = Math.max(answer, prices[i] - min);
	}
	return answer;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
