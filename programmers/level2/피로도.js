function dfs(curK, cnt, dungeons, visited) {
  let answerMax = cnt;
  for (let i = 0; i < dungeons.length; i++) {
    if (curK >= dungeons[i][0] && !visited[i]) {
      visited[i] = true;
      answerMax = Math.max(
        answerMax,
        dfs(curK - dungeons[i][1], cnt + 1, dungeons, visited)
      );
      visited[i] = false;
    }
  }

  return answerMax;
}

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  const answerMax = dfs(k, 0, dungeons, visited);
  return answerMax;
}
