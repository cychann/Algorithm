from collections import deque

dx = [0, 0, -1, -1, -1, 1, 1, 1]
dy = [1, -1, -1, 0, 1, -1, 0, 1]


def bfs(graph, x, y):
    queue = deque()
    queue.append((x, y))
    graph[x][y] = 0

    while queue:
        a, b = queue.popleft()
        for i in range(8):
            nx = a + dx[i]
            ny = b + dy[i]

            if 0 <= nx < h and 0 <= ny < w and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append([nx, ny])


while(True):
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break

    graph = []
    cnt = 0
    for i in range(h):
        graph.append(list(map(int, input().split())))

    for i in range(h):
        for j in range(w):
            if graph[i][j] == 1:
                bfs(graph, i, j)
                cnt += 1
    print(cnt)
