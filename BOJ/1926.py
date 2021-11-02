from collections import deque

cnt = 0


def bfs(x, y):
    global cnt
    cnt += 1
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0
    area = 1

    while queue:
        a, b = queue.popleft()
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]
            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx, ny))
                area += 1
    return area


n, m = map(int, input().split())
graph = []
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
max_area = 0

for _ in range(n):
    graph.append(list(map(int, input().split())))

for i in range(n):
    for j in range(m):
        if graph[i][j] == 1:
            max_area = max(max_area, bfs(i, j))

print(cnt)
print(max_area)
