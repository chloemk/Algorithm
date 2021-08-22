function solution(s) {
	return s
		.toLowerCase()
		.split(' ')
		.map((cur) => {
			if (cur !== null) {
				return cur[0].toUpperCase() + cur.slice(1);
			}
		})
		.join(' ');
}

console.log(solution('3people unFollowed me'));
