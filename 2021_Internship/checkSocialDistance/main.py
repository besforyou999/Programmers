from collections import deque


def check_distance(graph):
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]

    for row in range(5):
        for col in range(5):
            if graph[row][col] == "P":
                visited = [[False for _ in range(5)] for _ in range(5)]
                matrix = [[0 for _ in range(5)] for _ in range(5)]
                visited[row][col] = True
                queue = deque([])
                queue.append([row, col])
                while queue:
                    y, x = queue.popleft()
                    for i in range(4):
                        ny = y + dy[i]
                        nx = x + dx[i]
                        prev_val = matrix[y][x]
                        if nx < 0 or ny < 0 or nx >= 5 or ny >= 5 or visited[ny][nx] is True:
                            continue
                        if graph[ny][nx] == "X":
                            continue
                        if graph[ny][nx] == "P":
                            if prev_val <= 1:
                                return 0
                        elif graph[ny][nx] == "O":
                            if prev_val == 0:
                                visited[ny][nx] = True
                                matrix[ny][nx] = prev_val + 1
                                queue.append([ny, nx])
                            else:
                                visited[ny][nx] = True

    return 1


def solution(places):
    result = []
    for place in places:
        result.append(check_distance(place))
    return result

