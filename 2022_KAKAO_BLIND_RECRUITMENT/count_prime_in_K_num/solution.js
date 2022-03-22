function isPrime(number) {

    if (number < 2) return 0;
    if (number == 2) return 1

    for (let i = 2 ; i <= Math.sqrt(number) ; i++) {
        if (number % i == 0) return 0;
    }

    return 1;
}


function solution(n, k) {
    var answer = 0;

    var changedNum = n.toString(k);

    var tokens = changedNum.split('0');

    for (let i = 0 ; i < tokens.length ; i++) {
        let token = tokens[i];
        if (isPrime(token) == 1) answer += 1;
    }

    return answer;
}
