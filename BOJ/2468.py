from collections import deque


def bfs(x, y, graph):
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0

    while queue:
        a, b = queue.popleft()
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]

            if 0 <= nx < n and 0 <= ny < n and graph[x][y] != 0:
                graph[nx][ny] = 0
                queue.append((nx, ny))


n = int(input())
graph = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
chk_cnt = []
for _ in range(n):
    graph.append(list(map(int, input().split())))

for r in range(2, n+1):
    t_graph = [item[:] for item in graph]
    cnt = 0

    for i in range(n):
        for j in range(n):
            if t_graph[i][j] <= r:
                t_graph[i][j] = 0

    for i in range(n):
        for j in range(n):
            if t_graph[i][j] != 0:
                bfs(i, j, t_graph)

                print(i, j, r)
                cnt += 1
    chk_cnt.append(cnt)

print(chk_cnt)
