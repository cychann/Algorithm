n = int(input())
m = int(input())
graph = [[]*n for _ in range(n+1)]
for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)
visited = [0] * (n+1)
cnt = []


def dfs(graph, v, visited):
    visited[v] = 1
    cnt.append(v)
    for i in graph[v]:
        if visited[i] == 0:
            dfs(graph, i, visited)


dfs(graph, 1, visited)

print(len(cnt) - 1)
