function solution(answers) {
    var answer = [];
    
    var one = 0, two = 0, three = 0;
    var one_ans = 1, two_ans = 2, three_ans = 3;
    
    var sec_arr = [1, 3, 4, 5]
    var sec_idx = 0;
    
    var trd_arr = [3, 1, 2, 4, 5];
    var trd_idx = 0;
    
    for (let i = 0 ; i < answers.length ; i++) {
        
        var ans = answers[i];
        
        one_ans =  ( i % 5  ) + 1;
       
        if ( i % 2 == 1 ) {
            two_ans = sec_arr[sec_idx];
            sec_idx += 1;
            if (sec_idx == 4) sec_idx = 0;
        } else
            two_ans = 2;
        
        if (ans == one_ans) one++;
        if (ans == two_ans) two++;
        if (ans == three_ans) three++;
        
        if (i % 2 == 1) {
            trd_idx += 1;
            if (trd_idx == 5) trd_idx = 0;
            
            three_ans = trd_arr[trd_idx];
        }
    }
    
    function findMax(a,  b, c){
        let max = -1;
        if (a > max) max = a;
        if (b > max) max = b;
        if ( c > max) max = c;
        return max;
    }
    
    var max = findMax(one, two, three);
    
    if (max == one) answer.push(1);
    if (max == two) answer.push(2);
    if( max == three) answer.push(3);
    
    return answer;
}
