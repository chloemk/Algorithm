# Programmers 숫자의 표현

## 문제 이해

- 자연수 n을 연속한 자연수들로 표현하는 방법이 몇가지인지 리턴

## 계획

- 연속된 숫자의 합이기 때문에 이중 반복문을 사용하여 1부터 더하다가 n과 sum이 같아지면 count를 올려주고 break 한다.
- 만약 sum이 n보다 커지는 경우는 없으므로 바로 break를 하고 다음으로 넘어간다.
- n은 n 하나로도 자신이 될 수 있으므로 반복문에서 1부터 시작한다.

## 느낀점

- 첫번째 시도 -> 런타임 에러

```js
function solution(n) {
	let count = 0;
	function foo(sum, current) {
		if (n === sum) return true;
		if (n < sum) return false;

		return foo(sum + current, current + 1);
	}
	for (let i = 1; i <= n; i++) {
		if (foo(0, i)) count++;
	}
	return count;
}
```
