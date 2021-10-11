function solution(clothes) {
	let total = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc; 
  }, {});
  let item = Object.values(total);
  if (item.length === 1) return item[0];

  let answer = 1;
  item.forEach((cur) => {
    return answer = answer * (cur + 1)
  });
  return answer - 1;
}

const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));
