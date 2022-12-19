function solution(n) {
  answer = String(n)
    .split("")
    .reverse()
    .map((n) => parseInt(n));
  return answer;
}
