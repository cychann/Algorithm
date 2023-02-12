function solution(n) {
  let result = n;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        result--;
        break;
      }
    }
  }

  return result;
}
