# Programmers 2016년

## 문제 이해

- 2016년 a월 b일은 무슨 요일인지 구하는 문제.

## 계획

- new Date 객체로 2016년 a월 b일을 받아온다.
- 스트링 형태로 변환해주면 요일이 나온다.
- 요일을 잘라서 대문자로 만든 후 리턴해준다.

## 느낀점

- 다른 사람들 풀이 중 정말 다양한 방법들이 있었다.

```js
function getDayName(a, b) {
	let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	let date = new Date(`2016-${a}-${b}`);
	let day = date.getDay(); // 2
	return arr[day];
}
```
