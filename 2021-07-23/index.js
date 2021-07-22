function LSCS (arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    //O(n)
    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
};

console.log(LSCS([1, 2, 3, -4, 5]))