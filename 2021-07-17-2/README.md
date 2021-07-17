# 프로그래머스 약수의 개수와 덧셈

## 문제 이해

- left부터 right까지의 숫자들 중, 각 수의 약수의 개수가 짝수일 경우 더하고, 홀수인 수는 뺀다.

## 계획

- left부터 right까지 반복문을 돈다.
- 약수를 구하기 위해선 left부터 right 사이의 수를 1부터 해당 숫자까지 나눴을 때 깔끔하게 나누어 떨어지는 수가 (나머지가 0이 되는 수) 몇개인지 알아본다. --> 약수 구하기
- 해당 숫자의 약수의 개수가 짝수 / 홀수 여부 파악해 더하고, 뺀다.

## 느낀점

- 약수 : 나머지가 없이 떨어진는 수
- 다른사람 풀이 중, 제곱근이 정수(Integer)면, 약수의 개수는 홀수고, 정수가 제곱근을 했을 때 정수가 아닌, 예를들어 소수가 나온다면, 약수의 개수는 짝수이다.

```js
function solution(left, right) {
  const result = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) result -= i;
    else result += i;
  }
  return result;
}
```
