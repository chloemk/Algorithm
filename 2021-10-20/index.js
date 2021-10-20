function solution(s) {
	let strArr = s.split(' ');
	return strArr
		.map((cur) => {
			let str = '';
			for (let i = 0; i < cur.length; i++) {
				if (i % 2 === 0) str += cur[i].toUpperCase();
				else str += cur[i].toLowerCase();
			}
			return str;
		})
		.join(' ');
}

const s = 'try hello world';
console.log(solution(s));
