function solution(t, p) {
  let tLen = t.length;
  let pLen = p.length;
  let result = 0;
  for (let i = 0; i <= tLen - pLen; i++) {
    let chk = t.slice(i, i + pLen);
    if (+chk <= +p) result++;
  }

  return result;
}
