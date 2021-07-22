function LPS (str) {
    //반환할 문자열
    let result = '';

    for (let i = 0; i < str.length / 2; i++) {

        let prefix = str.slice(0, i);
        let suffix = str.slice(str.length - i);
        if (prefix === suffix) result = prefix;
    };

    //LPS 길이 리턴
    return result.length;
}

console.log(LPS('aabcdaabc'));