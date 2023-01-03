function solution(arr, divisor) {
  let answer = [];
  arr.forEach((n) => {
    if (n % divisor === 0) answer.push(n);
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
