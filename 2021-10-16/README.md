# Programmers 콜라츠 추측

## 문제 이해

- num이 짝수라면 2로 나눈다.
- num이 홀수라면 3을 곱하고 1을 더한다.
- num이 1이 될 때까지 위 작업을 총 몇번하는지 count
- num이 위 작업을 500번해도 1이 되지 않는다면 -1 반환

## 계획

- while문을 돌면서 num이 짝수라면 2로 나눈다.
- 그리고 num이 홀수라면 3을 곱하고 1을 더한다.
- num이 1이 된다면 총 몇번 이 작업을 했는지 count한 것을 리턴
- num이 위 작업을 500번해도 1이 되지 않는다면 -1 반환

## 느낀점

- 삼항연산자를 써보면 코드를 조금 더 간결하게 작성할 수 있었을 것 같다.

```js
function solution(num) {
	let count = 0;

	while (count < 500) {
		if (num === 1) return count;
		count++;
		num = num % 2 === 0 ? num / 2 : num * 3 + 1;
	}
	return -1;
}
```
