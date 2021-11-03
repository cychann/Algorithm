from collections import deque

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


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

            if 0 <= nx < m and 0 <= ny < n and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx, ny))
                cnt += 1
    return cnt


m, n, k = map(int, input().split())
graph = [[1]*n for _ in range(m)]


for _ in range(k):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2):
        for j in range(x1, x2):
            graph[i][j] = 0

chk = 0
cnt_arr = []
for i in range(m):
    for j in range(n):
        if graph[i][j] == 1:
            chk += 1
            cnt_arr.append(bfs(i, j))

cnt_arr.sort()
print(chk)
for i in cnt_arr:
    print(i, end=' ')
