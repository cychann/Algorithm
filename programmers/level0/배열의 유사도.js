function solution(s1, s2) {
  let answer = 0;
  s1.forEach((s) => {
    s2.includes(s) && answer++;
  });

  return answer;
}
