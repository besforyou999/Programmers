function solution(N, stages) {
    let answer = new Array(N);
    let con = new Array(N);
    let len = stages.length;
    
    let currentStage = new Array(N+2);
    currentStage.fill(0);
    
    for (let i = 0 ; i < len; i++) {
        let stage = stages[i];
        currentStage[stage] += 1;
    }

    let sumOfPrev = 0;

    for (let i = 0 ; i < N ; i++) {
        con[i] = [ currentStage[i+1] / ( len - sumOfPrev ) , i + 1 ];
        sumOfPrev += currentStage[i+1];
    }

    con.sort( function (a,b) {
        return b[0] - a[0];    
    });
     
    for (let i = 0 ; i < N ; i++) answer[i] = con[i][1];
    
    return answer;
}
