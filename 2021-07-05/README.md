# Leetcode 200. Number of Islands

## 문제 이해

- 이차원 배열이 주어지고 1로 되어있는 곳은 섬,
- 0으로 되어있는 곳과 배열을 벗어난 경우는 물이다.
- 섬이 개수를 return 하는 문제.

## 계획

- 그리드를 이중 포문으로 순회하면서 1이 있는지 파악
- 1이 있다면 상하좌우 탐색
- 탐색할 때의 중요한 조건은 그리드의 범위를 넘는지? 정점이 1인지 살펴본다.
- 조건에 부합한다면 방문했던 곳은 2로 체크해서 재 방문하지 않는다.

## 느낀점

- 상하좌우 DFS 호출하면서 풀 수도 있고,

```js
const dirs = [
  [i + 1, j],
  [i - 1, j],
  [i, j + 1],
  [i, j - 1],
];
for (let [x, y] of dirs) {
  DFS(grid, x, y);
}
```

- 위와 같이 배열에 넣어놓고 구조분해할당 할 수도 있다.
- 구조분해할당을 적극적으로 이용해봐야겠다.
