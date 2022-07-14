function solution(s){
  var answer = true;

  let stack = [];
  let len = 0;

  for(let i = 0 ; i < s.length ; i++) {
    let ch = s[i];
    if (ch === '(') {
      stack.push(ch);
      len += 1;
    } else {
      if (len === 0) return false;
      let top = stack[len-1];
      if (top === '(') {
        stack.pop();
        len -= 1;
      } else if (top === ')') {
        stack.push(ch);
        len += 1;
      }
    }
  }

  if (len !== 0) answer = false;

  return answer;
}


