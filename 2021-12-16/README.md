# LeetCode Two Sums

## 문제 이해

- 반복문을 두번 iterate 하면된다고 생각해서 문제를 풀었다. 하지만 Map 객체로 만들어 푸는 방법도 있어 다시 풀어보았다.

## 배운 것

### Map

- Map 객체는 key와 value가 쌍으로 이루어진 컬렉션이다.
- 객체와 유사하지만 차이점이 있음
- Map 생성자 함수는 iterable (순회할 수 있는 것)을 인수로 전달받아 Map 객체를 생성하게 된다. 이때 전달되는 iterable은 키와 값 쌍으로 이루어진 요소로 구성된다.
- 중복되는 key는 객체에 저장되지 않는다. (추가도 안됨)
- Map 객체 순회 시 `forEach` 메서드 사용 (첫번째 인수: 순회 중인 요소값, 두번째 인수: 순회 중인 요소키, 세번째 인수: 순회중인 Map객체)

```js
// Map 생성자 함수로 Map 객체 생성
const map = new Map(); // Map(0) {}

const map1 = new Map([
	['1번key', '1번값'],
	['2번key', '2번값'],
]);

// 요소 개수 확인 시 Map.prototype.size 프로퍼티 사용 - getter 함수만 존재하는 접근자 프로퍼티
map1.size; // 2

// 요소 추가 시 Map.prototype.set 프로퍼티 사용
map1.set('3번key', '3번값');

// 요소 취득 시  Map.prototype.get 프로퍼티 사용 - 취득하지 못할 경우 undefined 반환
map1.get('3번key'); // '3번값'

// 요소 존재 여부 확인 시  Map.prototype.has 프로퍼티 사용
map1.has('3번key'); // true

// 요소 삭제 시 Map.prototype.delete 프로퍼티 사용
map1.delete('3번key');

// 요소 일괄 삭제 시 Map.prototype.clear 프로퍼티 사용
map1.clear();
```
