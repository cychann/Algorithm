from collections import deque

n = int(input())
a, b = map(int, input().split())
m = int(input())
graph = [[] * (n+1) for _ in range(n+1)]
visited = [0] * (n+1)
res = [0] * (n+1)
cnt = 0
for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)


def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = 1

    while queue:
        v = queue.popleft()
        if v == b:
            break
        for i in graph[v]:
            if visited[i] == 0:
                queue.append(i)
                visited[i] = 1
                res[i] = res[v] + 1


bfs(graph, a, visited)
if res[b] == 0:
    print(-1)
else:
    print(res[b])
