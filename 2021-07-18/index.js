function solution(n, lost, reserve) {
    let result = 0;

    //reserve와 lost에 동시에 들어간 수 중복 제거
    let lostInfo = lost.filter(cur => !reserve.includes(cur)); // [2, 4]
    let reserveInfo = reserve.filter(cur => !lost.includes(cur)); // [1, 5]

    //reserve 배열 학생들이 lost에 있는 학생들에게 체육복을 빌려주면 lost 배열의 길이가 줄어든다. 
    //총 학생수 n명에서 reserve 학생들에게 빌리지 못한 학생 수를 빼면 최대값을 구할 수 있다. 
    result = n - lostInfo.filter(cur => {

        //reserve에 있는 학생(여벌이 있는 학생)과 lost 학생(여벌이 없는 학생)의 차이가 1이하인 학생을 찾는다.
        let found = reserveInfo.find(el => Math.abs(el - cur) <= 1);

        //없다면 true를 반환해 종료
        if (!found) return true;

        //빌려줄 수 있는 학생을 reserve 배열에서 필터한다.
        reserveInfo = reserveInfo.filter(el2 => el2 !== found);
    }).length;

    return result;
}

console.log(solution(5, [2, 3, 4], [1, 3, 5]));