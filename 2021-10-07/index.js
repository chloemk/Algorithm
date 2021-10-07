//버블 정렬: 이웃한 두 수끼리 비교해서 뒤에가 작으면 바꿔준다
//버블정렬의 핵심은 가장 큰 수가 마지막 인덱스를 결정하는 것

function solution(arr) {
	let answer = arr;

	for (let i = 0; i < arr.length - 1; i++) {
		for (j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
