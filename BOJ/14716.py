from collections import deque

dx = [0, 0, 1, 1, 1, -1, -1, -1]
dy = [1, -1, 0, -1, 1, 0, -1, 1]


def bfs(x, y):
    q = deque()
    q.append((x, y))
    graph[x][y] = 0

    while q:
        a, b = q.popleft()
        for i in range(8):
            nx = a + dx[i]
            ny = b + dy[i]
            if 0 <= nx < m and 0 <= ny < n and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                q.append((nx, ny))


m, n = map(int, input().split())
graph = []

for _ in range(m):
    graph.append(list(map(int, input().split())))

cnt = 0
for i in range(m):
    for j in range(n):
        if graph[i][j] == 1:
            bfs(i, j)
            cnt += 1

print(cnt)
