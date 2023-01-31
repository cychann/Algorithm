function solution(n) {
  let chk = 1;
  while (true) {
    if ((chk * 6) % n === 0) return chk;
    chk++;
  }
}
