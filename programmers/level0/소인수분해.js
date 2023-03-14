function solution(n) {
  let result = [];

  let chk = 2;
  while (n > 1) {
    if (n % chk === 0) {
      while (n % chk === 0) {
        n = Math.floor(n / chk);
      }
      result.push(chk);
    }
    chk++;
  }

  return result;
}
