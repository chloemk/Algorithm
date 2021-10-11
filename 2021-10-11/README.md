# Programmers 위장

## 문제 이해

- 스파이는 매일 다른 옷을 조합해서 입는다. clothes [의상의 이름, 의상의 종류]로 이루어져있는 이차원 배열이다. 
- 입출력 예시를 보면 [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]] 이런 clothes 배열이 들어오면 5를 리턴한다고 한다. 
- headgear는 2개, eyewear는 1개이기 때문에 다음과 같은 조합이 가능하다. 
- yellow_hat, blue_sunglasses, green_turban, yellow_hat + blue_sunglasses, green_turban + blue_sunglasses => return 5

## 계획

- 의상의 종류 (배열의 1번째 인덱스)를 key로 가지고 있는 의상의 개수를 센다. (객체 key value형식)
- 의상 카테고리 별 가지수와 하나만 입는 경우도 있기 때문에 1을 더해서 곱해준다. 
- 그리고 모든 의상을 입지 않는 경우는 존재 하지 않아서 -1을 한다.
