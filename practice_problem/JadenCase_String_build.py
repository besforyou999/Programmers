def solution(s):
    answer = ''

    length = len(s)

    tokens = []
    buff = ''
    jaden = 0
    for i in range(length):
        ch = s[i]
        if ch.isdigit():
            buff += ch
            jaden = 1
        elif ch.isalpha():
            if jaden == 0:
                buff += ch.capitalize()
                jaden = 1
            elif jaden == 1:
                buff += ch.lower()
        elif ch == ' ':
            if buff != '':
                tokens.append(buff)
                buff = ''
                jaden = 0
                tokens.append(ch)
            elif buff == '':
                tokens.append(ch)

    if buff != '':
        tokens.append(buff)

    for token in tokens:
        answer += token

    return answer

