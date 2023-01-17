function solution(s) {
  let answer = true;
  s.split("").map((i) => {
    if (isNaN(+i)) answer = false;
  });
  if (s.length !== 4 && s.length !== 6) answer = false;
  return answer;
}
