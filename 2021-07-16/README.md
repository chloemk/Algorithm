# 토이 rotateMatrix

## 문제 이해

- 2차원 N X N 배열을 시계방향으로 90도 회전시킨 배열 리턴
- 세로와 가로 길이가 다를 경우, 시계방향으로 90도씩 K번 회전시킨 배열 리턴 (K는 두번째 params)

## 계획

- 매트릭스의 행과 열을 구한 뒤
- % 4를 해 총 몇번 회전하는지 파악.
- % 4를 해서 나온 값이 0이라면 (4번 회전한다면), 즉 회전하지 않는다면, 매트릭스를 리턴한다.
- 행과 열의 길이가 다른 매트릭스 (M X N)를 대비해, 회전 횟수가 짝수인 경우와 홀수인 경우를 나누어 준다.
- 반환할 배열 하나를 생성해, 회전횟수가 1인 경우, 2인 경우, 3인 경우에 대해 알맞게 매트릭스에 있던 요소를 넣는다.

## 느낀점

- % 를 짝수 홀수 판별에만 사용했었는데, 회전 문제에서도 유용한 것을 알게되었다.
- 1 % 4 === 1
- 2 % 4 === 2
- 3 % 4 === 3
- 4 % 4 === 0
