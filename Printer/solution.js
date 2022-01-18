function solution(priorities, location) {
    var answer = 1;
    
    let pairArr = [];
    
    for (let i = 0 ; i < priorities.length ; i++) {
        if (i != location)
            pairArr.push([priorities[i],0]);
        else
            pairArr.push([priorities[i],1]);
    }
    
    for (let i = 0 ; i < priorities.length ; i++) {
        console.log(pairArr[i][0] + " : " + pairArr[i][1]);
    }

    function makePrintOrder() {
        while(pairArr.length > 0) {
            let curr = pairArr.shift();
            if (isBiggest(curr[0])) {
                if (curr[1] == 1) return;
                
                    answer+=1;
            } else {
                pairArr.push(curr);
            }
        }
    }
    
    function isBiggest(num) {
        for (let i = 0 ; i < pairArr.length ; i++) 
            if (pairArr[i][0] > num) return false;    
        return true;
    }
    
    makePrintOrder();

    return answer;
}
