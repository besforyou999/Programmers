function solution(array, commands) {
    var answer = [];
    
    for (let index = 0 ; index < commands.length ; index++) {
        
        var com = commands[index];
        var i = com[0], j = com[1] , k = com[2];
        var arr = [];
        
        for (let a = i - 1 ; a < j ; a++) arr.push(array[a]);
        
        arr.sort(function(a,b) {
            return a - b;
        });
        answer.push(arr[k - 1]);
    }
    
    return answer;
}
