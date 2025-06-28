const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const T = parseInt(input[line++]);

function dfs(x, y, graph, visited, N, M) {
  visited[x][y] = true;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      0 <= nx &&
      nx < N &&
      0 <= ny &&
      ny < M &&
      !visited[nx][ny] &&
      graph[nx][ny] === 1
    ) {
      dfs(nx, ny, graph, visited, N, M);
    }
  }
}

function solveTestCase() {
  const [M, N, K] = input[line++].split(" ").map(Number);

  const graph = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    graph[y][x] = 1;
  }

  let cnt = 0;

  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[j][i] && graph[j][i] === 1) {
        dfs(j, i, graph, visited, N, M);
        cnt++;
      }
    }
  }

  return cnt;
}

for (let t = 0; t < T; t++) {
  const answer = solveTestCase();
  console.log(answer);
}
