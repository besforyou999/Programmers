function makeString(len, n) {
    let idx = 0;
    let str = "";

    while ( str.length <= len ) {
        let current = idx.toString(n);
        str += current.toUpperCase();
        idx += 1;
    }

    return str;
}

function makeAnswerString(str, t, m, p) {
    let ans = "";

    while ( ans.length < t && p <= str.length ) {
        ans += str[p - 1];
        p += m;
    }

    return ans;
}

function solution(n, t, m, p) {
    let answer = '';

    const needed_len = m * t; 

    const str = makeString(needed_len, n);


    answer = makeAnswerString(str, t, m, p);

    return answer;
}

