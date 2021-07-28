function boringBlackJack(cards) {

    let count = 0;

    for (let i = 0; i < cards.length; i++) {
        for (let j = i  + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                let curCard = cards[i] + cards[j] + cards[k];
                if (isPrime(curCard)) {
                    count++;
                }
            }
        }
    }

    function isPrime(curCard) {
        for (let i = 2; i < curCard/2; i++) {
            if (curCard % i === 0) return false;
        }
        return true;
    }
    return count;
}

console.log(boringBlackJack([2, 3, 4, 8, 13]));