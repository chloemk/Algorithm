# Programmers JadenCase

## 문제 이해

- 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열 만들기
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 써야한다.
- ex) "3people unFollowed me" -> "3people Unfollowed Me"

## 계획

- 모두 소문자로 만든 훈 띄어쓰기 기준으로 문자열을 잘라서 배열로 만들어준다.
- map을 사용해서 원소 하나씩을 순회해서 JadenCase로 만들어준다.
- join을 이용해서 문자열로 다시 만든다.

## 느낀점

- 첫 번째 시도 --> 테스트 케이스의 반절 런타임 에러

```js
function solution(s) {
	let arr = s.split(' ');
	let st = arr.map((cur) => {
		return cur[0].toUpperCase() + cur.slice(1, cur.length).toLowerCase();
	});
	return st.join(' ');
}
```
