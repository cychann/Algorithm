function solution(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  for (const from in graph) {
    graph[from].sort();
  }

  const result = [];

  const dfs = (airport) => {
    while (graph[airport] && graph[airport].length > 0) {
      const next = graph[airport].shift();
      dfs(next);
    }
    result.push(airport);
  };

  dfs("ICN");

  return result.reverse();
}
