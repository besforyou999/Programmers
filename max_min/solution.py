def solution(s):
    answer = ''
    l = list(map(int, s.split(' ')))
    l.sort()

    minimum = l[0]
    maximum = l[-1]

    answer = str(minimum) + " " + str(maximum)

    return answer

