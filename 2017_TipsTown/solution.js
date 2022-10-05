function solution(s)
{
    const stack = [];
    stack.push(s[0]);

    for (let i = 1 ; i < s.length ; i++) {
        const ch = s[i];
        if (stack[stack.length - 1] == ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    let answer = 0;
    if (stack.length == 0) answer = 1;
    return answer;
}
