function solution(n) {
  var answer = 0;
  let x = 1;
  while (true) {
    x++;
    if (n % x === 1) {
      answer = x;
      break;
    }
  }
  return answer;
}
