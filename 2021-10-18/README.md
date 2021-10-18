# Programmers 폰켓몬

## 문제 이해

- 주어진 폰켓몬에서 N/2만큼의 폰켓몬을 고를 수 있다.
- N/2 개수에서 최대한 다양하게 가져갈 수 있는 방법을 찾는 문제

## 계획

- nums 배열 안에 중복되는 폰켓몬들을 제거한다.
- 중복 제거한 배열의 개수 < N/2 --> 중복 제거한 종류의 수를 반환
- 중복 제거한 배열의 개수 > N/2 --> N/2 길이 반환

## 느낀점

- for문으로도 문제를 풀어봤다.

```js
function solution(nums) {
	// 폰켓몬 가질 수 있는 수
	let amount = nums.length / 2;
	nums.sort((a, b) => a - b);
	let result = [];
	let temp = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== temp) {
			result.push(nums[i]);
			//temp에 재할당해서 temp와 nums[i] 다시 비교
			temp = nums[i];
		}
	}
	return amount < result.length ? amount : result.length;
}
```
