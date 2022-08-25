def solution(n):
    Fn = []
    Fn.append(0)
    Fn.append(1)

    for i in range(2, n+1):
        val = (Fn[i-1] + Fn[i-2]) % 1234567
        Fn.append(val)

    return Fn[-1]
