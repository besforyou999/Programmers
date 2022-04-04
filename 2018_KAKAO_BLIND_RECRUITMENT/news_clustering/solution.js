let isAlpha = function(ch) {
    return /^[A-Z]$/i.test(ch);
}

function preprocessing(set1) {
    let ans = [];
    set1.forEach( function(item) {
        let ch1 = item[0]
        let ch2 = item[1]
        if (isAlpha(ch1) && isAlpha(ch2)) ans.push(item.toUpperCase())
    });
    return ans;
}

function makeSets(str) {
    let list = [] , curr, prev = str[0]; 
    for (let i = 1 ; i < str.length ; i++) {
        curr = str[i];
        let element = prev + curr;
        list.push(element)
        prev = curr;
    }
    return list;
}

function count_intersection_num(set1, set2) {
    let count = 0;
    for (let i = 0 ; i < set1.length ; i++) {
        let token = set1[i];
        for (let j = 0 ; j < set2.length ; j++) {
            if (token == set2[j]) {
                count += 1;
                set2.splice(j,1)
                break;
            }
        }
    }
    return count;
}

function solution(str1, str2) {

    let set1 = makeSets(str1)
    let set2 = makeSets(str2)

    let A = preprocessing(set1)
    let B = preprocessing(set2)

    if (A.length == 0 && B.length == 0 ) return 65536;

    let A_len = A.length;
    let B_len = B.length;

    let intersection_num = count_intersection_num(A, B)

    //console.log(intersection_num)
    let union_num = A_len + B_len - intersection_num

    let zcard = intersection_num / union_num

    return Math.floor(zcard * 65536);
}

