function dfs(computers, visited, node) {
  visited[node] = true;
  for (let i = 0; i < computers[node].length; i++) {
    if (computers[node][i] && !visited[i]) {
      dfs(computers, visited, i);
    }
  }
}

function solution(n, computers) {
  let result = 0;

  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      result++;
    }
  }

  return result;
}

// sol2
/*
1~n까지 탐색하면서, visted가 false인 경우에 +1
이 과정에서 각 순회마다 dfs로 visited 중간 처리
*/

function solution(n, computers) {
  let result = 0;

  const visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;

    for (let i = 0; i < computers[v].length; i++) {
      if (computers[v][i] && !visited[i]) dfs(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      result++;
    }
  }

  return result;
}
