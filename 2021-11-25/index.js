function getCombination(arr, n) {
	const result = [];

	function permute(innerArr, sum, start) {
		if (sum > n) return;
		if (sum === n) {
			result.push(innerArr);
			return;
		}
		for (let i = start; i < arr.length; i++) {
			permute([...innerArr, arr[i]], sum + arr[i], i + 1);
		}
	}
	permute([], 0, 0);
	return result;
}

console.log(getCombination([2, 1, 5, 1, 0], 7));
