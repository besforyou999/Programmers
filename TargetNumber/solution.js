function solution(numbers, target) {
    var answer = 0;
    let len = numbers.length;
    
    function solve(number, index, sum) {
        
        sum += number;
        index++;
        
        if (index == len) {
            if (sum == target) 
                answer++;
            return;
        }
        
        let element = numbers[index];
        solve(element, index, sum);
        solve(-element, index, sum);
    }
    
    solve(numbers[0], 0, 0);
    solve(-numbers[0], 0, 0);
    
    return answer;
}
