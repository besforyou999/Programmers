def solution(m, n, puddles):
    answer = 0
    roadmap = [[0] * m for _ in range(n)]
    dx = [1, 0]
    dy = [0, 1]

    j = 0
    while [j + 1, 1] not in puddles and j in range(m):
        roadmap[0][j] = 1
        j += 1

    i = 0
    while[1, i + 1] not in puddles and i in range(n):
        roadmap[i][0] = 1
        i += 1

    for i in range(1, n):
        for j in range(1, m):
            if [j + 1, i + 1] not in puddles:
                roadmap[i][j] = roadmap[i - 1][j] + roadmap[i][j - 1]

    return roadmap[-1][-1] % 1000000007
