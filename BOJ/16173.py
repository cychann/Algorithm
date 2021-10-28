from collections import deque
import sys


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        if graph[x][y] == -1:
            return True

        for i in range(2):
            nx = x + dx[i] * graph[x][y]
            ny = y + dy[i] * graph[x][y]

            if 0 <= nx < n and 0 <= ny < n and not visit[nx][ny]:
                visit[nx][ny] = 1
                queue.append((nx, ny))
    return False


n = int(input())
graph = []
dx = [0, 1]
dy = [1, 0]
visit = [[0] * n for _ in range(n)]

for i in range(n):
    graph.append(list(map(int, sys.stdin.readline().split())))

if bfs(0, 0):
    print("HaruHaru")
else:
    print("Hing")
