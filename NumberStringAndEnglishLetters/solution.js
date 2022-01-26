function solution(str) {
    var answer = "";
    var tempStr = "";
   
    for (let i = 0 ; i < str.length ; i++) {
        let ch = str[i];
        if (isNum(ch)) {
            answer += ch;
        }
        if (isAlpha(ch)) {
            tempStr += ch;
        }
        if(testIfStrIsComplete(tempStr)) {
            let num = toNumberString(tempStr);
            answer += num;
            tempStr = "";
        }
    }

    return Number(answer);
}

function isNum(ch) {
    var idx = 0;
    var i = ch.charCodeAt(idx);
    if (i >= 48 && i <= 57) return true;
    return false;
}

function isAlpha(ch) {
    var index = 0;
    var i = ch.charCodeAt(index);
    if (i>= 97 && i <= 122) return true;
    return false;
}

function toNumberString(str) {
    switch (str) {
        case "zero"  : return "0";
        case "one"   : return "1";
        case "two"   : return "2";
        case "three" : return "3";
        case "four"  : return "4";
        case "five"  : return "5";
        case "six"   : return "6";
        case "seven" : return "7";
        case "eight" : return "8";
        case "nine"  : return "9";
    }
}

function testIfStrIsComplete(str) {
    switch (str) {
        case "zero"  : return true;
        case "one"   : return true;
        case "two"   : return true;
        case "three" : return true;
        case "four"  : return true;
        case "five"  : return true;
        case "six"   : return true;
        case "seven" : return true;
        case "eight" : return true;
        case "nine"  : return true;
        default : return false;
    }
}
