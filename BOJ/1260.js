const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const DFS_VISITED = new Array(N + 1).fill(false);
const BFS_VISTIED = new Array(N + 1).fill(false);
const DFS_RESULT = [];
const BFS_RESULT = [];

function dfs(v) {
  
  DFS_VISITED[v] = true;
  DFS_RESULT.push(v);

  for (const neighbor of graph[v]) {
    if (!DFS_VISITED[neighbor]) {
      dfs(neighbor);
    }
  }
}

function bfs(v) {
  const queue = [];
  BFS_VISTIED[v] = true;
  queue.push(v);

  while (queue.length > 0) {
    const node = queue.shift();
    BFS_RESULT.push(node);

    for (const neighbor of graph[node]) {
      if (!BFS_VISTIED[neighbor]) {
        BFS_VISTIED[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(DFS_RESULT.join(" "));
console.log(BFS_RESULT.join(" "));
