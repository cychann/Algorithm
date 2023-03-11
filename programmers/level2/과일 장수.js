function solution(k, m, score) {
  let answer = 0;
  let sortedScore = score.sort((a, b) => a - b);

  while (sortedScore.length >= m) {
    let tmp = sortedScore.splice(sortedScore.length - m, m);
    answer += Math.min(...tmp) * m;
  }

  return answer;
}
