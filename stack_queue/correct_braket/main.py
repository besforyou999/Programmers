def solution(s):
    answer = True

    stack = []
    
    for ch in s:
        if ch == "(":
            stack.append(ch)
        else:
            if len(stack) == 0:
                stack.append(ch)
            elif stack[-1] == ")":
                stack.append(ch)
            else:
                stack.pop(-1)
    
    if len(stack) > 0:
        answer = False

    return answer
