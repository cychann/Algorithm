from collections import deque

n = int(input())
graph = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
max = 0
for i in range(n):
    graph.append(list(map(int, input().split())))
    for j in range(n):
        if graph[i][j] > max:
            max = graph[i][j]


def bfs(x, y, v, visited):
    queue = deque()
    queue.append((x, y))
    visited[x][y] = 1

    while queue:
        a, b = queue.popleft()
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                if graph[nx][ny] > v and visited[nx][ny] == 0:
                    visited[nx][ny] = 1
                    queue.append((nx, ny))


res = 0
for r in range(max):
    visited = [[0] * n for _ in range(n)]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if graph[i][j] > r and visited[i][j] == 0:
                bfs(i, j, r, visited)
                cnt += 1
    if res < cnt:
        res = cnt

print(res)
