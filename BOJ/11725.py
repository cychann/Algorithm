import sys
sys.setrecursionlimit(10**6)

n = int(input())
graph = [[]*(n+1) for _ in range(n+1)]
visited = [0] * (n+1)
parent = [0] * (n+1)


for _ in range(n-1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)


def dfs(v):
    visited[v] = 1
    for i in graph[v]:
        if visited[i] == 0:
            parent[i] = v
            dfs(i)


dfs(1)

for i in range(2, n+1):
    print(parent[i])
