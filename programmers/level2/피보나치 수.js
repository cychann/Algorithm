function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) answer[0] = 0;
    if (i === 1) answer[1] = 1;
    if (i >= 2) {
      answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
    }
  }
  return answer[n] % 1234567;

  return answer;
}
