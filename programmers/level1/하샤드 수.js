function solution(x) {
  let sum = 0;
  (x + "").split("").forEach((n) => (sum += +n));
  return x % sum === 0 ? true : false;
}
