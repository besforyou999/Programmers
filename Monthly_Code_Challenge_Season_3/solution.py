def solution(n):
    answer = 0
    x = 1

    while True:
        remain = int(n % x)
        if remain == 1:
            answer = x
            break
        x += 1

    return answer

