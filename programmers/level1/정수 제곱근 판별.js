function solution(n) {
  let answer = 0;
  const square = Math.sqrt(n);
  answer = square % 1 === 0 ? (square + 1) * (square + 1) : -1;
  return answer;
}
