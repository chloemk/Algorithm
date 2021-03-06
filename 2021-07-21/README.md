# Toy rock paper scissors

## 문제 이해

- rock, paper, scissors 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수 작성

## 계획

- 인풋 값으로 가위바위보 배열이 들어오지 않기 때문에 만들어준다.
- 문제에 의하면, 인풋 값으로 들어오는 값(숫자)가 있을 수도 있고 없을 수도 있다. (rounds = rounds || 3)
- permutate 함수를 만들어서, 재귀를 돌 때마다 rounds의 카운트를 -1씩 해, 재귀의 base case를 rounds가 0이 될때, (한가지의 경우의 수를 만든 경우) 만든 경우의 수중 하나를 반환할 배열에 넣는다.
- 이런 식으로 모든 호출의 반복문이 끝날 때까지 반복해서 반혼할 배열에 넣고 리턴한다.

## 느낀점

- 매개변수가 들어올 경우 그대로 사용하고, 없다면 3(기본)을 사용한다는 것을 아래와 같이 표현할 수 있다.

```js
params = params || 3;
```

- 아무 값이 들어오지 않을 경우 주로 코드 가장 윗부분에서 처리를 해주었는데, 리턴 부분에서 삼항연산자를 사용해서 끝내는 방법도 좋은 것 같다.

```js
roundCount === 0 ? [] : result;
```
