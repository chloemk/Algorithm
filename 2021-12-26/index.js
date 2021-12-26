var searchInsert = function (nums, target) {
	let result = 0;
	for (i = 0; i < nums.length; i++) {
		if (target === nums[i]) {
			return (result = i);
		} else {
			if (target > nums[i] && target < nums[i + 1]) {
				return (result = i + 1);
			}
		}
	}
	return result;
};

console.log(searchInsert((nums = [1, 3, 5, 6]), (target = 7)));
