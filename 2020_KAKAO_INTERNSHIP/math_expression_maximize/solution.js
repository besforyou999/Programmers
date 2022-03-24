function solution(exp) {

    let symbol_set = new Set();
    let symbols = [], tokens = [];

    div_to_token(tokens,exp);
    
    check_symbols(symbol_set, tokens);

    for (let item of symbol_set) symbols.push(item);

    let symbol_permutation = [];
    symbol_permutation  = permutation(symbols.length, symbols.length, symbols);

    let max = -1;

    symbol_permutation.forEach( function(element) {
        let result = calc_by_priority(element, tokens);
        if (max < result) max = result;
    });

    return max;
}

function calc_by_priority(order, arr) {
    let tokens = arr.slice();
    let new_arr = [];

    order.forEach(function(element) {
        for (let i = 0 ; i < tokens.length ; i++) {
            if (tokens[i] == element) {
                let prev = tokens[i-1];
                let post = tokens[i+1];
                let new_element = eval(prev + tokens[i] + post);
                tokens.splice(i-1,3,new_element);
                i -= 1;
            }
        }
    });

    return Math.abs(tokens[0]);
}


function permutation(n , m, arr) {
    let temp = Array.from({length: m}, ()=>0);
    let visited = Array.from({length: n}, ()=>0);
    let answer = [];

    function DFS(L) {
        if (L === m) {
            answer.push(temp.slice());
        } else {
            for (let i = 0; i < n ; i++) {
                if (!visited[i]) {
                    visited[i] = 1;
                    temp[L] = arr[i];
                    DFS(L + 1);
                    visited[i] = 0;
                }
            }
        }
    }

    DFS(0);
    return answer;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function div_to_token(arr, exp) {
    let token = new String();
    for (let i = 0 ; i < exp.length ; i++) {
        let char = exp.charAt(i);
        if (char == '+' || char == '*' || char =='-') { 
            arr.push(token);
            arr.push(char);
            token = new String();
        } else {
            token += char;
        }
    }
    arr.push(token);
}

function check_symbols(symbols, arr) {
    arr.forEach(function(element){
        if (element == '+' || element == '*' || element =='-') { 
            symbols.add(element);
        } 
    });
}

