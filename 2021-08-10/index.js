function solution(numbers, target) {
	let answer = 0;

	function dfs(nodeIdx, sum) {
		//leaf node(자식노드가 없는 노드) 도착 시 모든 numbers 탐색
		if (nodeIdx === numbers.length) {
			if (sum === target) {
				answer++;
			}
			return;
		}
		dfs(nodeIdx + 1, sum + numbers[nodeIdx]); //left child는 +
		dfs(nodeIdx + 1, sum - numbers[nodeIdx]); //right child는 -
	}
	dfs(0, 0); //처음 시작 개수는 0, 합계 0으로 시작해서 경우의 수를 dfs로 탐색
	return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));
