# Programmers 정수 제곱근 판별

## 문제 이해

- 양의 정수 n은 어떤 양의 정수 x의 제곱인지 아닌지 판단하는 문제
- n이 양의 정수 x의 제곱이면 x + 1의 제곱을 리턴
- x의 제곱이 아니라면 -1을 리턴

## 계획

- n의 제곱근을 구하고, 제곱근이 정수인지 확인한다.
- 제곱근이 정수가 맞다면 x + 1의 제곱을 리턴
- 아니라면 -1을 리턴

## 느낀점

- `Math.sqrt(숫자)` -> 숫자의 제곱근(루트)을 반환한다.
- `Math.pow(base, exponent)` -> eg) 2^3
- `Number.isInteger(값)` -> 값이 정수인지 판별. Boolean으로 리턴
  <br />
- 첫번째 시도 - 18번 케이스 미통과
- 어떤 케이스에서 통과를 못하는건지 고민을 해봤는데 모르겠다.

```js
function solution(n) {
	let num = 0;
	let result = 1;

	if (n === 1) return -1;

	while (result < n) {
		num++;
		result = Math.pow(num, 2);
	}
	return result > n ? -1 : Math.pow(num + 1, 2);
}
```
