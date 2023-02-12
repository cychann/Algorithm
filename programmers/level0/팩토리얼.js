function solution(n) {
  let num = 1;
  let chk = 1;
  while (num <= n) {
    chk++;
    num *= chk;
  }
  return chk - 1;
}
