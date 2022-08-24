def countOne(number):
    bin_num = bin(number)
    string = str(bin_num)
    one_count = 0
    for ch in string:
        if ch == '1':
            one_count += 1
    return one_count


def solution(n):
    one_count = countOne(n)

    while True:
        n += 1
        tmp = countOne(n)
        if one_count == tmp:
            break

    return n


