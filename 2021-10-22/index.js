function solution(x) {
	let temp = x.toString().split('');
	let sum = temp.reduce((acc, cur) => (acc += Number(cur)), 0);
	return x % sum === 0 ? true : false;
}
const x = 18;
console.log(solution(x));
