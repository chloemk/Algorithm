function newChickenRecipe(stuffArr, choiceNum) {
    //만약, 사용할 수 있는 재료가 choiceNum보다 작다면 빈 배열[] 을 반환해야 합니다.

    //0 세개 없는 것들만 있는 result 어레이
    let result = [];
    for (let i = 0; i < stuffArr.length; i++) {
        let cur = String(stuffArr[i]).split('').filter(el => el === '0');
        if (cur.length < 3) result.push(stuffArr[i]);
    }

    if (result.length <= 0 || result.length < choiceNum) return [];

    //오름차순 정렬
    result.sort((a, b) => a - b); //[1, 10, 11, 1111111111]

    let newArr = [];
    function permutation (result, choiceNum, arr) {
        //base case
        if (choiceNum === 0) return newArr.push(arr)
        
        //recursive case
        for (let i = 0; i < result.length ; i++) {
            //복사
            let sliced = result.slice();
            sliced.splice(i, 1);
            permutation(sliced, choiceNum - 1, arr.concat(result[i]))
        }

    }
    permutation(result, choiceNum, []);

    return newArr;
}

console.log(newChickenRecipe([1, 10, 1100, 1111], 2))