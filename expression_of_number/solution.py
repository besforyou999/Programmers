def solution(n):
    answer = 0

    lp = rp = 1
    
    while lp <= n:
        tmp = 0
        rp = lp
        while True:
            tmp += rp
            rp += 1
            if tmp == n:
                answer += 1
                break
            elif tmp > n:
                break
        lp += 1
            
    return answer

