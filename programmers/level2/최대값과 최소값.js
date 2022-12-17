function solution(s) {
  var answer = "";
  const arr = s.split(" ").map((n) => parseInt(n));

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  answer += min + " " + max;

  return answer;
}
