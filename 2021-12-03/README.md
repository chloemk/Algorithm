# LeetCode 77.Combinations

## 문제 이해

- Given two integers n and k, and return all possible combinations of k numbers out or the range [1, n]

## 계획

- 해당 문제는 조합 문제로 백트래킹과 DFS로 풀 수 있다.
- 백트래킹은 `해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법`이다.
- 백트래킹은 반복문의 횟수를 줄일 수 있어 효율 적이며, pruning(가지치기)를 얼마나 잘하는냐에 따라 효율성이 결정된다.
- 결국은 상태 공간 트리의 DFS(깊이 우선 탐색)을 실시하고, 각 노드가 promising한(지 점검을 한 후, 해당 노드가 promising하지 않는다면 부모로 돌아가서 계속 검색한다. (백트래킹)
