from collections import deque


def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0
    cnt = 1

    while queue:
        a, b = queue.popleft()
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]

            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx, ny))
                cnt += 1
    return cnt


n, m, k = map(int, input().split())
graph = [[0] * m for _ in range(n)]
res = []
for _ in range(k):
    a, b = map(int, input().split())
    graph[a-1][b-1] = 1

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

max_res = 0
for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            max_res = max(max_res, bfs(i, j))

print(max_res)
