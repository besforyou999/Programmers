import copy
from collections import deque


def solution(maps):
    answer = 0

    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]

    graph = copy.deepcopy(maps)

    n = len(graph)
    m = len(graph[0])

    queue = deque()
    queue.append([0, 0])

    while queue:
        y, x = queue.popleft()
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            if ny < 0 or nx < 0 or ny >= n or nx >= m:
                continue
            if graph[ny][nx] == 0:
                continue
            if graph[ny][nx] == 1:
                graph[ny][nx] = graph[y][x] + 1
                queue.append([ny, nx])

    if graph[n-1][m-1] == 1:
        answer = -1
    else:
        answer = graph[n-1][m-1]

    return answer


