function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer[i - 1] = x * i;
  }
  return answer;

  // Array(n).fill(x).map((v, i) => (i + 1) * v)
}
