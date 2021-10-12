# Programmers 완주하지 못한 선수

## 문제 이해

- 참가자 명단에 있지만 완주자 명단에 없는 사람을 리턴한다.

## 계획

- 참가자 배열과 완주자 배열을 오름차순 정렬을 하고 완주자 명단에 없는 사람이 있다면 리턴한다.

## 느낀점

- 두 배열을 정렬한 후 반복문을 돌면서 비교하는 방법도 가능했지만, 다른 사람의 풀이를 보니 해시 문제인 만큼 key와 value를 가지는 객체로 만들어서 푼 풀이가 있었다.

```js
function solution(participant, completion) {
	//객체로 이 사람이 있으면 value에 1을 더해주고 아니면 키 밸류를 만들어 value에 1을 넣는다.
	const list = participant.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});
	//반복문을 돌면서
	completion.forEach((cur) => {
		//완주자 명단에 있는 사람이 key value로 만든 리스트에도 있다면, 만든 리스트의 value에서 1을 감소시킨다.
		if (list[cur]) {
			list[cur] = list[cur] - 1;
		}
		//그렇게 감소 시킨 리스트 key중 value가 0이 있다면, 그 키와 밸류는 지운다.
		if (list[cur] === 0) {
			delete list[cur];
		}
	});
	//리스트에서 지워서 남는 사람은 완주를 하지 못한 사람
	return Object.keys(list)[0];
}

console.log(solution(participant, completion));
```
