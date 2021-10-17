function solution(s, n) {
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
	let result = '';

	for (let i = 0; i < s.length; i++) {
		let curAlphabet = s[i];

		if (curAlphabet === ' ') {
			result += ' ';
			continue;
		}

		let whichCase = upperCase.includes(curAlphabet) ? upperCase : lowerCase;
		let index = whichCase.indexOf(curAlphabet) + n;

		if (index >= whichCase.length) index -= whichCase.length;
		result += whichCase[index];
	}
	return result;
}

const s = 'a B z';
const n = 4;
console.log(solution(s, n));
