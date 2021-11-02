# Programmers 문자열 내 마음대로 정렬하기

## 문제 이해

- strings에 문자열이 담긴 배열이 있고, n번째 문자를 비교해서 정렬하는 문제이다.

## 계획

- sort()를 이용해 정렬을 하면 된다.

## 느낀점

sort()

- function(a, b) < 0 이면 a를 b보다 작은 인덱스로 정렬한다.
- function(a, b) == 0 이면 a와 b의 순서를 바꾸지 않는다.
- function (a, b) > 0 이면 b를 a보다 작은 인덱스로 정렬한다.
