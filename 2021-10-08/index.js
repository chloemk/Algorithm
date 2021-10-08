//special sort - 버블정렬
//이웃한 것과 비교해서 정렬
//n개의 정수가 입력되면 입력된 값을 정렬
function solution(arr) {
	let answer = arr;
	for (let i = 0; i < arr.length - 1; i++) {
		for (j = 0; j < arr.length - i - 1; j++) {
			//앞편이 양수거나 뒷편이 음수이면
			if (arr[j] > 0 && arr[j + 1] < 0) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return answer;
}

let arr = [1, 2, 3, -3, -2, , 5, 6, -6];
console.log(solution(arr));
