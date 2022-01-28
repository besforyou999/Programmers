function solution(left, right) {
    var answer = 0;
    
    for (let i = left ; i <= right ; i++) {
        let n = findDivNum(i);
        if (n%2 ==0) answer += i;
        else answer -= i;
    }

    function findDivNum(n) {
        let count = 0;
        for (let i = 1 ; i * i <= n ; i++) {
            if (n % i == 0) {
               count += 1;
               if ( i != n / i) count += 1;
            }
        }
        return count;
    }
    
    return answer;
}



