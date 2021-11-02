function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0 , sameNumCount = 0;
    
    for ( let i = 0 ; i < lottos.length ; i++ ) {
        
        let searchNum = lottos[i];
        
        if ( searchNum == 0 ) {
            zeroCount += 1;
            continue;
        }
        
        for ( let j = 0 ; j < win_nums.length ; j++ ) {
            let currentNum = win_nums[j];
            if(searchNum == currentNum) {
                sameNumCount += 1;
                break;
            }            
        } 
    }
    
    let best = 7 - ( zeroCount + sameNumCount);
    let worst = 7 - sameNumCount;
    
    if ( zeroCount == 6 ) {
        worst = 6;    
    } else if ( zeroCount == 0 && sameNumCount == 1 ) {
        worst = 6;
    } else if ( zeroCount == 0 && sameNumCount == 0 ) {
        best = worst = 6;
    }
    
    answer.push(best);
    answer.push(worst);
    
    return answer;
}
