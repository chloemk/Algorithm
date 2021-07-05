function solution(numbers) {

    numbers = numbers.map(cur => cur + '');
    numbers.sort((a, b) => (b + a) - (a + b));
    let result = numbers.join('');    
    if (result[0] === '0') return '0';
    else return result;
};

console.log(solution([3, 30, 34, 5, 9]));