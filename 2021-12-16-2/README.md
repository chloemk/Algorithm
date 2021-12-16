# LeetCode 20. Valid Parentheses

## 문제 이해

- 주어지는 s 문자열의 요소들은 brackets들로 이루어져있다. 열리는 brackets가 있으면 닫히는 brackets가 와야한다.

## 계획

- 해당 문제는 객체로도 풀 수 있다.
- 객체로 푸는 경우, 각 brackets들 끼리 key value로 지정해놓은 다음 stack에 넣었다가 빼는 형식으로 풀어야한다.
