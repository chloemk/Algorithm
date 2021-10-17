# Programmers 3진법 뒤집기

## 문제 이해

- 입력받은 숫자를 3진법으로 바꿔서 앞뒤로 뒤집고, 다시 10진법으로 바꾼다

## 계획

- 입력받은 수를 toString(3); 3진법으로 변환
- split('') 문자열이 담긴 배열로 변환해서
- reverse() 요소 앞뒤를 뒤집는다.
- 배열이기 때문에 join('') 을 해서 문자열로 변환
- parseInt( ,3) 다시 10진법으로 변환

## 느낀점

- 10진법 => \*진법은 `toString(몇진법)`으로 가능하다.

```js
let num = 10;
num.toString(2); // 2진법으로 변환
```

- \*진법 => 10진법은 `Number.parseInt(입력하는 숫자, 현재 진법)`으로 가능하다.

```js
let num = 1010;
Number.parseInt(num, 2);
```
