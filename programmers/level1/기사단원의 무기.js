const countPrime = (n) => {
  let cnt = 0;
  if (n === 1) return 1;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) cnt += 2;
  }
  if (Number.isInteger(Math.sqrt(n))) cnt--;

  return cnt;
};

function solution(number, limit, power) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    const primeCnt = countPrime(i);
    primeCnt > limit ? (result += power) : (result += primeCnt);
  }
  return result;
}
