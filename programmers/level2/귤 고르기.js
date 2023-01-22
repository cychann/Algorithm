function solution(k, tangerine) {
  let answer = 0;
  const obj = {};
  tangerine.map((t) => {
    obj[t] ? obj[t]++ : (obj[t] = 1);
  });
  const vals = Object.values(obj);
  vals.sort((a, b) => b - a);

  while (k > 0) {
    const chk = vals[0];
    k -= chk;
    answer++;
    vals.splice(0, 1);
  }
  return answer;
}
