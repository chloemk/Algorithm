function solution(s) {
	return s.split('').sort().reverse().join('');
}

const s = 'Zbcdefg';
console.log(solution(s));
