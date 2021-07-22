# Toy LPS

## 문제 이해

-   LPS는 Longest Prefix which is also Suffix의 약자이다.
-   non-overlapping(접두어와 접미어가 겹치치 않아야 함) 규칙을 적용해 LPS를 찾아 LPS의 길이를 리턴해야한다.
-   prefix : 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열 (접두어)
-   suffix : 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열 (접미어)
-   종합 해보자면, aaabaaa 일 경우에는 앞뒤 a 세개는 각각 prefix, suffix가 된다. --> LPS = 3
-   aaaaa -> non-overlaping 적용 시, 가운데 a가 겹치면 안되기 때문에 앞뒤로 두개의 a가 각각 prefix와 suffix가 된다. -> LPS = 2
-   aaaaa -> non-overlaping 미 적용시, 문자 자체가 prefix이자 suffix가 되기 때문에 LPS = 5가 된다.

## 계획

-   반복문을 str의 길이만큼 순회해서 prefix는 0부터 i만큼 잘라주고, suffix는 str의 길이에서 i만큼 뺀 값을 할당해준다.
-   만약 prefix와 suffix가 같다면 prefix를 반환할 변수에 담아주고, 길이를 리턴한다.

## 느낀점

-   개념이 조금 생소하다보니, 문제 자체를 이해하는데도 약간의 시간이 소요됬다.
-   해당 문제는 정규식으로 더 간단하게 풀 수도 있다.

```js
function LPS(str) {
    let result = str.match(/(\w*).*\1/);
    return result[1].length;
}
```

-   str.match() : 인자로 들어오는 정규식과 문자열이 일치하는 값을 배열로 반환한다.
-   -   : asterisk
-   \w : **any word character** which usually means alphanumeric (letters, numbers, regardless of case) plus underscore (\_)
-   \1 : \n은 정규식 내부의 n번째 괄호에서 대응한 부분에 대한 역참조
