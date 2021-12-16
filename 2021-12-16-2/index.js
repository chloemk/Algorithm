let obj = {
	'(': ')',
	'{': '}',
	'[': ']',
};
var isValid = function (s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		let cur = s[i]; // '('

		if (obj[cur]) {
			stack.push(obj[cur]);
		} else {
			// 스택에서 뺀 맨 위 요소와 일치하지 않는다면 false 리턴
			if (cur !== stack.pop()) {
				return false;
			}
		}
	}
	// true 반환
	return stack.length === 0;
};

console.log(isValid('()[]{}'));
