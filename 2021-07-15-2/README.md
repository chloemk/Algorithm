# 연습문제 중복순열 구하기

## 문제 이해

- 1~N 번호의 공이 있고, 중복을 허락해 M개 만큼의 공을 나열한다.

## 계획

- M개만큼의 공을 나열할 것이기 때문에, M개만큼 들어갈 수 있는 배열을 만든다.
- dfs함수를 생성해서 함수 안에, base case를 depth(깊이)가 M과 같을 때로 지정해야한다. --> 트리구조형태로 밑으로 뻗어나가는 깊이는 공을 몇개를 선택하느냐와 동일하기 때문.
- 깊이를 최대한 갔다면 (depth === M), 반환할 배열에 임시배열에 M만큼 숫자 공을 넣어 놓은 배열을 푸쉬해준다.
- 그렇지 않다면 n만큼 순회를 해서 깊이를 하나 더 내려가는 방식으로 dfs 호출

## 느낀점

- 필요한 값 만큼의 배열을 만들어 값을 넣은 다음 반환할 배열에 푸쉬하는 것도 좋은 방법인 것 같다.
