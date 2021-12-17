var maxSubArray = function (nums) {
	let maxSub = nums[0];
	let curSum = 0;
	for (i = 0; i < nums.length; i++) {
		// negative prefix가 되면 0으로 초기화 시킨다.
		if (curSum < 0) {
			curSum = 0;
		}
		curSum += nums[i];
		// 둘 중 큰 것을 maxSub에 할당
		maxSub = Math.max(maxSub, curSum);
	}
	return maxSub;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
