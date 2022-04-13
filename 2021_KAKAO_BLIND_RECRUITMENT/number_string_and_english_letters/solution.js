function changeToDigit(str) {

    switch(str) {
        case "zero" : return "0";
        case "one"  : return "1";
        case "two"  : return "2";
        case "three": return "3";
        case "four" : return "4";
        case "five" : return "5";
        case "six"  : return "6";
        case "seven": return "7";
        case "eight": return "8";
        case "nine" : return "9";
        default     : return -1;
    }
}

function solution(str) {
   
    let answer = "";
    let temp = "";
    for (let i = 0 ; i < str.length ; i++) {
        let ch = str[i];

        if (isNaN(ch) == true ) {
            temp += ch;
            let digit = changeToDigit(temp);
            if (digit != -1) {
                answer += digit;
                temp = "";
            }
        } else {
            answer += ch;
        }
    }

    return Number(answer);
}

