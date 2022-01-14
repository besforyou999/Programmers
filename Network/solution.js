function solution(n, computers) {
    var answer = 0;
    
    let visited = new Array(n);
    visited.fill(false);
    
    for (let i = 0 ; i < n ; i++) {
        if (visited[i] == true) continue; 
        dfs(i);
        answer += 1;
    }
    
    function dfs(node) {
        
        let edges = computers[node];
        for (let i = 0 ; i < n ; i++) {
            if (i != node && edges[i] == 1 && visited[i] == false) {
                visited[i] = true;
                dfs(i);
            }
        }
    }
    
    return answer;
}
