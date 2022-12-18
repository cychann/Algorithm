function solution(n) {
  var answer = 0;
  let nStr = String(n)
    .split("")
    .map((n) => (answer += parseInt(n)));

  return answer;
}
