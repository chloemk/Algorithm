var combine = function (n, k) {
	let result = [];

	function dfs(start, comb) {
		//k만큼의 요소로 조합하는데, 그게 트리의 height랑 같다.
		if (k === comb.length) return result.push(comb.slice());

		for (let i = start; i <= n; i++) {
			comb.push(i);
			//같은 조합 피하기 위해서 해당 숫자보다 큰 값들의 조합만 본다.
			dfs(i + 1, comb);
			console.log('콤비네이션', comb);
			comb.pop();
		}
	}
	dfs(1, []);
	return result;
};

console.log(combine(4, 2));
