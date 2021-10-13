# Programmers 없는 숫자 더하기

## 문제 이해

- 0부터 9까지의 수들 중 numbers 배열에 없는 숫자들을 더해서 리턴

## 계획

- 반복문을 0부터 9까지 돌면서 numbers 배열에 요소가 있는지 확인.
- 없다면 sum에 누적해서 리턴해준다.

## 느낀점

- 다른 풀이 중 하나는 수학적으로 접근했다.
- 0부터 9까지 더한 수에서 numbers의 요소들을 누적해서 45에서 빼준다.

```js
function solution(numbers) {
	return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
```
