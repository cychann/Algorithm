function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let chk = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) chk++;
    }
    if (chk >= 3) result++;
  }

  return result;
}
