var twoSum = function (nums, target) {
	//Map 객체를 만들고
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let cur = target - nums[i];
		//만약 map 객체에 target에서 현재 선택한 숫자를 뺀 값이 있다면 두가지 숫자만 찾는 조건에 부합하기 때문에 리턴
		if (map.has(cur)) {
			return [map.get(cur), i];
		} else {
			//map객체에 요소 추가 (요소, 인덱스)
			map.set(nums[i], i);
		}
	}
	return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
