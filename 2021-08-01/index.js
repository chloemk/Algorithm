function sortArray(nums) {
	let length = nums.length;
	let half = Math.floor(length / 2 - 1);

	for (let i = half; i >= 0; i--) {
		heapSort(nums, i, length);
	}
	//work backwards, 가장 큰 엘리먼트를 배열의 끝으로 위치시킨다.
	for (let j = length - 1; j >= 0; j--) {
		//swap
		[nums[j], nums[0]] = [nums[0], nums[j]];
		//re-heapify array from beginning to the end of the unsorted section
		heapSort(nums, 0, j);
	}
	return nums;
}

//최대힙구조 생성
function heapSort(nums, i, length) {
	let largest = i;
	let leftIdx = i * 2 + 1;
	let rightIdx = i * 2 + 2;

	//부모가 왼쪽 자식보다 작다면 왼쪽 자식을 부모로 올려준다.
	if (leftIdx < length && nums[largest] < nums[leftIdx]) largest = leftIdx;

	//부모가 오른쪽 자식보다 작다면 오른쪽 자식을 부모로 올려준다.
	if (rightIdx < length && nums[largest] < nums[rightIdx]) largest = rightIdx;

	//부모노드가 가장 큰 값이 아니라면, 부모가 가장 큰 값이 되도록 swap해준다.
	if (largest !== i) {
		//swap
		[nums[largest], nums[i]] = [nums[i], nums[largest]];
		heapSort(nums, largest, length);
	}
}

console.log(sortArray([4, 10, 3, 5, 1]));
