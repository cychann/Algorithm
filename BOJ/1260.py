from collections import deque

n, m, v = map(int, input().split())
graph = [[]*(n+1) for _ in range(n+1)]
d_visited = [0] * (n+1)
b_visited = [0] * (n+1)
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1, n+1):
    graph[i].sort()


def dfs(graph, V, d_visited):
    d_visited[V] = 1
    print(V, end=' ')

    for i in graph[V]:
        if d_visited[i] == 0:
            dfs(graph, i, d_visited)


def bfs(graph, start, b_visited):
    queue = deque([start])
    b_visited[start] = 1

    while queue:
        v = queue.popleft()
        print(v, end=' ')
        for i in graph[v]:
            if b_visited[i] == 0:
                queue.append(i)
                b_visited[i] = 1


dfs(graph, v, d_visited)
print()
bfs(graph, v, b_visited)
