function solution(i, j, k) {
  let answer = 0;
  for (let chk = i; chk <= j; chk++) {
    [...chk.toString()].forEach((s) => {
      if (+s === k) answer++;
    });
  }

  return answer;
}
