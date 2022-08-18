dic = {0: 4, 1: 1, 2: 2}


def solution(n):
    answer = ''
    while n > 0:
        remain = n % 3
        answer = (str(dic[remain]) + answer)
        n //= 3
        if remain == 0:
            n -= 1

    return answer

