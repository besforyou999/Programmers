function solution(begin, target, words) {
    var answer = 0;
    var len = begin.length;
    var visited = new Array(words.length);
    visited.fill(false);

    function dfs(word, depth) {
        if (word == target) {
            if (answer == 0) answer = depth;
            else 
                answer = Math.min(depth, answer);
            return;
        }

        let list = [];
        for (let i = 0 ; i < words.length ; i++) {
            if (diffLetterNum(word, words[i]) == 1 && visited[i] == false) { 
                list.push(words[i]);
                visited[i] = true;
            }
        }

        if (list.length == 0) return;
        for (let i = 0 ; i < list.length ; i++) dfs(list[i], depth + 1);
    }

    function diffLetterNum(word1 , word2) {
        let num = 0;
        for (let i = 0 ; i < len ; i++) if (word1[i] != word2[i]) num += 1;
        return num;
    }
  
    dfs(begin, 0);   
    return answer;
}
