function solution(k, score) {
  let rank = [];
  let answer = [];

  score.forEach((s) => {
    rank.push(s);
    rank.sort((a, b) => a - b);
    if (rank.length > k) {
      rank.splice(0, 1);
    }
    answer.push(rank[0]);
  });

  return answer;
}
