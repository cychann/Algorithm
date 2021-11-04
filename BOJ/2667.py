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
            if 0 <= nx < n and 0 <= ny < n and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                cnt += 1
                queue.append((nx, ny))
    return cnt


n = int(input())
graph = []
for _ in range(n):
    graph.append(list(map(int, input())))

total = 0
cnt_arr = []

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            cnt_arr.append(bfs(i, j))
            total += 1

cnt_arr.sort()
print(total)
for cnt in cnt_arr:
    print(cnt)
