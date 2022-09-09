def deleteAllZeros(number):
    result = ""
    countZeros = 0
    for ch in number:
        if ch == '1':
            result += ch
        elif ch == '0':
            countZeros += 1

    return [str(result), countZeros]


def solution(s):
    answer = []
    totalDeletedZeros = 0
    convertCount = 0
    while True:
        x, deletedZeros = deleteAllZeros(s)
        totalDeletedZeros += deletedZeros
        convertCount += 1
        c = len(x)
        x = format(c, 'b')
        if x == '1':
            break
        s = x

    answer.append(convertCount)
    answer.append(totalDeletedZeros)

    return answer

