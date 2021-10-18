function solution(nums) {
	let deleteDuplicate = new Set(nums);
	let arr = [...deleteDuplicate];
	let N = nums.length;

	return N / 2 < arr.length ? N / 2 : arr.length;
}

const nums = [3, 1, 2, 3];
console.log(solution(nums));
