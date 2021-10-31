from collections import deque
import sys


def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = 1

    while queue:
        c = queue.popleft()
        for i in graph[c]:
            if visited[i] == 0:
                visited[i] = 1
                queue.append(i)


n, m = map(int, sys.stdin.readline().split())
graph = [[]*(n+1) for _ in range(n+1)]
visited = [0] * (n+1)
for i in range(m):
    u, v = map(int, sys.stdin.readline().split())
    graph[u].append(v)
    graph[v].append(u)

cnt = 0
for i in range(1, n+1):
    if visited[i] == 0:
        bfs(graph, i, visited)
        cnt += 1
print(cnt)
